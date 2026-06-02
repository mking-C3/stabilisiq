"use client";

import Link from "next/link";

export default function MarketingNav({ calendlyUrl }: { calendlyUrl: string }) {
  return (
    <header className="sticky top-0 z-40 bg-paper/85 backdrop-blur-md border-b border-ink-900/5">
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display font-extrabold text-ink-900 tracking-tight">
          <span className="inline-block w-7 h-7 rounded-md bg-ink-900 text-paper flex items-center justify-center text-xs font-black">
            S
          </span>
          <span className="text-lg">StabilisIQ</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm text-ink-500">
          <a href="#work" className="hover:text-ink-900 transition">The Work</a>
          <a href="#modes" className="hover:text-ink-900 transition">How we work</a>
          <a href="#loop" className="hover:text-ink-900 transition">The Loop</a>
        </nav>

        <a
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-ink-900 text-paper px-4 py-2 text-sm font-semibold hover:bg-ink-700 transition active:scale-[0.98]"
        >
          Book a fit check
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </header>
  );
}
