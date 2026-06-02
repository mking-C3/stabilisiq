export default function Hero({ calendlyUrl }: { calendlyUrl: string }) {
  return (
    <section className="relative overflow-hidden bg-ink-900 text-paper">
      {/* Subtle vertical accent line on the right edge — industrial flourish */}
      <div className="absolute right-0 top-0 bottom-0 w-px bg-siq-light/30" />

      <div className="mx-auto max-w-6xl px-5 pt-20 pb-24 md:pt-32 md:pb-36">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink-300 mb-8">
          <span className="inline-block w-2 h-2 rounded-full bg-siq-light" />
          StabilisIQ · operations partner
        </div>

        <h1 className="font-display text-[42px] leading-[1.04] md:text-[76px] md:leading-[1.02] font-extrabold tracking-[-0.02em] max-w-5xl">
          Fix what&apos;s broken.{" "}
          <span className="text-siq-light">Automate what shouldn&apos;t break again.</span>
        </h1>

        <p className="mt-7 max-w-2xl text-lg md:text-xl text-ink-200 leading-relaxed">
          We&apos;re the operations partner you call when something&apos;s leaking and you
          already know it. Managed engagements when you need a fixer. Productized
          builds when you want the fix to stick.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:items-center">
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-siq hover:bg-siq-dark transition-colors px-7 py-4 text-base font-semibold text-paper shadow-lg shadow-siq/20 active:scale-[0.98]"
          >
            Book a 15-min fit check
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-paper/20 hover:border-paper/40 transition-colors px-7 py-4 text-base font-semibold text-paper"
          >
            See the work
          </a>
        </div>

        {/* Sub-line: who and how */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-paper/10 pt-10 max-w-4xl">
          <Stat n="2 modes" l="Managed engagement, or productized build." />
          <Stat n="No software to buy" l="We work with what you already run." />
          <Stat n="Operator-led" l="Built and run by people who've shipped this work, not advised on it." />
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-2xl md:text-[28px] font-extrabold text-paper tracking-tight">{n}</div>
      <div className="mt-1.5 text-sm md:text-base text-ink-300 leading-relaxed">{l}</div>
    </div>
  );
}
