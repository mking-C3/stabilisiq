export default function FinalCTA({ calendlyUrl }: { calendlyUrl: string }) {
  return (
    <section className="bg-ink-900 text-paper py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-[-0.02em] leading-[1.05]">
          15 minutes. No pitch deck.
        </h2>
        <p className="mt-5 text-lg md:text-xl text-ink-200 max-w-2xl mx-auto leading-relaxed">
          Tell us what&apos;s leaking. We&apos;ll tell you whether we&apos;re the
          right people for it — and if we&apos;re not, we&apos;ll usually know
          who is.
        </p>
        <div className="mt-10">
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-siq hover:bg-siq-dark transition-colors px-8 py-4 text-base font-semibold text-paper shadow-lg shadow-siq/20 active:scale-[0.98]"
          >
            Book a 15-min fit check
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <p className="mt-6 text-sm text-ink-400">
          Or skim{" "}
          <a href="#work" className="underline underline-offset-4 hover:text-paper">
            the work
          </a>{" "}
          first.
        </p>
      </div>
    </section>
  );
}
