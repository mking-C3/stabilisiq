import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import LeakCalculator from "@/components/site/LeakCalculator";
import { BUTTON, BUTTON_QUIET, CALENDLY_URL, EMAIL, LINK } from "@/lib/site";

// stabilisiq.com home.
//
// Written in the first person because one person does the work. Every claim
// here is something that exists: the two live demos, the quoting tool, the
// propane playbook. No invented clients, no borrowed statistics.

const WRAP = "mx-auto max-w-[1120px] px-5 md:px-8";
const H2 =
  "font-head text-[30px] font-bold leading-[1.1] tracking-[-0.015em] text-ink-900 md:text-[40px]";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Calculator />
        <Work />
        <How />
        <Fit />
        <Talk />
      </main>
      <SiteFooter />
    </>
  );
}

/* ─── Hero ─────────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className={`${WRAP} pb-14 pt-12 md:pb-20 md:pt-20`}>
      <div className="grid items-end gap-x-12 gap-y-10 md:grid-cols-12">
        <div className="md:col-span-8">
          <h1 className="font-head text-[40px] font-bold leading-[1.06] tracking-[-0.02em] text-ink-900 sm:text-[52px] lg:text-[62px]">
            Something in your operation is{" "}
            <span className="hl">leaking money</span>. You probably know where.
          </h1>

          <p className="mt-7 max-w-[60ch] text-[19px] leading-[1.6] text-ink-700 md:text-[21px]">
            I&apos;m Matt. Companies call me when calls go unanswered, quotes go
            out a day late, or work gets done and never billed. I fix the leak,
            then build the automation that keeps it fixed.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#calculator" className={BUTTON}>
              Work out what it&apos;s costing you
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={BUTTON_QUIET}
            >
              Book 15 minutes
            </a>
          </div>
          <p className="mt-4 text-[15px] text-ink-500">
            The calculator runs in your browser. No signup, no email gate.
          </p>
        </div>

        <figure className="md:col-span-4">
          <div className="max-w-[300px] border-2 border-ink-900 bg-white p-2 md:ml-auto">
            <Image
              src="/matt-headshot.png"
              alt="Matt King, who runs StabilisIQ"
              width={512}
              height={512}
              priority
              sizes="(min-width: 768px) 300px, 60vw"
              className="block h-auto w-full"
            />
          </div>
          <figcaption className="mt-3 max-w-[300px] text-[15px] leading-snug text-ink-500 md:ml-auto">
            Matt King runs StabilisIQ. He is who answers the email and who does
            the work.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ─── Calculator ───────────────────────────────────────────────────────── */

function Calculator() {
  return (
    <section
      id="calculator"
      className="scroll-mt-4 border-y-2 border-ink-900 bg-sheet-deep"
    >
      <div className={`${WRAP} py-14 md:py-20`}>
        <div className="max-w-[720px]">
          <h2 className={H2}>Put a number on the leak.</h2>
          <p className="mt-4 text-[18px] leading-[1.6] text-ink-700 md:text-[19px]">
            Pick the one that sounds like you and swap in your own figures. The
            worksheet shows every step, so you can argue with the arithmetic.
          </p>
        </div>
        <div className="mt-9">
          <LeakCalculator />
        </div>
      </div>
    </section>
  );
}

/* ─── Work ─────────────────────────────────────────────────────────────── */

