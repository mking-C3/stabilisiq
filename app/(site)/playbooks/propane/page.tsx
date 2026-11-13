import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { BUTTON, BUTTON_QUIET, CALENDLY_URL, LINK } from "@/lib/site";

// The propane will-call and reconciliation runbook, published in full.
// Content carried over from the original StabilisIQ propane page (what
// breaks, the signals, the thresholds, the KPIs). It is a playbook, not a
// client case study, and the page says so.

export const metadata: Metadata = {
  title: "Propane delivery runbook: will-call and reconciliation",
  description:
    "The full runbook for a propane distributor, dispatch through billing: what breaks, what to measure, the thresholds that trigger action, and what should improve. Free to read, nothing to sign up for.",
  alternates: { canonical: "/playbooks/propane" },
  openGraph: {
    title: "Propane delivery runbook: will-call and reconciliation",
    description:
      "What breaks between dispatch and billing, what to measure, and the thresholds that trigger action. Published in full.",
    type: "article",
    url: "https://stabilisiq.com/playbooks/propane",
  },
};

const WRAP = "mx-auto max-w-[1120px] px-5 md:px-8";
const H2 =
  "font-head text-[26px] font-bold leading-[1.12] tracking-[-0.015em] md:text-[32px]";

const BREAKS = [
  "Will-call follow-ups get missed, and the customer runs dry before dispatch notices.",
  "Route changes don't make it into driver assignments or billing.",
  "Partial fills are never reconciled against ticket volumes.",
  "Customers drift from scheduled delivery to will-call, and demand goes blind.",
  "Ticket-to-invoice mismatches compound quietly for weeks.",
  "Degree-day demand spikes aren't surfaced until tanks are empty.",
  "Drivers write notes that nobody in the back office acts on.",
];

const SIGNALS: [string, string][] = [
  ["Dispatch status age", "Time from ticket creation to driver assignment."],
  ["Will-call timer", "Time elapsed since the last contact with the customer."],
  [
    "Delivery exception codes",
    "How often partial fills, refusals and access problems occur, and where they cluster.",
  ],
  [
    "Tank monitor gaps",
    "Missing readings that point to a sensor or communications failure.",
  ],
  ["Billing completion lag", "Time from delivery to invoice."],
  ["Route variance", "The difference between the planned route and the one driven."],
];

const TRIGGERS: [string, string][] = [
  [
    "A will-call order sits longer than 24 hours",
    "Escalate to the dispatch manager and flag the customer record.",
  ],
  [
    "A ticket is posted but not invoiced",
    "Send a reconciliation alert to the billing queue.",
  ],
  [
    "A partial fill is more than 15% off the ticket",
    "Flag the stop for route review and follow up with the driver.",
  ],
  [
    "A driver note is flagged",
    "Put it in front of the operations lead with the context and a priority.",
  ],
];

const MOVES: [string, string][] = [
  ["On-time delivery %", "Fewer missed or late deliveries across routes."],
  ["Back-office cycle time", "Tickets become invoices faster."],
  [
    "Exceptions per 1,000 stops",
    "Fewer partial fills and refusals.",
  ],
  [
    "Revenue leakage recovered",
    "Reconciliation catches deliveries that were never billed.",
  ],
  [
    "Calls per dispatch",
    "Fewer inbound calls, because the follow-up happened first.",
  ],
];

export default function PropanePlaybook() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className={`${WRAP} pb-12 pt-12 md:pb-16 md:pt-20`}>
          <p className="text-[16px] text-ink-500">
            <Link href="/#work" className="underline underline-offset-4 hover:text-ink-900">
              Work
            </Link>{" "}
            / Playbook
          </p>
          <h1 className="mt-4 max-w-[18ch] font-head text-[38px] font-bold leading-[1.06] tracking-[-0.02em] sm:text-[50px] lg:text-[60px]">
            Propane delivery: the will-call and{" "}
            <span className="hl">reconciliation</span> runbook
          </h1>
          <div className="mt-7 max-w-[62ch] space-y-4 text-[19px] leading-[1.6] text-ink-700">
            <p>
              This is how I would instrument a propane distributor from
              dispatch through billing, so exceptions show up before they
              turn into run-outs or unbilled deliveries.
            </p>
            <p>
              It is published in full because a runbook you can&apos;t read is
              not worth much. It is a playbook, not a case study. If you think
              a threshold is wrong for your operation, you are probably right,
              and I&apos;d like to hear why.
            </p>
          </div>
        </section>

        <Block n="1" title="What breaks">
          <ul className="border-t border-ink-900/25 text-[18px] leading-[1.5]">
            {BREAKS.map((b) => (
              <li key={b} className="border-b border-ink-900/25 py-4">
                {b}
              </li>
            ))}
          </ul>
        </Block>

        <Block n="2" title="What gets measured" tone>
          <Table head={["Signal", "What it is"]} rows={SIGNALS} />
        </Block>

        <Block n="3" title="When someone steps in">
          <p className="mb-6 max-w-[60ch] text-[18px] leading-[1.6] text-ink-700">
            Each of these is a threshold. When it trips, the step on the right
            happens. Nobody has to notice first.
          </p>
          <Table head={["When this happens", "This happens next"]} rows={TRIGGERS} strong />
        </Block>

        <Block n="4" title="What should move" tone>
          <Table head={["Number", "The direction it should go"]} rows={MOVES} />
        </Block>

        <section className="border-t-2 border-ink-900 bg-hl">
          <div className={`${WRAP} py-16 md:py-20`}>
            <div className="max-w-[760px]">
              <h2 className="font-head text-[30px] font-bold leading-[1.1] tracking-[-0.02em] md:text-[44px]">
                Not in propane? The pattern is the same.
              </h2>
              <p className="mt-5 text-[19px] leading-[1.6]">
                Pick the handoffs, put a clock on each one, and decide in
                advance what happens when the clock runs out. Tell me what
                your operation looks like and I&apos;ll tell you where I would
                put the first three timers.
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
                  Price your own unbilled work
                </Link>
              </div>
              <p className="mt-6 text-[17px]">
                Or{" "}
                <Link href="/contact" className={LINK}>
                  send a message
                </Link>
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

function Block({
  n,
  title,
  tone,
  children,
}: {
  n: string;
  title: string;
  tone?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`border-t-2 border-ink-900 ${tone ? "bg-sheet-deep" : ""}`}
    >
      <div className={`${WRAP} grid gap-x-12 gap-y-6 py-14 md:grid-cols-12 md:py-20`}>
        <h2 className={`${H2} md:col-span-4`}>
          <span className="mr-2 font-mono text-[18px] font-normal text-ink-500">
            {n}.
          </span>
          {title}
        </h2>
        <div className="md:col-span-8">{children}</div>
      </div>
    </section>
  );
}

function Table({
  head,
  rows,
  strong,
}: {
  head: [string, string];
  rows: [string, string][];
  strong?: boolean;
}) {
  return (
    <table className="w-full border-collapse text-left text-[17px] leading-[1.5]">
      <thead>
        <tr className="border-b-2 border-ink-900 text-[15px] text-ink-500">
          <th scope="col" className="w-[42%] py-3 pr-6 font-medium">
            {head[0]}
          </th>
          <th scope="col" className="py-3 font-medium">
            {head[1]}
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map(([a, b]) => (
          <tr key={a} className="border-b border-ink-900/25 align-top">
            <th
              scope="row"
              className={`py-4 pr-6 ${strong ? "font-semibold" : "font-medium"} text-ink-900`}
            >
              {a}
            </th>
            <td className="py-4 text-ink-700">{b}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
