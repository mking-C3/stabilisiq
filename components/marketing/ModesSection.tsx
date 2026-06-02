export default function ModesSection({ calendlyUrl }: { calendlyUrl: string }) {
  return (
    <section id="modes" className="bg-white py-20 md:py-28 border-t border-ink-900/5">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-siq font-semibold">
            How we work
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-extrabold tracking-[-0.02em] leading-[1.05]">
            Two modes. Same operators.
          </h2>
          <p className="mt-5 text-ink-500 text-lg leading-relaxed">
            Start with whichever fits the problem in front of you. Most clients use both
            over time — managed first to surface what&apos;s actually breaking, then a build
            to prevent the next round.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* MANAGED */}
          <ModeCard
            kicker="Mode A"
            title="Managed engagement"
            tagline="We become your operator-of-record."
            description="Ongoing exception monitoring, incident coordination, and process improvement — with defined accountability for outcomes."
            bullets={[
              "Foundation in 30–45 days: instrumentation, KPIs, runbooks",
              "Continuous monitoring + intervention against thresholds you set",
              "Root-cause work, not just patching",
              "Executive-level reporting on a cadence you choose",
              "Coverage: business hours → 24/7, scoped to what's actually critical",
            ]}
            terms="Monthly retainer · 90-day initial commitment"
            cta={{ label: "Book a 15-min fit check", href: calendlyUrl, external: true }}
            accent="dark"
          />

          {/* BUILD */}
          <ModeCard
            kicker="Mode B"
            title="Productized build"
            tagline="We build the automation that closes the gap for good."
            description="When the same problem keeps showing up and software doesn't quite solve it, we build the thing that does."
            bullets={[
              "Scoped to one specific bottleneck (RFQ, missed calls, reconciliation, etc.)",
              "Fixed-scope build, then optional managed handoff",
              "Integrates with what you already run — no rip-and-replace",
              "Owned by you, runs on infra you choose",
              "Examples: HVAC MCTB, QuoteOps Autopilot, dispatch runbooks",
            ]}
            terms="Fixed-scope project · 4–12 weeks typical"
            cta={{ label: "See examples in The Work", href: "#work" }}
            accent="light"
          />
        </div>
      </div>
    </section>
  );
}

function ModeCard({
  kicker,
  title,
  tagline,
  description,
  bullets,
  terms,
  cta,
  accent,
}: {
  kicker: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  terms: string;
  cta: { label: string; href: string; external?: boolean };
  accent: "dark" | "light";
}) {
  const isDark = accent === "dark";
  return (
    <div
      className={[
        "relative rounded-2xl p-7 md:p-9 flex flex-col",
        isDark
          ? "bg-ink-900 text-paper"
          : "bg-siq-tint text-ink-900 ring-1 ring-siq/15",
      ].join(" ")}
    >
      <div
        className={`text-xs uppercase tracking-[0.18em] font-bold mb-3 ${
          isDark ? "text-siq-light" : "text-siq"
        }`}
      >
        {kicker}
      </div>
      <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">
        {title}
      </h3>
      <p
        className={`mt-2 text-base md:text-lg font-medium ${
          isDark ? "text-paper" : "text-ink-900"
        }`}
      >
        {tagline}
      </p>
      <p
        className={`mt-4 leading-relaxed ${
          isDark ? "text-ink-300" : "text-ink-600"
        }`}
      >
        {description}
      </p>

      <ul className="mt-7 space-y-3 flex-1">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-3">
            <svg
              className={`mt-1 flex-shrink-0 ${
                isDark ? "text-siq-light" : "text-siq"
              }`}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span
              className={`text-[15px] leading-snug ${
                isDark ? "text-ink-200" : "text-ink-700"
              }`}
            >
              {b}
            </span>
          </li>
        ))}
      </ul>

      <div
        className={`mt-7 pt-5 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ${
          isDark ? "border-paper/10" : "border-siq/15"
        }`}
      >
        <span
          className={`text-xs uppercase tracking-[0.15em] font-semibold ${
            isDark ? "text-ink-400" : "text-ink-500"
          }`}
        >
          {terms}
        </span>
        <a
          href={cta.href}
          target={cta.external ? "_blank" : undefined}
          rel={cta.external ? "noopener noreferrer" : undefined}
          className={[
            "inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold transition active:scale-[0.98]",
            isDark
              ? "bg-siq hover:bg-siq-dark text-paper"
              : "bg-ink-900 hover:bg-ink-700 text-paper",
          ].join(" ")}
        >
          {cta.label}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
