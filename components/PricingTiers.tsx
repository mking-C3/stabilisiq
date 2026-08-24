// Feature comparison across the three product tiers. Deliberately no prices
// shown here — pricing lives in sales conversations, this is just the
// features-per-tier scannable view. If pricing needs to be added later,
// pass a `price` field per tier and render it in the card header.

type Tier = {
  key: "catch" | "grow" | "answer";
  name: string;
  tagline: string;
  features: string[];
  status?: "popular" | "comingSoon";
  ctaLabel?: string;      // e.g. "Join the waitlist" for the coming-soon tier
  ctaHref?: string;
};

const TIERS: Tier[] = [
  {
    key: "catch",
    name: "Catch",
    tagline: "Stop losing calls. Start capturing every lead.",
    features: [
      "Missed call text back",
      "Instant lead reply",
    ],
  },
  {
    key: "grow",
    name: "Grow",
    tagline: "Everything in Catch, plus the tools to run the shop.",
    status: "popular",
    features: [
      "Everything in Catch",
      "Review engine",
      "Invoice chasing",
      "ROI receipt",
    ],
  },
  {
    key: "answer",
    name: "Answer",
    tagline: "AI voice answering that books the job — no human required.",
    status: "comingSoon",
    features: [
      "Everything in Grow",
      "AI voice answering",
      "Books the job by phone",
    ],
    ctaLabel: "Join the waitlist",
    ctaHref: "#final-cta",
  },
];

export default function PricingTiers({
  calendlyUrl,
}: {
  calendlyUrl?: string;
}) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
            Compare tiers
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-extrabold tracking-tight">
            Three ways to plug it in.
          </h2>
          <p className="mt-4 text-ink-500 md:text-lg">
            Start with the receptionist that never sleeps. Layer on the rest as
            you outgrow it.
          </p>
        </div>

        {/* Tier cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {TIERS.map((tier) => (
            <TierCard
              key={tier.key}
              tier={tier}
              highlight={tier.status === "popular"}
              muted={tier.status === "comingSoon"}
            />
          ))}
        </div>

        {/* Footnote */}
        <p className="mt-6 text-center text-sm text-ink-400">
          Pricing shared on{" "}
          <a
            href={calendlyUrl || "#final-cta"}
            target={calendlyUrl ? "_blank" : undefined}
            rel={calendlyUrl ? "noopener noreferrer" : undefined}
            className="text-accent underline underline-offset-4 hover:text-accent-dark"
          >
            the fit-check call
          </a>
          . Three-month minimum on all plans.
        </p>
      </div>
    </section>
  );
}

function TierCard({
  tier,
  highlight,
  muted,
}: {
  tier: Tier;
  highlight?: boolean;
  muted?: boolean;
}) {
  return (
    <div
      className={[
        "relative rounded-2xl border p-6 md:p-7 flex flex-col",
        highlight
          ? "border-accent bg-white shadow-lg shadow-accent/10 ring-1 ring-accent"
          : "border-ink-100 bg-white",
        muted ? "opacity-95" : "",
      ].join(" ")}
    >
      {/* Status badge */}
      {tier.status === "popular" && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-accent text-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/90" />
          Most popular
        </div>
      )}
      {tier.status === "comingSoon" && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-block rounded-full bg-ink-900 text-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
          Coming soon
        </div>
      )}

      {/* Tier name + tagline */}
      <div className="pt-1">
        <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-ink-900">
          {tier.name}
        </h3>
        <p className="mt-2 text-sm text-ink-500 leading-relaxed min-h-[3rem]">
          {tier.tagline}
        </p>
      </div>

      {/* Feature list */}
      <ul className="mt-6 space-y-3 flex-1">
        {tier.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <svg
              className={`mt-1 flex-shrink-0 ${
                highlight ? "text-accent" : "text-ink-700"
              }`}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span className="text-[15px] text-ink-800 leading-snug">{f}</span>
          </li>
        ))}
      </ul>

      {/* CTA (only on tiers that declare one) */}
      {tier.ctaLabel && (
        <a
          href={tier.ctaHref || "#final-cta"}
          className={[
            "mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition active:scale-[0.98]",
            highlight
              ? "bg-accent hover:bg-accent-dark text-white"
              : "border border-ink-200 hover:border-ink-900 text-ink-900",
          ].join(" ")}
        >
          {tier.ctaLabel}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      )}
    </div>
  );
}