function Work() {
  return (
    <section id="work" className="scroll-mt-4">
      <div className={`${WRAP} py-16 md:py-24`}>
        <div className="max-w-[720px]">
          <h2 className={H2}>Things I&apos;ve built that you can go and look at.</h2>
          <p className="mt-4 text-[18px] leading-[1.6] text-ink-700 md:text-[19px]">
            I don&apos;t have a wall of client logos, and I won&apos;t invent
            one. What I have is the work itself.
          </p>
        </div>

        <div className="mt-10 border-t-2 border-ink-900">
          <WorkRow
            where="Home services"
            status="Live. Try it yourself."
            title="Missed-call text-back"
          >
            <p>
              When a shop misses a call, the caller gets a text within five
              seconds. It asks what&apos;s wrong, offers appointment times, and
              puts the job on the calendar while the owner is still on the
              roof.
            </p>
            <p className="mt-4">
              <a
                href="https://hvac.stabilisiq.com"
                target="_blank"
                rel="noopener noreferrer"
                className={LINK}
              >
                Text the HVAC demo
              </a>
              <span className="mx-3 text-ink-300">/</span>
              <a
                href="https://locksmith.stabilisiq.com"
                target="_blank"
                rel="noopener noreferrer"
                className={LINK}
              >
                Text the locksmith demo
              </a>
            </p>
          </WorkRow>

          <WorkRow
            where="Charter aviation"
            status="Built and run."
            title="QuoteOps Autopilot"
          >
            <p>
              Reads an incoming charter request, checks which aircraft fit, and
              drafts two or three priced options with an audit trail. A person
              approves each quote before it goes out. Time to first quote went
              from 30 to 90 minutes down to 3 to 10.
            </p>
          </WorkRow>

          <WorkRow
            where="Propane delivery"
            status="Written playbook."
            title="Will-call and reconciliation runbook"
          >
            <p>
              The thresholds and the steps for catching will-call orders that
              sit longer than 24 hours, partial fills that are more than 15%
              off the ticket, and deliveries that never reach billing. Detailed
              enough to disagree with.
            </p>
            <p className="mt-4">
              <Link href="/contact" className={LINK}>
                Ask me to walk you through it
              </Link>
            </p>
          </WorkRow>
        </div>
      </div>
    </section>
  );
}

function WorkRow({
  where,
  status,
  title,
  children,
}: {
  where: string;
  status: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="grid gap-x-12 gap-y-3 border-b border-ink-900/25 py-8 md:grid-cols-12 md:py-10">
      <div className="md:col-span-4">
        <p className="text-[16px] font-semibold text-ink-900">{where}</p>
        <p className="mt-1 text-[16px] text-ink-500">{status}</p>
      </div>
      <div className="md:col-span-8">
        <h3 className="font-head text-[24px] font-bold leading-tight tracking-[-0.01em] text-ink-900 md:text-[28px]">
          {title}
        </h3>
        <div className="mt-3 max-w-[62ch] text-[18px] leading-[1.6] text-ink-700">
          {children}
        </div>
      </div>
    </article>
  );
}

/* ─── How I work ───────────────────────────────────────────────────────── */

const MONTH = [
  [
    "Measure",
    "I hook into the systems you already run and write down what normal looks like, by transaction, by queue, by exception code.",
  ],
  [
    "Watch",
    "Monitoring runs against that baseline all day. Stalls and silent failures show up before a customer notices.",
  ],
  [
    "Step in",
    "When a threshold trips, the runbook fires and the right person gets the context. I act on it. I don't just forward the alert.",
  ],
  [
    "Fix the cause",
    "Anything that breaks twice gets a change to the process, the system, or the runbook, so there is no third time.",
  ],
  [
    "Report",
    "One page a month: what the operation did, what moved, and what I changed.",
  ],
];

