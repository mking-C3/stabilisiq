export default function MarketingFooter() {
  return (
    <footer className="bg-ink-900 text-ink-400 border-t border-paper/5">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          <div className="flex items-center gap-2 text-paper font-display font-extrabold">
            <span className="inline-block w-7 h-7 rounded-md bg-siq text-paper flex items-center justify-center text-xs font-black">
              S
            </span>
            <span className="text-lg">StabilisIQ</span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="#work" className="hover:text-paper transition">The Work</a>
            <a href="#modes" className="hover:text-paper transition">How we work</a>
            <a href="#loop" className="hover:text-paper transition">The Loop</a>
            <a
              href="https://hvac.stabilisiq.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-paper transition"
            >
              HVAC product →
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-paper/5 text-xs text-ink-500 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} StabilisIQ. All rights reserved.</span>
          <span className="text-ink-600">stabilisiq.com</span>
        </div>
      </div>
    </footer>
  );
}
