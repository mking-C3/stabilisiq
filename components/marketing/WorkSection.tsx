// ─── THE WORK ──────────────────────────────────────────────────────────
// Three real things: a live product, a built tool, and a written playbook.
// No fabricated client engagements. To add a new card later, mirror the
// shape and pick a `status` value.

type Work = {
  tag: string;          // small label above title — vertical / discipline
  title: string;        // the project / playbook name
  problem: string;      // 1 sentence — what's broken in this domain
  what: string;         // 1 sentence — what we build / instrument
  result: string;       // 1 sentence — what changes when it's in place
  live?: string;        // optional URL (opens in new tab)
  cta?: string;         // optional CTA text. Omit and the card is read-only.
  status: "live" | "product" | "playbook";
};

const WORK: Work[] = [
  {
    tag: "Residential HVAC",
    title: "Missed Call Text Back",
    problem:
      "Inbound calls from homeowners go unanswered after-hours. The customer dials the next shop, and a $4,000 service job walks out the door.",
    what:
      "An SMS auto-responder that texts every missed call within 5 seconds, qualifies the issue with a Claude-powered conversation, and books the appointment straight into the contractor's calendar.",
    result:
      "Try the live demo and see the exact text-back a homeowner would get — including the booking flow.",
    live: "https://hvac.stabilisiq.com",
    cta: "Try the live demo",
    status: "live",
  },
  {
    tag: "Aviation · Charter",
    title: "QuoteOps Autopilot",
    problem:
      "Charter operators take 30–90 minutes to turn an inbound RFQ into a quote — by which point half the deals went to whoever responded first.",
    what:
      "An automated quote workflow: parse the RFQ, validate aircraft fit, build 2–3 priced options with audit trail, acknowledgement under 2 minutes, human-in-the-loop until confidence thresholds are met.",
    result:
      "Time-to-first-quote drops from 30–90 min to 3–10 min — an 80–95% reduction. First response under 2 minutes.",
    status: "product",
  },
  {
    tag: "Propane Logistics",
    title: "Will-Call & Reconciliation Playbook",
    problem:
      "Will-call follow-ups missed, route changes not reflected in billing, partial fills unreconciled — silent revenue leakage and customers running dry before dispatch notices.",
    what:
      "We instrument dispatch status age, will-call SLA timers, delivery exception code patterns, and billing completion lag — then run threshold-based runbooks: aging > 24h escalates, partial-fill variance > 15% flags for review, driver notes surface with context.",
    result:
      "Customer-facing failures caught before they happen. Ticket-to-invoice gap closes from weeks to days. Will-call drift becomes visible instead of compounding silently.",
    status: "playbook",
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="bg-paper py-20 md:py-28 border-t border-ink-900/5">
      <div className="mx-auto max-w-6xl px-5">
        {/* Section header */}
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-siq font-semibold">
            The Work
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-extrabold tracking-[-0.02em] leading-[1.05]">
            We&apos;ll show, not tell.
          </h2>
          <p className="mt-5 text-ink-500 text-lg leading-relaxed">
            Three things we&apos;ve built: a live product you can click into, a tool
            running in production, and a written playbook detailed enough to argue
            with. If one looks like your problem, it probably is.
          </p>
        </div>

        {/* Cards grid: 1 featured + 2 side-by-side underneath */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {WORK.map((w, i) => (
            <Card key={i} w={w} featured={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ w, featured }: { w: Work; featured?: boolean }) {
  return (
    <article
      className={[
        "group relative rounded-2xl border bg-white p-7 md:p-8 transition",
        "border-ink-900/8 hover:border-ink-900/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]",
        featured ? "md:col-span-2" : "",
      ].join(" ")}
    >
      <div className="flex items-center justify-between gap-3 mb-4">
        <span className="text-xs uppercase tracking-[0.18em] text-ink-400 font-semibold">
          {w.tag}
        </span>
        <StatusBadge status={w.status} />
      </div>

      <h3 className="font-display text-2xl md:text-[28px] font-extrabold tracking-tight leading-tight">
        {w.title}
      </h3>

      <dl className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
        <Field label="Problem" value={w.problem} />
        <Field label="What we did" value={w.what} />
        <Field label="Result" value={w.result} />
      </dl>

      {w.live && w.cta && (
        <div className="mt-7">
          <a
            href={w.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-siq hover:text-siq-dark transition"
          >
            {w.cta}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        </div>
      )}
    </article>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-[0.15em] text-ink-400 font-semibold mb-1.5">
        {label}
      </dt>
      <dd className="text-[15px] text-ink-700 leading-relaxed">{value}</dd>
    </div>
  );
}

function StatusBadge({ status }: { status: Work["status"] }) {
  const map = {
    live: { label: "Live demo", cls: "bg-siq-tint text-siq" },
    product: { label: "Product", cls: "bg-ink-900 text-paper" },
    playbook: { label: "Playbook", cls: "bg-ink-100 text-ink-700" },
  } as const;
  const { label, cls } = map[status];
  return (
    <span className={`text-[10px] uppercase tracking-[0.15em] font-bold px-2 py-1 rounded ${cls}`}>
      {label}
    </span>
  );
}
