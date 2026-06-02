import SectionKicker from "./SectionKicker";

export default function FinalCTA({ calendlyUrl }: { calendlyUrl: string }) {
  return (
    <section className="relative bg-ink-900 text-paper py-24 md:py-32 overflow-hidden">
      {/* Same dot grid as hero, gentle continuity */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5">
        <div className="flex justify-center mb-6">
          <SectionKicker n="05" label="Talk to us" variant="dark" />
        </div>
        <h2 className="font-display text-center text-3xl md:text-[56px] font-bold tracking-tightest leading-[1.02]">
          <span className="font-mono text-[40px] md:text-[56px] font-medium tabular-nums text-bronze-light">15</span>{" "}
          minutes.{" "}
          <span className="italic font-medium text-bronze-light">No pitch deck.</span>
        </h2>
        <p className="mt-7 text-center text-lg md:text-[20px] text-ink-200 max-w-2xl mx-auto leading-[1.55]">
          Tell us what&apos;s leaking. We&apos;ll tell you whether we&apos;re the
          right people for it — and if we&apos;re not, we&apos;ll usually know
          who is.
        </p>
        <div className="mt-10 flex justify-center">
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full bg-paper hover:bg-white transition-colors pl-8 pr-3 py-3 text-[15px] font-semibold text-ink-900 active:scale-[0.98]"
          >
            Book a 15-min fit check
            <span className="inline-flex w-8 h-8 rounded-full bg-ink-900 text-paper items-center justify-center transition-transform group-hover:translate-x-0.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>
        <p className="mt-8 text-center font-mono text-[13px] uppercase tracking-[0.2em] text-ink-300">
          Or skim{" "}
          <a href="#work" className="text-paper underline underline-offset-4 decoration-paper/40 hover:decoration-paper transition">
            the work
          </a>{" "}
          first
        </p>
      </div>
    </section>
  );
}
