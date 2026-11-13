import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import LeakCalculator from "@/components/site/LeakCalculator";
import Demo from "@/components/Demo";
import { VERTICALS } from "@/lib/verticals";
import { BUTTON, BUTTON_QUIET, CALENDLY_URL, EMAIL, LINK } from "@/lib/site";

// stabilisiq.com home.
//
// Written in the first person because one person does the work. Every claim
// here is something that exists: the live demo on this page, the quoting
// tool, the published propane runbook. No invented clients, no borrowed
// statistics.
//
// The page is built around things comparable firms' sites don't offer: a
// calculator that shows its arithmetic, a product you can use without
// leaving the page, a real runbook to read, a sample of the monthly report,
// dated first-90-days specifics, and straight answers on ownership, access
// and exit.

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: "StabilisIQ: find the leak in your operation and fix it",
    description:
      "Work out what missed calls, slow quotes, re-keyed work and unbilled jobs cost you. Then talk to the person who fixes them.",
    type: "website",
    url: "https://stabilisiq.com",
    siteName: "StabilisIQ",
  },
  twitter: { card: "summary_large_image" },
};

const WRAP = "mx-auto max-w-[1120px] px-5 md:px-8";
const H2 =
  "font-head text-[30px] font-bold leading-[1.1] tracking-[-0.015em] text-ink-900 md:text-[40px]";

