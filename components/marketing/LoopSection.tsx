// The 5-step process — rewritten to read like an operator who's done it,
// not a McKinsey deck. Same skeleton as the existing site's "Loop", but
// the verbs and the description sentences are sharper.

const STEPS = [
  {
    n: "01",
    title: "Instrument",
    body:
      "We hook into your systems and define what 'normal' looks like — by transaction, by queue, by exception code. You can't detect drift without a baseline.",
  },
  {
    n: "02",
    title: "Detect",
    body:
      "Monitoring runs continuously against those baselines. Anomalies, stalls, and silent failures surface before they cost you a customer.",
  },
  {
    n: "03",
    title: "Intervene",
    body:
      "When a threshold trips, the runbook fires. The right person gets the right context. We act — not just alert.",
  },
  {
    n: "04",
    title: "Improve",
    body:
      "Patterns turn into changes — to the process, the system, or the runbook itself. Things that broke twice don't break a third time.",
  },
  {
    n: "05",
    title: "Report",
    body:
      "Operational health, KPI movement, and what we changed this month — in a one-page exec format that doesn't waste anyone's time.",
  },
];

export default function LoopSection() {
  return (
    <section id="loop" className="bg-ink-50 py-20 md:py-28 border-t border-ink-900/5">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-siq font-semibold">
            The Loop
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-extrabold tracking-[-0.02em] leading-[1.05]">
            How a managed engagement actually runs.
          </h2>
          <p className="mt-5 text-ink-500 text-lg leading-relaxed">
            Not a one-time project. A continuous loop. Each pass leaves the
            operation a little less fragile than the last.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-3 relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px bg-ink-900/10" />
          {STEPS.map((s, i) => (
            <li
              key={i}
              className="relative bg-white rounded-2xl p-6 border border-ink-900/8"
            >
              <div className="w-14 h-14 rounded-xl bg-siq text-paper flex items-center justify-center font-display text-sm font-extrabold tracking-wider mb-4 relative z-10">
                {s.n}
              </div>
              <h3 className="font-display text-lg font-bold tracking-tight mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-ink-500 leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
