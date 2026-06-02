"use client";

import Link from "next/link";

export default function MarketingNav({ calendlyUrl }: { calendlyUrl: string }) {
  return (
    <header className="sticky top-0 z-40 bg-ink-900/80 backdrop-blur-xl border-b border-paper/5">
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 text-paper">
          {/* Refined mark: geometric square with cut corner — bronze inset */}
          <span className="relative inline-block w-6 h-6">
            <span className="absolute inset-0 bg-paper" style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }} />
            <span className="absolute inset-[3px] bg-bronze" style={{ clipPath: "polygon(0 0, 100% 0, 100% 65%, 65% 100%, 0 100%)" }} />
          </span>
          <span className="font-display font-semibold text-[18px] tracking-tight">
            Stabilis<span className="font-mono text-bronze-light">IQ</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-mono text-[13px] uppercase tracking-[0.18em] text-ink-200">
          <a href="#work" className="hover:text-bronze-light transition">Work</a>
          <a href="#modes" className="hover:text-bronze-light transition">Modes</a>
          <a href="#loop" className="hover:text-bronze-light transition">Loop</a>
        </nav>

        <a
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-paper text-ink-900 pl-4 pr-2 py-1.5 text-[14px] font-medium hover:bg-white transition active:scale-[0.98]"
        >
          Book a fit check
          <span className="inline-flex w-6 h-6 rounded-full bg-ink-900 text-paper items-center justify-center transition-transform group-hover:translate-x-0.5">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </a>
      </div>
    </header>
  );
}
