// ─── EDIT THIS LIST TO ADD/REMOVE/REPLACE CASE STUDIES ─────────────────
// Cards marked TODO need real outcomes from Matt. The structure is fixed
// so the page layout is stable; just swap the strings.
//
// `live` = a working URL the visitor can click to
// `cta`  = button text on the card. Omit `cta` and the card is read-only.

type Work = {
  tag: string;          // small label above title — vertical / discipline
  title: string;        // the project name
  problem: string;      // 1 sentence — what was breaking
  what: string;         // 1 sentence — what we did
  result: string;       // 1 sentence — measurable outcome
  live?: string;        // optional URL (opens in new tab)
  cta?: string;         // optional CTA text
  status?: "live" | "engagement" | "draft"; // colored badge
};

const WORK: Work[] = [
  {
    tag: "Residential HVAC",
    title: "Missed Call Text Back",
    problem:
      "Inbound calls from homeowners go unanswered after-hours. The customer dials the next shop, and a $4,000 service job walks out the door.",
    what:
      "Built an SMS auto-responder that texts every missed call within 5 seconds, qualifies the issue with a Claude-powered conversation, and books the appointment into the contractor's calendar.",
    result:
      "Live demo lets a visitor experience the exact text-back a homeowner would get — including the booking flow.",
    live: "https://hvac.stabilisiq.com",
    cta: "Try the live demo",
    status: "live",
  },
  {
    tag: "Aviation · Charter",
    title: "QuoteOps Autopilot",
    problem:
      "Charter operators were taking 30–90 minutes to turn an inbound RFQ into a quote — by which point half the deals had gone to whoever responded first.",
    what:
      "Built an automated quote workflow: parse the RFQ, validate aircraft fit, build 2–3 priced options with audit trail, send acknowledgement under 2 minutes, human-in-the-loop until confidence thresholds are met.",
    result:
      "Time-to-first-quote drops from 30–90 min to 3–10 min — an 80–95% reduction. First-response time under 2 minutes.",
    status: "live",
  },
  {
    tag: "Propane Logistics",
    title: "Will-Call & Reconciliation Runbooks",
    problem:
      "Will-call follow-ups missed, route changes not reflected in billing, partial fills unreconciled — silent revenue leakage and customers running dry before dispatch noticed.",
    what:
      "Instrumented dispatch status, will-call SLA timers, delivery exception codes, billing completion lag. Runbook-style interventions trigger automatically when thresholds breach.",
    result:
      "Customer-facing failures (run-outs, missed deliveries) caught before they happen. Ticket-to-invoice gap closes from weeks to days.",
    status: "engagement",
  },
  // TODO — swap these placeholder slots for real engagements
  {
    tag: "TODO · Industry",
    title: "Engagement title goes here",
    problem:
      "TODO — one-sentence description of what was breaking for the client.",
    what:
      "TODO — one sentence on what we instrumented, built, or ran.",
    result:
      "TODO — one measurable outcome. Numbers if you have them.",
    status: "draft",
  },
  {
    tag: "TODO · Industry",
    title: "Engagement title goes here",
    problem: "TODO",
    what: "TODO",
    result: "TODO",
    status: "draft",
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
            We&apos;d rather you read what we&apos;ve actually built than what we
            generally say about ourselves. If one of these looks like your problem,
            it probably is.
          </p>
        </div>

        {/* Cards grid */}
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
  const isDraft = w.status === "draft";

  return (
    <article
      className={[
        "group relative rounded-2xl border bg-white p-7 md:p-8 transition",
        isDraft
          ? "border-dashed border-ink-200 opacity-60"
          : "border-ink-900/8 hover:border-ink-900/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]",
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

function StatusBadge({ status }: { status?: Work["status"] }) {
  if (!status) return null;
  const map = {
    live: { label: "Live", cls: "bg-siq-tint text-siq" },
    engagement: { label: "Engagement", cls: "bg-ink-100 text-ink-700" },
    draft: { label: "Coming soon", cls: "bg-ink-100 text-ink-400" },
  } as const;
  const { label, cls } = map[status];
  return (
    <span className={`text-[10px] uppercase tracking-[0.15em] font-bold px-2 py-1 rounded ${cls}`}>
      {label}
    </span>
  );
}
