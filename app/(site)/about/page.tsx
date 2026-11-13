import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { BUTTON, BUTTON_QUIET, CALENDLY_URL, EMAIL } from "@/lib/site";

const WRAP = "mx-auto max-w-[1120px] px-5 md:px-8";

const PRINCIPLES = [
  [
    "Operator to operator.",
    "I talk to people who run operations, not people who buy consulting. If you want a workshop series, I'm the wrong call. If you want someone in your queue at 2pm on a Tuesday fixing the thing, that's the work.",
  ],
  [
    "Show it.",
    "Everything on this site is something I can demonstrate or hand you the runbook for. I won't invent client stories I don't have. The missed-call product is live. The quoting tool ran. The propane playbook is detailed enough to argue with.",
  ],
  [
    "One conversation, no pitch.",
    "Fifteen minutes. You tell me what's leaking, I tell you whether I'm the right person for it. If I'm not, I usually know who is. That is the whole sales process.",
  ],
  [
    "Own the outcome.",
    "A consultant tells you what to do. I'd rather do it and be accountable for whether it worked than recommend a path and walk away.",
  ],
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Intro */}
        <section className={`${WRAP} pb-14 pt-12 md:pb-20 md:pt-20`}>
          <div className="grid items-start gap-x-12 gap-y-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <h1 className="font-head text-[40px] font-bold leading-[1.06] tracking-[-0.02em] sm:text-[52px] lg:text-[64px]">
                I&apos;m Matt King. I <span className="hl">do the work</span>.
              </h1>
              <div className="mt-7 max-w-[62ch] space-y-5 text-[19px] leading-[1.6] text-ink-700 md:text-[20px]">
                <p>
                  I run StabilisIQ. It exists for one moment: a CEO or COO
                  knows something is broken in the operation, knows roughly
                  what it would take to fix it, and has nobody to go and
                  actually do it.
                </p>
                <p>That is the job.</p>
              </div>
            </div>

            <figure className="md:col-span-4">
              <div className="max-w-[340px] border-2 border-ink-900 bg-white p-2 md:ml-auto">
                <Image
                  src="/matt-headshot.png"
                  alt="Matt King"
                  width={512}
                  height={512}
                  priority
                  sizes="(min-width: 768px) 340px, 70vw"
                  className="block h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 max-w-[340px] text-[15px] text-ink-500 md:ml-auto">
                Matt King, founder
              </figcaption>
            </figure>
          </div>
        </section>

        {/* What I do */}
        <section className="border-t-2 border-ink-900 bg-sheet-deep">
          <div className={`${WRAP} grid gap-x-12 gap-y-8 py-16 md:grid-cols-12 md:py-24`}>
            <h2 className="font-head text-[30px] font-bold leading-[1.1] tracking-[-0.015em] md:col-span-4 md:text-[36px]">
              Process improvement that gets done.
            </h2>
            <div className="space-y-6 text-[18px] leading-[1.65] text-ink-700 md:col-span-8 md:text-[19px]">
              <p>
                A lot of process improvement turns out to be a slide deck.
                Mine isn&apos;t. The work falls into two kinds, and the answer
                to &ldquo;which one do I need?&rdquo; is usually both,
                eventually.
              </p>

              <div>
                <h3 className="font-head text-[23px] font-bold tracking-[-0.01em] text-ink-900">
                  Managed engagement
                </h3>
                <p className="mt-2">
                  Operations rarely break in dramatic ways. They drift. A
                  missed handoff, a queue that grows, a reconciliation gap
                  that compounds quietly for weeks. I instrument the seams
                  between your systems, set thresholds for what normal looks
                  like, and step in when normal slips. You get an operator of
                  record, not an advisor.
                </p>
              </div>

              <div>
                <h3 className="font-head text-[23px] font-bold tracking-[-0.01em] text-ink-900">
                  Productized build
                </h3>
                <p className="mt-2">
                  Some failures don&apos;t need watching. They need to stop
                  happening. When a specific bottleneck shows up, like quote
                  turnaround, missed inbound calls, or ticket-to-invoice
                  reconciliation, I build the automation that closes it. Then
                  it is yours, running on infrastructure you choose.
                </p>
              </div>

              <p>
                Most clients use both over time. Managed first, to see what is
                actually breaking. A build second, to prevent the next round.
              </p>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="border-t-2 border-ink-900">
          <div className={`${WRAP} grid gap-x-12 gap-y-8 py-16 md:grid-cols-12 md:py-24`}>
            <h2 className="font-head text-[30px] font-bold leading-[1.1] tracking-[-0.015em] md:col-span-4 md:text-[36px]">
              A few rules I try not to break.
            </h2>
            <ol className="border-t border-ink-900/25 md:col-span-8">
              {PRINCIPLES.map(([title, body], i) => (
                <li
                  key={title}
                  className="grid grid-cols-[2.25rem_1fr] gap-x-3 border-b border-ink-900/25 py-6"
                >
                  <span className="pt-1 font-mono text-[16px] tabular-nums text-ink-500">
                    {i + 1}.
                  </span>
                  <div>
                    <h3 className="font-head text-[22px] font-bold tracking-[-0.01em] text-ink-900 md:text-[24px]">
                      {title}
                    </h3>
                    <p className="mt-2 max-w-[60ch] text-[18px] leading-[1.6] text-ink-700">
                      {body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Talk */}
        <section className="border-t-2 border-ink-900 bg-hl">
          <div className={`${WRAP} py-16 md:py-24`}>
            <div className="max-w-[760px]">
              <h2 className="font-head text-[34px] font-bold leading-[1.08] tracking-[-0.02em] md:text-[52px]">
                Put me on something specific.
              </h2>
              <p className="mt-5 text-[19px] leading-[1.6] md:text-[21px]">
                Fifteen minutes. You tell me what&apos;s leaking. I tell you
                whether I&apos;m the right person for it.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${BUTTON} hover:!bg-white`}
                >
                  Book 15 minutes
                </a>
                <Link href="/#calculator" className={BUTTON_QUIET}>
                  Work out what the leak costs
                </Link>
              </div>
              <p className="mt-6 text-[17px]">
                Or write to{" "}
                <a
                  href={`mailto:${EMAIL}`}
                  className="underline decoration-1 underline-offset-[5px]"
                >
                  {EMAIL}
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
