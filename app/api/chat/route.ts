import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

export const runtime = "nodejs";

// Latest Claude model as of build time. For a high-volume demo you may
// prefer "claude-sonnet-4-6" (faster + cheaper, still plenty smart for SMS).
const MODEL = "claude-opus-4-7";

const SYSTEM_PROMPT = `You are the automated text back assistant for Mike's HVAC, a residential heating and cooling company. You triggered this text because the customer just called and nobody could pick up. Your job: respond warmly and fast, figure out what they need, and book them an appointment. Keep every message short, like a real text (one to three sentences max, casual, no corporate tone). Ask one question at a time. If it sounds like an emergency (no heat in winter, no AC in extreme heat, water leaking, gas smell, anything urgent) treat it as priority and offer the soonest slot. Offer two specific appointment windows (make up realistic ones like 'today 2pm to 4pm' or 'tomorrow morning 8am to 10am'). When they pick one, confirm the booking clearly and tell them a tech will call to confirm. Never break character, never mention you are an AI or a demo, never discuss anything off topic. This is a demonstration of a product, so keep the conversation moving toward a booked appointment quickly.`;

// Lightweight in-memory per-IP rate limit. Resets on serverless cold start.
// Not bulletproof, just enough to discourage abuse during a demo.
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 20;
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

type ClientMessage = { role: "user" | "assistant"; content: string };

function isClientMessage(m: unknown): m is ClientMessage {
  if (!m || typeof m !== "object") return false;
  const r = (m as { role?: unknown }).role;
  const c = (m as { content?: unknown }).content;
  return (r === "user" || r === "assistant") && typeof c === "string" && c.length <= 2000;
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Server is not configured. Missing ANTHROPIC_API_KEY." },
      { status: 500 },
    );
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "anon";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages. Take a breath and try again in a minute." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const raw = (body as { messages?: unknown })?.messages;
  if (!Array.isArray(raw) || raw.length === 0 || raw.length > 40) {
    return NextResponse.json(
      { error: "Invalid conversation history." },
      { status: 400 },
    );
  }
  const messages = raw.filter(isClientMessage);
  if (messages.length === 0) {
    return NextResponse.json({ error: "No valid messages." }, { status: 400 });
  }

  try {
    const client = new Anthropic({ apiKey });
    const result = await client.messages.create({
      model: MODEL,
      max_tokens: 300,
      system: SYSTEM_PROMPT,
      messages: messages.map((m) => ({ role: m.role, content: m.content })),
    });

    const text = result.content
      .filter((b): b is { type: "text"; text: string } => b.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();

    if (!text) {
      return NextResponse.json(
        { error: "Empty response from model." },
        { status: 502 },
      );
    }

    return NextResponse.json({ reply: text });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    console.error("Anthropic API error:", msg);
    return NextResponse.json(
      { error: "Sorry, the demo bot hiccuped. Try again in a sec." },
      { status: 502 },
    );
  }
}