function How() {
  return (
    <section id="how" className="scroll-mt-4 border-t-2 border-ink-900">
      <div className={`${WRAP} py-16 md:py-24`}>
        <h2 className={H2}>Two ways to hire me.</h2>

        <div className="mt-10 grid gap-x-12 gap-y-12 md:grid-cols-2">
          <Way
            kind="Managed engagement"
            title="I run it."
            terms="Monthly retainer. 90 days to start."
          >
            <p>
              I become the person accountable for the part of your operation
              that keeps slipping. The first 30 to 45 days go to
              instrumentation, KPIs and runbooks. After that it is monitoring,
              stepping in, and root-cause work, during business hours or around
              the clock, depending on what is actually critical.
            </p>
          </Way>
          <Way
            kind="Productized build"
            title="I build it."
            terms="Fixed scope. Usually 4 to 12 weeks."
          >
            <p>
              One specific bottleneck, like quoting, missed calls, or
              ticket-to-invoice reconciliation. I build the automation on top of
              the systems you already have. Nothing gets ripped out. When it is
              done it belongs to you and runs wherever you want it to.
            </p>
          </Way>
        </div>

        <p className="mt-10 max-w-[62ch] text-[18px] leading-[1.6] text-ink-700">
          Most people start with the first to find out what is really breaking,
          then do the second so it stops.
        </p>

        <div className="mt-16 grid gap-x-12 gap-y-6 md:grid-cols-12">
          <h3 className="font-head text-[22px] font-bold leading-tight tracking-[-0.01em] md:col-span-4 md:text-[24px]">
            What a month of managed work looks like
          </h3>
          <ol className="border-t border-ink-900/25 md:col-span-8">
            {MONTH.map(([name, body], i) => (
              <li
                key={name}
                className="grid grid-cols-[2.25rem_1fr] gap-x-3 border-b border-ink-900/25 py-5 sm:grid-cols-[2.25rem_9.5rem_1fr]"
              >
                <span className="font-mono text-[16px] tabular-nums text-ink-500">
                  {i + 1}.
                </span>
                <span className="text-[17px] font-semibold text-ink-900">
                  {name}
                </span>
                <span className="col-start-2 mt-1 text-[17px] leading-[1.55] text-ink-700 sm:col-start-3 sm:mt-0">
                  {body}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Way({
  kind,
  title,
  terms,
  children,
}: {
  kind: string;
  title: string;
  terms: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t-2 border-ink-900 pt-6">
      <p className="text-[16px] text-ink-500">{kind}</p>
      <h3 className="mt-1 font-head text-[32px] font-bold leading-tight tracking-[-0.015em] md:text-[38px]">
        {title}
      </h3>
      <div className="mt-4 text-[18px] leading-[1.6] text-ink-700">
        {children}
      </div>
      <p className="mt-5 text-[16px] font-semibold text-ink-900">{terms}</p>
    </div>
  );
}

/* ─── Fit ──────────────────────────────────────────────────────────────── */

function Fit() {
  return (
    <section className="border-t-2 border-ink-900 bg-sheet-deep">
      <div className={`${WRAP} py-16 md:py-24`}>
        <h2 className={H2}>Who should call, and who shouldn&apos;t.</h2>

        <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
          <div>
            <h3 className="text-[17px] font-semibold text-kept">Call me if</h3>
            <ul className="mt-3 border-t border-ink-900/25 text-[18px] leading-[1.5] text-ink-900">
              <FitItem>
                You run operations at a company doing somewhere between $10M
                and $500M.
              </FitItem>
              <FitItem>
                You already know what is broken and don&apos;t need it
                discovered for you.
              </FitItem>
              <FitItem>
                You want it fixed by someone who stays accountable for the
                result.
              </FitItem>
              <FitItem>
                You would rather keep the software you have than buy more.
              </FitItem>
            </ul>
          </div>
          <div>
            <h3 className="text-[17px] font-semibold text-leak">
              Don&apos;t call me if
            </h3>
            <ul className="mt-3 border-t border-ink-900/25 text-[18px] leading-[1.5] text-ink-900">
              <FitItem>You want a 200-page strategy document.</FitItem>
              <FitItem>You want a new platform rolled out company-wide.</FitItem>
              <FitItem>You want someone to manage your team.</FitItem>
            </ul>
          </div>
        </div>

        <p className="mt-10 max-w-[62ch] text-[17px] leading-[1.6] text-ink-700">
          Running a small service shop instead? The missed-call product was
          built for you. See it for{" "}
          <a
            href="https://hvac.stabilisiq.com"
            target="_blank"
            rel="noopener noreferrer"
            className={LINK}
          >
            HVAC
          </a>{" "}
          or{" "}
          <a
            href="https://locksmith.stabilisiq.com"
            target="_blank"
            rel="noopener noreferrer"
            className={LINK}
          >
            locksmiths
          </a>
          .
        </p>
      </div>
    </section>
  );
}

function FitItem({ children }: { children: React.ReactNode }) {
  return <li className="border-b border-ink-900/25 py-4">{children}</li>;
}

/* ─── Talk ─────────────────────────────────────────────────────────────── */

function Talk() {
  return (
    <section className="border-t-2 border-ink-900 bg-hl">
      <div className={`${WRAP} py-16 md:py-24`}>
        <div className="max-w-[760px]">
          <h2 className="font-head text-[34px] font-bold leading-[1.08] tracking-[-0.02em] text-ink-900 md:text-[52px]">
            Fifteen minutes. Tell me what&apos;s leaking.
          </h2>
          <p className="mt-5 text-[19px] leading-[1.6] text-ink-900 md:text-[21px]">
            I&apos;ll tell you whether I&apos;m the right person for it. If
            I&apos;m not, I usually know who is.
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
            <Link href="/contact" className={BUTTON_QUIET}>
              Send a message instead
            </Link>
          </div>
          <p className="mt-6 text-[17px] text-ink-900">
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
  );
}
