// Deliberately short. No persona bingo. One paragraph that lets the right
// visitor self-identify and the wrong one bounce.

import SectionKicker from "./SectionKicker";

export default function WhoSection() {
  return (
    <section className="bg-ink-900 text-paper py-24 md:py-32 border-t border-paper/5">
      <div className="mx-auto max-w-4xl px-5">
        <SectionKicker n="04" label="Who this is for" variant="dark" />
        <h2 className="mt-6 font-display text-3xl md:text-[52px] font-bold tracking-tightest leading-[1.02]">
          Operators who&apos;d rather{" "}
          <span className="italic font-medium text-bronze-light">get it done</span>{" "}
          than buy more software.
        </h2>
        <div className="mt-8 space-y-5 text-[20px] text-ink-200 leading-[1.6]">
          <p>
            If you&apos;re running operations at a{" "}
            <span className="font-mono text-[18px] text-bronze-light tabular-nums">$10M–$500M</span>{" "}
            company and you already know what&apos;s broken — you don&apos;t need
            a consultant to find it for you. You need someone who&apos;ll fix it,
            build around it, and stay accountable for the result.
          </p>
          <p>
            We&apos;re not the right call if you want a 200-page strategy doc,
            a new SaaS to roll out, or someone to manage your team. We&apos;re
            the right call when you need a fixer with hands on the keyboard
            and a real stake in the outcome.
          </p>
        </div>

        <div className="mt-10 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-ink-800 border border-bronze/30 text-[15px] text-ink-200">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-bronze-light">
            <path d="M9 12l2 2 4-4" />
            <circle cx="12" cy="12" r="10" />
          </svg>
          <span>
            <strong className="font-semibold text-paper">No software to learn.</strong>{" "}
            We work with what you already run.
          </span>
        </div>
      </div>
    </section>
  );
}