// Questions buyers ask that most firms' sites leave out. Also emitted as
// structured data below, so keep answers as plain strings.
const QUESTIONS: [string, string][] = [
  [
    "Do I need a fractional COO?",
    "Probably not. Most people who think they do have three or four processes that keep breaking. Fixing those is a smaller job than hiring an executive, and it is the job I do.",
  ],
  [
    "Are you a consultant?",
    "Not in the usual sense. A consultant analyses and advises. I take ongoing responsibility for watching, catching, stepping in and fixing, through to resolution.",
  ],
  [
    "Is this software I have to buy?",
    "No. I work on top of the systems you already run, and nothing gets ripped out. The one packaged product is the missed-call text-back for small service shops.",
  ],
  [
    "What access do you need?",
    "I start with minimal, read-only access. It widens only when the work needs it and you have approved it, and every access request is documented.",
  ],
  [
    "How do you handle security?",
    "Least privilege, auditable access, and methods you approve before anything is put in place. I work inside your existing security and compliance rules.",
  ],
  [
    "Who owns what you build?",
    "You do. A build runs on infrastructure you choose, and it is yours when it is finished.",
  ],
  [
    "Who looks after it afterwards?",
    "Your call. Your team can run it, or I can keep watching it under a managed engagement.",
  ],
  [
    "How long am I committed?",
    "A managed engagement starts with 90 days on a monthly retainer. A build is a fixed scope, usually 4 to 12 weeks.",
  ],
  [
    "What happens on the first call?",
    "It is fifteen minutes. You describe what is leaking, I ask a few questions, and I tell you whether I am the right person for it. If I am not, I usually know who is. There is no deck.",
  ],
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://stabilisiq.com/#business",
      name: "StabilisIQ",
      url: "https://stabilisiq.com",
      email: EMAIL,
      logo: "https://stabilisiq.com/icon.svg",
      description:
        "Operations repair: finding where a company's operation leaks money, fixing it, and building the automation that keeps it fixed.",
      founder: { "@id": "https://stabilisiq.com/#matt" },
    },
    {
      "@type": "Person",
      "@id": "https://stabilisiq.com/#matt",
      name: "Matt King",
      jobTitle: "Founder",
      url: "https://stabilisiq.com/about",
      image: "https://stabilisiq.com/matt-headshot.png",
      worksFor: { "@id": "https://stabilisiq.com/#business" },
    },
    {
      "@type": "WebSite",
      "@id": "https://stabilisiq.com/#site",
      url: "https://stabilisiq.com",
      name: "StabilisIQ",
      publisher: { "@id": "https://stabilisiq.com/#business" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://stabilisiq.com/#questions",
      mainEntity: QUESTIONS.map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <SiteHeader />
      <main id="main">
        <Hero />
        <Calculator />
        <Work />
        <How />
        <Questions />
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
            <a href="#work" className={BUTTON_QUIET}>
              Try something I built
            </a>
          </div>
          <p className="mt-4 text-[15px] text-ink-500">
            Both run right here on the page. No signup, no email gate.
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
            Matt King runs StabilisIQ. He answers the email and he does the
            work.
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
        <div className="ws-hide max-w-[720px]">
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
          <h2 className={H2}>Things I&apos;ve built that you can use right now.</h2>
          <p className="mt-4 text-[18px] leading-[1.6] text-ink-700 md:text-[19px]">
            I don&apos;t have a wall of client logos, and I won&apos;t invent
            one. What I have is the work itself, so here it is.
          </p>
        </div>

        {/* The live product, usable without leaving the page */}
        <div className="mt-10 grid items-center gap-x-12 gap-y-10 border-y-2 border-ink-900 py-10 md:grid-cols-12 md:py-14">
          <div className="md:col-span-6 lg:col-span-7">
            <p className="text-[16px] font-semibold text-ink-900">
              Home services
              <span className="ml-2 font-normal text-ink-500">
                Live. This is the real thing.
              </span>
            </p>
            <h3 className="mt-2 font-head text-[28px] font-bold leading-tight tracking-[-0.015em] md:text-[36px]">
              Missed-call text-back
            </h3>
            <div className="mt-4 max-w-[54ch] space-y-4 text-[18px] leading-[1.6] text-ink-700">
              <p>
                When a shop misses a call, the caller gets a text within five
                seconds. It asks what&apos;s wrong, offers appointment times,
                and puts the job on the calendar while the owner is still on
                the roof.
              </p>
              <p>
                The phone on this page is wired to a made-up shop called
                Mike&apos;s HVAC. Pretend your air conditioning just died and
                text it. See how long it takes to get you booked.
              </p>
            </div>
            <p className="mt-6 text-[17px]">
              <a
                href="https://hvac.stabilisiq.com"
                target="_blank"
                rel="noopener noreferrer"
                className={LINK}
              >
                The full HVAC version
              </a>
              <span className="mx-3 text-ink-300">/</span>
              <a
                href="https://locksmith.stabilisiq.com"
                target="_blank"
                rel="noopener noreferrer"
                className={LINK}
              >
                The locksmith version
              </a>
            </p>
          </div>
          <div className="md:col-span-6 lg:col-span-5">
            <Demo vertical={VERTICALS.hvac} />
          </div>
        </div>

        <WorkRow
          where="Propane delivery"
          status="Published in full."
          title="Will-call and reconciliation runbook"
        >
          <p>
            The signals to measure, and the thresholds that trigger action:
            will-call orders that sit longer than 24 hours, partial fills more
            than 15% off the ticket, deliveries that never reach billing. Read
            the whole thing. There is nothing to sign up for.
          </p>
          <p className="mt-4">
            <Link href="/playbooks/propane" className={LINK}>
              Read the runbook
            </Link>
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

// The first 90 days of a managed engagement, with dates. Every line restates
// a term already offered (read-only start, 30 to 45 day foundation, monthly
// report, 90-day initial commitment); nothing here is a new promise.
const NINETY: [string, string, string][] = [
  [
    "Day 0",
    "A 15-minute call",
    "You describe the leak. I tell you whether I'm the right person for it.",
  ],
  [
    "Week 1",
    "Read-only access, nothing more",
    "I map the handoffs between your systems and write down what normal looks like, by transaction, by queue, by exception code.",
  ],
  [
    "By day 45",
    "Instruments, thresholds, runbooks",
    "The measuring is in place, and we have agreed what trips an alarm and what happens when it does.",
  ],
  [
    "From then on",
    "Watching and stepping in",
    "Monitoring runs all day. When a threshold trips I act on it. I don't just forward the alert. Anything that breaks twice gets a root-cause fix so there is no third time.",
  ],
  [
    "Every month",
    "One page",
    "What the operation did, what moved, and what I changed. A sample is below.",
  ],
  [
    "Day 90",
    "Your decision",
    "The initial commitment ends. Keep going, turn the recurring problem into a one-time build, or stop.",
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

        {/* Dated specifics */}
        <div className="mt-16 grid gap-x-12 gap-y-6 md:grid-cols-12">
          <div className="md:col-span-4">
            <h3 className="font-head text-[22px] font-bold leading-tight tracking-[-0.01em] md:text-[26px]">
              The first 90 days, with dates
            </h3>
            <p className="mt-3 text-[16px] leading-[1.55] text-ink-500">
              For a managed engagement. A build has its own schedule, agreed
              before it starts.
            </p>
          </div>
          <ol className="border-t border-ink-900/25 md:col-span-8">
            {NINETY.map(([when, what, detail]) => (
              <li
                key={when}
                className="grid gap-x-6 gap-y-1 border-b border-ink-900/25 py-5 sm:grid-cols-[7.5rem_1fr]"
              >
                <span className="font-mono text-[15px] tabular-nums text-ink-500 sm:pt-0.5">
                  {when}
                </span>
                <div>
                  <p className="text-[18px] font-semibold text-ink-900">
                    {what}
                  </p>
                  <p className="mt-1 text-[17px] leading-[1.55] text-ink-700">
                    {detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* The monthly report */}
        <div className="mt-16 grid gap-x-12 gap-y-6 md:grid-cols-12">
          <div className="md:col-span-4">
            <h3 className="font-head text-[22px] font-bold leading-tight tracking-[-0.01em] md:text-[26px]">
              The page you get each month
            </h3>
            <p className="mt-3 text-[16px] leading-[1.55] text-ink-500">
              This is the layout. The entries are made up, because a real one
              belongs to the client it was written for.
            </p>
          </div>
          <div className="md:col-span-8">
            <SampleReport />
          </div>
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

const REPORT: [string, string[]][] = [
  [
    "What moved",
    [
      "Cycle time: down",
      "Repeat incidents: down",
      "Rework volume: down",
      "Time to resolve: improving",
    ],
  ],
  [
    "Top exceptions",
    [
      "Order processing timeout (ERP integration)",
      "Invoice reconciliation mismatch (billing)",
      "Fulfillment delay (warehouse handoff)",
      "Data sync failure (CRM to ERP)",
    ],
  ],
  [
    "Caught before it cost you",
    [
      "3 escalations resolved before the SLA was breached",
      "Revenue leakage detected and corrected",
      "Silent failure caught in the overnight batch",
    ],
  ],
  [
    "Next month",
    [
      "Root-cause analysis: billing sync",
      "Runbook update: warehouse exception flow",
      "Recalibrate the cycle-time baseline",
    ],
  ],
];

function SampleReport() {
  return (
    <figure
      aria-label="Sample monthly operations report"
      className="border-2 border-ink-900 bg-white"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b-2 border-ink-900 px-5 py-4 md:px-7">
        <p className="font-head text-[20px] font-bold tracking-[-0.01em]">
          Operations report
        </p>
        <p className="font-mono text-[13px] text-ink-500">
          SAMPLE &middot; made-up entries &middot; one page
        </p>
      </div>
      <div className="grid sm:grid-cols-2">
        {REPORT.map(([title, items], i) => (
          <div
            key={title}
            className={[
              "px-5 py-5 md:px-7",
              i > 0 ? "border-t border-ink-900/25" : "",
              i === 1 ? "sm:border-t-0" : "",
              i % 2 === 1 ? "sm:border-l sm:border-ink-900/25" : "",
            ].join(" ")}
          >
            <p className="text-[15px] font-semibold text-ink-900">{title}</p>
            <ul className="mt-2 space-y-1.5 text-[15px] leading-[1.45] text-ink-700">
              {items.map((it) => (
                <li key={it} className="flex gap-2">
                  <span aria-hidden="true" className="text-ink-300">
                    &ndash;
                  </span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </figure>
  );
}

/* ─── Questions ────────────────────────────────────────────────────────── */

function Questions() {
  return (
    <section id="questions" className="scroll-mt-4 border-t-2 border-ink-900">
      <div className={`${WRAP} grid gap-x-12 gap-y-8 py-16 md:grid-cols-12 md:py-24`}>
        <div className="md:col-span-4">
          <h2 className={H2}>Straight answers.</h2>
          <p className="mt-4 text-[17px] leading-[1.6] text-ink-700">
            The things people ask on the first call, answered before it.
          </p>
        </div>
        <div className="border-t border-ink-900/25 md:col-span-8">
          {QUESTIONS.map(([q, a], i) => (
            <details
              key={q}
              open={i === 0}
              className="group border-b border-ink-900/25"
            >
              <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-5 text-[18px] font-semibold text-ink-900 marker:hidden hover:bg-hl/40 [&::-webkit-details-marker]:hidden">
                <span>{q}</span>
                <span
                  aria-hidden="true"
                  className="font-mono text-[20px] font-normal text-ink-500 group-open:hidden"
                >
                  +
                </span>
                <span
                  aria-hidden="true"
                  className="hidden font-mono text-[20px] font-normal text-ink-500 group-open:inline"
                >
                  &minus;
                </span>
              </summary>
              <p className="max-w-[60ch] pb-6 text-[18px] leading-[1.6] text-ink-700">
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
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
