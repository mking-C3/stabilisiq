"use client";

import { useEffect, useRef, useState } from "react";
import type { Vertical } from "@/lib/verticals";

type Msg = {
  id: string;
  role: "user" | "assistant";
  content: string;
  ts: number;
};

function formatTime(ts: number): string {
  return new Date(ts).toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
}

function genId(): string {
  return Math.random().toString(36).slice(2, 10);
}

export default function Demo({ vertical }: { vertical: Vertical }) {
  const { demo, id: verticalId } = vertical;
  const opener: Msg = {
    id: "opener",
    role: "assistant",
    content: demo.opener,
    ts: Date.now(),
  };

  const [messages, setMessages] = useState<Msg[]>([opener]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [booking, setBooking] = useState<{
    window: string;
    summary: string;
    emergency: boolean;
  } | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, sending]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || sending) return;

    setError(null);
    const userMsg: Msg = {
      id: genId(),
      role: "user",
      content: trimmed,
      ts: Date.now(),
    };
    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput("");
    setSending(true);

    // Small minimum delay so the typing indicator feels natural even when the
    // API replies fast.
    const start = Date.now();

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          vertical: verticalId,
          messages: nextMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.error || "Failed to reach the demo bot.");
      }
      const data: {
        reply: string;
        booking?: { window: string; summary: string; emergency: boolean } | null;
      } = await res.json();

      const elapsed = Date.now() - start;
      if (elapsed < 700) {
        await new Promise((r) => setTimeout(r, 700 - elapsed));
      }

      setMessages((m) => [
        ...m,
        {
          id: genId(),
          role: "assistant",
          content: data.reply,
          ts: Date.now(),
        },
      ]);
      if (data.booking) setBooking(data.booking);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Something went wrong.";
      setError(msg);
      setMessages((m) => [
        ...m,
        {
          id: genId(),
          role: "assistant",
          content:
            "Hmm, signal's spotty on my end — try that again in a sec?",
          ts: Date.now(),
        },
      ]);
    } finally {
      setSending(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    send(input);
  }

  const showQuickReplies = messages.length <= 1 && !sending;

  return (
    <div className="w-full max-w-[380px] mx-auto">
      {/* Phone frame */}
      <div className="relative rounded-[44px] bg-ink-900 p-3 shadow-2xl ring-1 ring-black/20">
        <div className="rounded-[34px] overflow-hidden bg-white">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-3 pb-1 text-xs font-semibold text-ink-900">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <span className="inline-block w-3 h-3 rounded-full border-2 border-ink-900" />
              <span className="inline-block w-4 h-2 rounded-sm border border-ink-900" />
            </div>
          </div>

          {/* Header */}
          <div className="flex flex-col items-center pt-2 pb-3 border-b border-ink-100">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-white font-bold text-sm">
              {demo.initials}
            </div>
            <div className="text-[13px] font-medium text-ink-900 mt-1">
              {demo.brand}
            </div>
            <div className="text-[11px] text-ink-400">SMS / Text Message</div>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="scroll-hidden h-[440px] overflow-y-auto px-3 py-3 bg-white"
          >
            <div className="text-center text-[10px] uppercase tracking-wider text-ink-400 mb-3">
              Text Message · Today {formatTime(messages[0].ts)}
            </div>
            <div className="flex flex-col gap-1.5">
              {messages.map((m, i) => {
                const prev = messages[i - 1];
                const groupedWithPrev = prev && prev.role === m.role;
                return (
                  <div
                    key={m.id}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={[
                        "max-w-[78%] px-3.5 py-2 text-[15px] leading-snug animate-bubble-in",
                        m.role === "user"
                          ? "bg-imsg text-white rounded-2xl rounded-br-md"
                          : "bg-ink-100 text-ink-900 rounded-2xl rounded-bl-md",
                        groupedWithPrev ? "mt-0.5" : "mt-2",
                      ].join(" ")}
                    >
                      {m.content}
                    </div>
                  </div>
                );
              })}
              {sending && (
                <div className="flex justify-start mt-2">
                  <div className="bg-ink-100 rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-ink-400 rounded-full animate-blink" />
                    <span
                      className="w-1.5 h-1.5 bg-ink-400 rounded-full animate-blink"
                      style={{ animationDelay: "0.15s" }}
                    />
                    <span
                      className="w-1.5 h-1.5 bg-ink-400 rounded-full animate-blink"
                      style={{ animationDelay: "0.3s" }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick replies */}
          {showQuickReplies && (
            <div className="flex flex-wrap gap-2 px-3 pb-2 border-t border-ink-100 pt-2">
              {demo.quickReplies.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => send(q)}
                  className="text-[12px] px-3 py-1.5 rounded-full bg-white border border-ink-200 text-ink-700 hover:border-accent hover:text-accent transition active:scale-95"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 px-3 py-2 border-t border-ink-100 bg-white"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="iMessage"
              className="flex-1 rounded-full border border-ink-200 px-4 py-2 text-[15px] focus:outline-none focus:border-accent"
              disabled={sending}
              autoComplete="off"
              maxLength={500}
            />
            <button
              type="submit"
              disabled={sending || !input.trim()}
              aria-label="Send"
              className="w-9 h-9 rounded-full bg-accent disabled:bg-ink-200 text-white flex items-center justify-center active:scale-95 transition"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {error && (
        <p className="mt-3 text-center text-sm text-alarm">{error}</p>
      )}

      {/* Booking confirmation card — appears once the bot confirms an appointment */}
      {booking && (
        <div
          className="mt-6 rounded-2xl border border-emerald-300 bg-emerald-50 p-5 shadow-sm animate-fade-in"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm uppercase tracking-wider">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-emerald-700"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
            {booking.emergency ? "Dispatched" : "Booking confirmed"}
          </div>

          <div className="mt-3 font-display text-xl font-bold text-ink-900 tracking-tight">
            {booking.window || "Confirmed"}
          </div>
          {booking.summary && (
            <div className="mt-1 text-sm text-ink-700">{booking.summary}</div>
          )}

          {booking.emergency && (
            <div className="mt-3 inline-block text-[10px] font-bold uppercase tracking-widest bg-alarm text-white px-2 py-1 rounded">
              Emergency priority
            </div>
          )}

          <div className="mt-4 pt-4 border-t border-emerald-200 text-xs text-ink-500 leading-relaxed">
            In production this drops into the shop&apos;s calendar and pings the
            owner&apos;s phone. On the demo, it&apos;s just a visual so you can see
            the flow completed.
          </div>
        </div>
      )}

      {/* Real text demo line */}
      <div className="mt-6 text-center">
        <p className="text-sm text-ink-400 uppercase tracking-wider">
          Want the full experience?
        </p>
        <p className="mt-1 text-ink-700">
          Text our live demo line:{" "}
          <a
            href={`sms:${demo.phoneSms}`}
            className="font-semibold text-accent underline underline-offset-4 hover:text-accent-dark"
          >
            {demo.phoneDisplay}
          </a>
        </p>
      </div>
    </div>
  );
}
