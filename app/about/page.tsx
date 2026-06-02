import MarketingNav from "@/components/marketing/MarketingNav";
import MarketingFooter from "@/components/marketing/MarketingFooter";
import SectionKicker from "@/components/marketing/SectionKicker";

// ─── SITE CONSTANTS ──────────────────────────────────────────────────────
const CALENDLY_URL = "https://calendly.com/matt-stabilisiq/30min";
const EMAIL = "matt@stabilisiq.com";
// ─────────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-ink-900 text-paper">
      <MarketingNav calendlyUrl={CALENDLY_URL} />

      {/* ───── HERO ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink-900 pt-20 md:pt-28 pb-16 md:pb-20">
        {/* Subtle dot grid — same as homepage hero for visual continuity */}
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-5">
          <SectionKicker n="06" label="Who I am" variant="dark" />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 md:gap-14 items-start">
            {/* LEFT: name + intro */}
            <div>
              <h1 className="font-display text-[44px] leading-[1.02] md:text-[80px] md:leading-[0.98] font-bold tracking-tightest">
                I&apos;m{" "}
                {/* TODO: replace with full name e.g. "Matt King" */}
                <span>Matt</span>.
                <br />
                <span className="text-bronze-light italic font-medium">
                  I do the work.
                </span>
              </h1>
              <p className="mt-8 max-w-xl text-[19px] md:text-[20px] text-ink-200 leading-[1.55]">
                I run StabilisIQ. We exist for the moment a CEO or COO knows
                something&apos;s broken in their operation, knows roughly what
                it&apos;d take to fix it, and doesn&apos;t have anyone to
                actually go do it. That&apos;s the job.
              </p>
            </div>

            {/* RIGHT: portrait */}
            <div className="relative md:pt-2">
              <div
                className="relative aspect-square w-full max-w-[420px] mx-auto md:mx-0 md:ml-auto rounded-lg overflow-hidden ring-1 ring-paper/10 bg-ink-800"
                style={{
                  // Background-image fallback — if the file isn't there yet,
                  // we just see a neutral dark square instead of a broken icon.
                  // IMAGE: Save your headshot at public/matt-headshot.png.
                  // Recommended: 1000x1000+ square crop.
                  backgroundImage: "url(/matt-headshot.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Subtle gradient overlay at bottom for the caption hairline */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-bronze/30" />
              </div>
              <p className="mt-4 text-center md:text-right font-mono text-[14px] uppercase tracking-[0.18em] text-ink-400">
                Matt · Founder, StabilisIQ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── MY FOCUS ─────────────────────────────────────────── */}
      <section className="bg-ink-800 text-paper py-20 md:py-28 border-t border-paper/5">
        <div className="mx-auto max-w-3xl px-5">
          <SectionKicker n="07" label="My focus" variant="dark" />
          <h2 className="mt-6 font-display text-3xl md:text-[44px] font-bold tracking-tightest leading-[1.05]">
            Process improvement. Operational efficiency.{" "}
            <span className="italic font-medium text-bronze-light">
              Done, not talked about.
            </span>
          </h2>

          <div className="mt-10 space-y-6 text-[18px] md:text-[19px] text-ink-200 leading-[1.65]">
            <p>
              A lot of &quot;process improvement&quot; turns out to be a slide
              deck. Mine isn&apos;t. The work I do falls into two buckets, and
              the answer to &quot;which one do I need?&quot; is usually
              &quot;both, eventually.&quot;
            </p>

            <div className="pt-2">
              <h3 className="font-display text-[22px] md:text-[26px] font-semibold tracking-tight text-paper mb-3">
                Managed engagement.
              </h3>
              <p>
                Operations don&apos;t break in dramatic ways. They drift —
                a missed handoff, a queue that grows, a reconciliation gap that
                compounds silently over weeks. I instrument the seams between
                your systems, set thresholds for what &quot;normal&quot; looks
                like, and intervene when normal slips. You get an
                operator-of-record, not an advisor.
              </p>
            </div>

            <div className="pt-2">
              <h3 className="font-display text-[22px] md:text-[26px] font-semibold tracking-tight text-paper mb-3">
                Productized build.
              </h3>
              <p>
                Some failures don&apos;t need to be monitored. They need to stop
                happening. When a specific bottleneck shows up — RFQ
                turnaround, missed inbound calls, ticket-to-invoice
                reconciliation — I build the automation that closes the gap.
                Then it&apos;s yours. Owned by you, running on infrastructure
                you choose.
              </p>
            </div>

            <p className="pt-4">
              Most clients use both modes over time. Managed first, to see
              what&apos;s actually breaking. Build second, to prevent the
              next round.
            </p>
          </div>
        </div>
      </section>

      {/* ───── HOW I WORK ───────────────────────────────────────── */}
      <section className="bg-ink-900 text-paper py-20 md:py-28 border-t border-paper/5">
        <div className="mx-auto max-w-3xl px-5">
          <SectionKicker n="08" label="How I work" variant="dark" />
          <h2 className="mt-6 font-display text-3xl md:text-[44px] font-bold tracking-tightest leading-[1.05]">
            A few principles{" "}
            <span className="italic font-medium text-bronze-light">
              I try not to break.
            </span>
          </h2>

          <ul className="mt-10 space-y-7">
            <Principle
              n="01"
              title="Operator to operator."
              body="I talk to people running operations, not buying consulting. If you want a 200-page strategy doc or a workshop series, I&apos;m not it. If you want someone in your queue at 2pm Tuesday, fixing the thing — that&apos;s the work."
            />
            <Principle
              n="02"
              title="Show, not tell."
              body="Every claim on the StabilisIQ site is something I can demonstrate or hand you the runbook for. I won&apos;t invent client stories I don&apos;t have. The HVAC product is live. The QuoteOps tool ran. The propane playbook is detailed enough to argue with."
            />
            <Principle
              n="03"
              title="One conversation, no pitch."
              body="We have a 15-minute fit check. You tell me what&apos;s leaking. I tell you whether I&apos;m the right person for it. If I&apos;m not, I usually know who is. That&apos;s the whole sales process."
            />
            <Principle
              n="04"
              title="Accountability over advice."
              body="A consultant tells you what to do. An operator does it. I&apos;d rather own the outcome than recommend a path and walk away."
            />
          </ul>
        </div>
      </section>

      {/* ───── BACKGROUND (TODO — needs Matt's input) ───────────── */}
      <section className="bg-ink-800 text-paper py-20 md:py-28 border-t border-paper/5">
        <div className="mx-auto max-w-3xl px-5">
          <SectionKicker n="09" label="Background" variant="dark" />
          <h2 className="mt-6 font-display text-3xl md:text-[44px] font-bold tracking-tightest leading-[1.05]">
            Before StabilisIQ.
          </h2>

          {/*
            TODO — Matt: fill this section in with your real bio.
            Suggested structure (pick what fits, drop the rest):

            - Years running operations (e.g. "Fifteen years running ops across...")
            - Industries you've worked in deeply
            - 1-2 specific past roles or company names you're comfortable naming
            - Any credentials/education ONLY if directly relevant to ops work
            - One sentence on why you started StabilisIQ

            Keep it 2-3 short paragraphs. Operator-to-operator voice, like the
            rest of the page. No CV format. No "passionate about" language.
          */}
          <div className="mt-10 space-y-5 text-[18px] md:text-[19px] text-ink-200 leading-[1.65]">
            <p className="text-ink-400 italic">
              [ Replace this block with your background. Suggested: a few short
              paragraphs covering — years running operations, industries
              you&apos;ve worked in deeply, one or two specific past roles you
              want to name, and one sentence on why you started StabilisIQ. ]
            </p>
            <p className="text-ink-400 italic">
              [ Keep it operator-to-operator. No CV format. No &quot;passionate
              about&quot; language. ]
            </p>
          </div>
        </div>
      </section>

      {/* ───── CTA ──────────────────────────────────────────────── */}
      <section className="relative bg-ink-900 text-paper py-20 md:py-28 border-t border-paper/5 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-5 text-center">
          <h2 className="font-display text-3xl md:text-[44px] font-bold tracking-tightest leading-[1.05]">
            Put me on something{" "}
            <span className="italic font-medium text-bronze-light">
              specific.
            </span>
          </h2>
          <p className="mt-6 text-[18px] md:text-[20px] text-ink-200 max-w-2xl mx-auto leading-[1.55]">
            15 minutes. You tell me what&apos;s leaking. I tell you whether I&apos;m
            the right person for it.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-paper hover:bg-white transition-colors pl-7 pr-3 py-3 text-[16px] font-semibold text-ink-900 active:scale-[0.98]"
            >
              Book a 15-min fit check
              <span className="inline-flex w-8 h-8 rounded-full bg-ink-900 text-paper items-center justify-center transition-transform group-hover:translate-x-0.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-paper/15 hover:border-paper/35 hover:bg-paper/5 transition-colors px-7 py-3 text-[16px] font-semibold text-paper font-mono tracking-tight"
            >
              {EMAIL}
            </a>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </main>
  );
}

function Principle({
  n,
  title,
  body,
}: {
  n: string;
  title: string;
  body: string;
}) {
  return (
    <li className="grid grid-cols-[auto_1fr] gap-5 md:gap-7">
      <span className="font-mono text-[15px] uppercase tracking-[0.18em] tabular-nums text-siq-light font-semibold pt-1.5">
        {n}
      </span>
      <div>
        <h3 className="font-display text-[22px] md:text-[26px] font-semibold tracking-tight text-paper mb-2">
          {title}
        </h3>
        <p className="text-[17px] md:text-[18px] text-ink-200 leading-[1.6]">
          {body}
        </p>
      </div>
    </li>
  );
}
