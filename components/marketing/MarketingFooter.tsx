export default function MarketingFooter() {
  return (
    <footer className="bg-ink-900 text-ink-400 border-t border-paper/5">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          <div className="flex items-center gap-2.5 text-paper">
            <span className="relative inline-block w-6 h-6">
              <span className="absolute inset-0 bg-paper" style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }} />
              <span className="absolute inset-[3px] bg-siq" style={{ clipPath: "polygon(0 0, 100% 0, 100% 65%, 65% 100%, 0 100%)" }} />
            </span>
            <span className="font-display font-semibold text-[18px] tracking-tight">
              Stabilis<span className="font-mono text-siq-light">IQ</span>
            </span>
          </div>
          <div className="flex flex-wrap gap-x-7 gap-y-2 font-mono text-[15px] uppercase tracking-[0.18em] text-ink-300">
            <a href="/#work" className="hover:text-paper transition">Work</a>
            <a href="/#modes" className="hover:text-paper transition">Modes</a>
            <a href="/#loop" className="hover:text-paper transition">Loop</a>
            <a href="/about" className="hover:text-paper transition">About</a>
            <a href="/sms" className="hover:text-paper transition">SMS Terms</a>
            <a
              href="https://hvac.stabilisiq.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-paper transition"
            >
              HVAC ↗
            </a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-paper/5 font-mono text-[14px] uppercase tracking-[0.15em] text-ink-400 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} StabilisIQ · All rights reserved</span>
          <span className="text-ink-500 tabular-nums">stabilisiq.com</span>
        </div>
      </div>
    </footer>
  );
}
