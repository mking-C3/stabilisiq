import { NextRequest, NextResponse } from "next/server";
import { SMS_CONSENT_TEXT, SMS_CONSENT_VERSION } from "@/lib/consent";

export const runtime = "nodejs";

// Where submissions are persisted. Points at the n8n "StabilisIQ — SMS
// Opt-In Capture" workflow, which writes one row per submission into the
// sms_optins data table. Set N8N_OPTIN_WEBHOOK_URL in Vercel env vars.
const OPTIN_WEBHOOK_URL = process.env.N8N_OPTIN_WEBHOOK_URL;

// Light per-IP rate limit. Resets on cold start — enough to blunt casual
// form spam, not a substitute for a real WAF.
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 5;
const bucket = new Map<string, { count: number; resetAt: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = bucket.get(ip);
  if (!entry || now > entry.resetAt) {
    bucket.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_MAX;
}

function str(v: unknown, max: number): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Give it a minute and try again." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const b = (body ?? {}) as Record<string, unknown>;

  // Honeypot: real users never fill this; bots usually do.
  if (str(b.company_website, 200)) {
    // Pretend success so the bot doesn't retry, but persist nothing.
    return NextResponse.json({ ok: true });
  }

  const name = str(b.name, 120);
  const phone = str(b.phone, 40);
  const email = str(b.email, 200);
  const message = str(b.message, 4000);

  // CONSENT IS STRICTLY OPT-IN. Anything other than a literal boolean true
  // is treated as "no consent" — an absent or malformed field can never
  // accidentally enroll someone for texting.
  const smsConsent = b.sms_consent === true;

  if (!name || !phone || !message) {
    return NextResponse.json(
      { error: "Name, phone number, and a message are all required." },
      { status: 400 },
    );
  }

  // Digits-only sanity check. Deliberately permissive on formatting — the
  // goal is to catch typos, not to reject valid international numbers.
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) {
    return NextResponse.json(
      { error: "That phone number doesn't look right. Please check it." },
      { status: 400 },
    );
  }

  const record = {
    submitted_at: new Date().toISOString(),
    name,
    phone,
    email,
    message,
    sms_consent: smsConsent,
    // Store the exact wording shown at submission time. This is the artifact
    // a carrier compliance reviewer actually cares about.
    consent_text: smsConsent
      ? `[${SMS_CONSENT_VERSION}] ${SMS_CONSENT_TEXT}`
      : `[${SMS_CONSENT_VERSION}] NOT CHECKED — no SMS consent given. Text shown: ${SMS_CONSENT_TEXT}`,
    source_page: str(b.source_page, 200) || "unknown",
    ip,
    user_agent: (req.headers.get("user-agent") || "").slice(0, 500),
  };

  if (!OPTIN_WEBHOOK_URL) {
    // Misconfiguration must be loud, not silent — a dropped opt-in record is
    // a compliance gap, so fail the request rather than pretend it worked.
    console.error(
      "[contact] N8N_OPTIN_WEBHOOK_URL is not set; submission NOT persisted",
      { sms_consent: record.sms_consent, source_page: record.source_page },
    );
    return NextResponse.json(
      { error: "We couldn't record that. Please email matt@stabilisiq.com." },
      { status: 500 },
    );
  }

  try {
    const res = await fetch(OPTIN_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
      signal: AbortSignal.timeout(10_000),
    });

    if (!res.ok) {
      throw new Error(`Storage webhook returned ${res.status}`);
    }

    return NextResponse.json({ ok: true, smsConsent });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    console.error("[contact] failed to persist submission:", msg, {
      sms_consent: record.sms_consent,
    });
    return NextResponse.json(
      { error: "We couldn't record that. Please email matt@stabilisiq.com." },
      { status: 502 },
    );
  }
}
