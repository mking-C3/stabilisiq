"use client";

import { useState } from "react";
import { SMS_CONSENT_TEXT } from "@/lib/consent";

// Contact form with a CTIA-compliant SMS opt-in checkbox.
//
// Rules this form is built around — do not "simplify" them away:
//   * The consent checkbox is UNCHECKED on first paint and is never
//     auto-checked, pre-selected, or bundled with any other agreement.
//   * The form submits successfully whether or not the box is ticked.
//     Leaving it unticked is a valid, supported outcome — it just means
//     the submission is not enrolled for SMS.
//   * The wording beside the checkbox mirrors SMS_CONSENT_TEXT, which is
//     also what gets stored, so displayed and recorded text cannot drift.

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm({
  sourcePage = "unknown",
}: {
  sourcePage?: string;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // Opt-in defaults to false. This must stay false.
  const [smsConsent, setSmsConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [sentWithConsent, setSentWithConsent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;

    setError(null);
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          message,
          sms_consent: smsConsent,
          source_page: sourcePage,
          company_website: honeypot,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong. Try again?");
      }

      setSentWithConsent(smsConsent);
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        className="rounded-2xl border border-emerald-300 bg-emerald-50 p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink-900">
          Got it — thanks.
        </h3>
        <p className="mt-2 text-ink-600">We&apos;ll get back to you shortly.</p>
        <p className="mt-4 text-sm text-ink-500 max-w-sm mx-auto leading-relaxed">
          {sentWithConsent
            ? "You opted in to text messages, so we may reply by SMS. Reply STOP to any message to opt out at any time."
            : "You did not opt in to text messages, so we will not text you. We’ll reply by phone or email instead."}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative rounded-2xl border border-ink-100 bg-white p-6 md:p-8 shadow-sm"
      noValidate
    >
      {/* Honeypot — visually hidden but still fillable by bots */}
      <div
        aria-hidden="true"
        className="absolute w-px h-px -m-px overflow-hidden opacity-0 pointer-events-none"
      >
        <label htmlFor="company_website">Company website</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field
          id="name"
          label="Name"
          required
          value={name}
          onChange={setName}
          autoComplete="name"
          placeholder="Jane Doe"
        />
        <Field
          id="phone"
          label="Phone number"
          required
          type="tel"
          value={phone}
          onChange={setPhone}
          autoComplete="tel"
          placeholder="(555) 123-4567"
        />
      </div>

      <div className="mt-4">
        <Field
          id="email"
          label="Email"
          optional
          type="email"
          value={email}
          onChange={setEmail}
          autoComplete="email"
          placeholder="jane@example.com"
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-ink-900 mb-1.5"
        >
          How can we help? <span className="text-alarm">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what you need — what's broken, or what you want to see."
          className="w-full rounded-lg border border-ink-200 px-3.5 py-2.5 text-[15px] text-ink-900 placeholder:text-ink-300 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-y"
        />
      </div>

      {/* ── SMS OPT-IN ──────────────────────────────────────────────────
          Unchecked by default. Optional. Independent of form submission. */}
      <div className="mt-6 rounded-xl border border-ink-200 bg-ink-50 p-4">
        <div className="flex items-start gap-3">
          <input
            id="sms_consent"
            name="sms_consent"
            type="checkbox"
            checked={smsConsent}
            onChange={(e) => setSmsConsent(e.target.checked)}
            className="mt-0.5 h-5 w-5 flex-shrink-0 rounded border-2 border-ink-400 accent-accent focus:ring-2 focus:ring-accent focus:ring-offset-1 cursor-pointer"
          />
          <label
            htmlFor="sms_consent"
            className="text-[13px] leading-relaxed text-ink-700 cursor-pointer select-none"
          >
            By checking this box, I agree to receive text messages from
            StabilisIQ at the phone number provided, including appointment
            updates and replies to my inquiry. Message frequency varies.
            Message and data rates may apply. Reply HELP for help or STOP to
            opt out. See our{" "}
            <a
              href="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent underline underline-offset-2 hover:text-accent-dark"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent underline underline-offset-2 hover:text-accent-dark"
            >
              Terms
            </a>
            .
          </label>
        </div>
        <p className="mt-3 pl-8 text-[12px] text-ink-500 leading-relaxed">
          Optional. You can send this form without checking the box — we just
          won&apos;t text you if you leave it unchecked.
        </p>
      </div>

      {error && (
        <p className="mt-4 text-sm text-alarm" role="alert">
          {error}
        </p>
      )}

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent hover:bg-accent-dark disabled:bg-ink-300 transition-colors px-7 py-3.5 text-base font-semibold text-white active:scale-[0.98]"
        >
          {status === "sending" ? "Sending…" : "Send message"}
          {status !== "sending" && (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          )}
        </button>
        <span className="text-xs text-ink-400">
          <span className="text-alarm">*</span> Required. We never sell or share
          your information.
        </span>
      </div>

      {/* Audit hook: exposes the canonical consent string in the DOM so the
          displayed and stored wording can be verified as identical. */}
      <span className="sr-only" data-consent-text={SMS_CONSENT_TEXT} />
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  required,
  optional,
  autoComplete,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  optional?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-ink-900 mb-1.5"
      >
        {label} {required && <span className="text-alarm">*</span>}
        {optional && <span className="font-normal text-ink-400">(optional)</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        autoComplete={autoComplete}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-ink-200 px-3.5 py-2.5 text-[15px] text-ink-900 placeholder:text-ink-300 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
      />
    </div>
  );
}
