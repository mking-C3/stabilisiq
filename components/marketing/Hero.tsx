export default function Hero({ calendlyUrl }: { calendlyUrl: string }) {
  return (
    <section className="relative overflow-hidden bg-ink-900 text-paper">
      {/* Subtle dot grid — adds depth, reads as technical not decorative */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Right-edge accent line */}
      <div className="absolute right-0 top-0 bottom-0 w-px bg-siq-light/30" />

      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-24 md:pt-32 md:pb-36">
        {/* Kicker with section index — small typographic detail */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-[15px] uppercase tracking-[0.18em] tabular-nums font-semibold text-siq-light">
            § 00
          </span>
          <span className="h-px w-10 bg-paper/20" />
          <span className="font-mono text-[14px] uppercase tracking-[0.2em] font-semibold text-ink-200">
            StabilisIQ · operations partner
          </span>
        </div>

        <h1 className="font-display text-[46px] leading-[1.02] md:text-[88px] md:leading-[0.98] font-bold tracking-tightest max-w-5xl">
          Fix what&apos;s broken.
          <br />
          <span className="text-bronze-light italic font-medium">
            Automate what shouldn&apos;t break again.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg md:text-[20px] text-ink-200 leading-[1.55]">
          We&apos;re the operations partner you call when something&apos;s leaking
          and you already know it. Managed engagements when you need a fixer.
          Productized builds when you want the fix to stick.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:items-center">
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-paper hover:bg-white transition-colors px-7 py-4 text-[16px] font-semibold text-ink-900 active:scale-[0.98]"
          >
            Book a 15-min fit check
            <svg className="transition-transform group-hover:translate-x-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-paper/15 hover:border-paper/35 hover:bg-paper/5 transition-colors px-7 py-4 text-[16px] font-semibold text-paper"
          >
            See the work
          </a>
        </div>

        {/* Bottom stats — mono numerals give technical authority */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-paper/10 pt-10 max-w-4xl">
          <Stat n="02" label="Modes" body="Managed engagement, or productized build." />
          <Stat n="00" label="New software" body="We work with what you already run." />
          <Stat n="01" label="Standard" body="Operator-led. Built and run, not advised on." />
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label, body }: { n: string; label: string; body: string }) {
  return (
    <div>
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-3xl md:text-4xl font-medium text-paper tabular-nums tracking-tight">
          {n}
        </span>
        <span className="font-mono text-[14px] uppercase tracking-[0.2em] font-semibold text-siq-light">
          {label}
        </span>
      </div>
      <div className="mt-3 text-[17px] text-ink-200 leading-relaxed">{body}</div>
    </div>
  );
}
