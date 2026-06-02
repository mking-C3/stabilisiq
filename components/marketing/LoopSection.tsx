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

import SectionKicker from "./SectionKicker";

export default function LoopSection() {
  return (
    <section id="loop" className="bg-ink-800 text-paper py-24 md:py-32 border-t border-paper/5">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <SectionKicker n="03" label="The Loop" variant="dark" />
          <h2 className="mt-6 font-display text-3xl md:text-[52px] font-bold tracking-tightest leading-[1.02]">
            How a managed engagement{" "}
            <span className="italic font-medium text-bronze-light">actually runs.</span>
          </h2>
          <p className="mt-6 text-ink-200 text-[19px] leading-[1.55]">
            Not a one-time project. A continuous loop. Each pass leaves the
            operation a little less fragile than the last.
          </p>
        </div>

        <ol className="mt-14 grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-3 relative">
          {/* Connecting line on desktop — bronze hairline */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-bronze/30" />
          {STEPS.map((s, i) => (
            <li
              key={i}
              className="relative bg-ink-900 rounded-lg p-6 border border-paper/10"
            >
              <div className="flex items-center gap-2.5 mb-4 relative z-10">
                <span className="inline-block w-3 h-3 rounded-full bg-bronze ring-2 ring-ink-900" />
                <span className="font-mono text-[13px] uppercase tracking-[0.18em] tabular-nums text-bronze-light font-semibold">
                  Step {s.n}
                </span>
              </div>
              <h3 className="font-display text-[22px] font-semibold tracking-tight mb-2 text-paper">
                {s.title}
              </h3>
              <p className="text-[15px] text-ink-200 leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
