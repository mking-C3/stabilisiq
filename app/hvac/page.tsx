import Demo from "@/components/Demo";

// ─── SITE CONSTANTS ──────────────────────────────────────────────────────
const CALENDLY_URL = "https://calendly.com/matt-stabilisiq/30min";
const TWILIO_DEMO_NUMBER_DISPLAY = "(888) 913-2301";
const TWILIO_DEMO_NUMBER_SMS = "+18889132301";
// ─────────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-ink-900">
      {/* HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink-900 text-white">
        <div className="mx-auto max-w-6xl px-5 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink-300">
            <span className="inline-block w-2 h-2 rounded-full bg-accent" />
            Missed Call Text Back for HVAC
          </div>

          <h1 className="mt-6 font-display text-[40px] leading-[1.05] md:text-[68px] md:leading-[1.02] font-extrabold tracking-tight">
            Every missed call is a{" "}
            <span className="text-accent">$4,000 job</span> walking to your
            competitor.
          </h1>

          <p className="mt-6 max-w-2xl text-lg md:text-xl text-ink-200">
            We text every missed call back in 5 seconds, qualify the homeowner,
            and book the job into your calendar — automatically, 24/7.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent hover:bg-accent-dark transition-colors px-7 py-4 text-base font-semibold text-white shadow-lg shadow-accent/20 active:scale-[0.98]"
            >
              See it work
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
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
            <span className="text-sm text-ink-400">
              Live demo — no signup, no email
            </span>
          </div>

          {/* Pain visual: ringing/unanswered phone */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-ink-700 pt-10">
            <PainStat
              big="27%"
              label="of inbound HVAC calls go unanswered after hours"
            />
            <PainStat
              big="5 sec"
              label="auto text-back response time, day or night"
            />
            <PainStat
              big="3-5x"
              label="more booked jobs from the same call volume"
            />
          </div>
        </div>

        {/* Subtle industrial diagonal accent bar */}
        <div className="absolute right-0 top-0 h-full w-2 bg-accent/30" />
      </section>

      {/* INTERACTIVE DEMO ─────────────────────────────────────────── */}
      <section id="demo" className="bg-ink-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
              Try it now
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-extrabold tracking-tight">
              You just called and we missed it.
            </h2>
            <p className="mt-4 text-ink-500 md:text-lg">
              This is the exact text-back your customer would get. Type like
              you&apos;re a homeowner whose AC just died.
            </p>
          </div>

          <div className="mt-10 md:mt-14">
            <Demo />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS ─────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
              How it works
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-extrabold tracking-tight">
              Three steps. Zero effort from you.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Step
              n="1"
              icon={
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  <line x1="2" y1="2" x2="22" y2="22" stroke="#E11D2A" />
                </svg>
              }
              title="Call comes in. Nobody answers."
              body="You're on a roof. In a crawl space. Driving. It happens — and the customer hangs up and dials the next shop."
            />
            <Step
              n="2"
              icon={
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              }
              title="Text back in 5 seconds."
              body="A friendly, on-brand message hits their phone before they even put it down. They text back, you keep working."
            />
            <Step
              n="3"
              icon={
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <path d="M9 16l2 2 4-4" />
                </svg>
              }
              title="Qualified and booked."
              body="It asks the right questions, flags emergencies, and drops the appointment straight into your calendar."
            />
          </div>
        </div>
      </section>

      {/* COMPATIBILITY ────────────────────────────────────────────── */}
      <section className="bg-ink-50 py-12 md:py-16 border-y border-ink-100">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-ink-400 font-semibold">
            Plugs into the tools you already use
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            <LogoMark label="Housecall Pro" />
            <LogoMark label="Jobber" />
            <LogoMark label="ServiceTitan" />
          </div>
        </div>
      </section>

      {/* FINAL CTA ────────────────────────────────────────────────── */}
      <section className="bg-ink-900 text-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight">
            Stop losing jobs to missed calls.
          </h2>
          <p className="mt-5 text-lg text-ink-200">
            We get you set up in under an hour. Most shops book their first new
            job from a missed call the same day.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent hover:bg-accent-dark transition-colors px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent/20 active:scale-[0.98]"
            >
              Get this running in your shop
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
            </a>
            <p className="text-sm text-ink-300">
              Or try the real thing — text our demo line{" "}
              <a
                href={`sms:${TWILIO_DEMO_NUMBER_SMS}`}
                className="font-semibold text-accent underline underline-offset-4"
              >
                {TWILIO_DEMO_NUMBER_DISPLAY}
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-ink-900 text-ink-400 border-t border-ink-700">
        <div className="mx-auto max-w-6xl px-5 py-6 text-center text-sm space-y-2">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-ink-300">
            <a
              href="https://stabilisiq.com/sms"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              SMS Terms & Opt-In
            </a>
            <span className="text-ink-600">·</span>
            <a
              href="https://stabilisiq.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              StabilisIQ
            </a>
          </div>
          <div>© {new Date().getFullYear()} StabilisIQ · hvac.stabilisiq.com</div>
        </div>
      </footer>
    </main>
  );
}

function PainStat({ big, label }: { big: string; label: string }) {
  return (
    <div>
      <div className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight">
        {big}
      </div>
      <div className="mt-1 text-ink-300 text-sm md:text-base">{label}</div>
    </div>
  );
}

function Step({
  n,
  icon,
  title,
  body,
}: {
  n: string;
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="relative rounded-2xl border border-ink-100 bg-white p-6 md:p-7">
      <div className="absolute -top-3 -left-3 w-9 h-9 rounded-full bg-ink-900 text-white text-sm font-bold flex items-center justify-center ring-4 ring-white">
        {n}
      </div>
      <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
        {icon}
      </div>
      <h3 className="mt-5 font-display text-xl font-bold tracking-tight">
        {title}
      </h3>
      <p className="mt-2 text-ink-500 leading-relaxed">{body}</p>
    </div>
  );
}

function LogoMark({ label }: { label: string }) {
  return (
    <span className="font-display text-xl md:text-2xl font-bold tracking-tight text-ink-700">
      {label}
    </span>
  );
}
