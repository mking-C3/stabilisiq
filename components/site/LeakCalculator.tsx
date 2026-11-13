"use client";

import { useId, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  BUTTON,
  BUTTON_QUIET,
  CALENDLY_URL,
  WORKSHEET_KEY,
} from "@/lib/site";

// ─── THE LEAK CALCULATOR ─────────────────────────────────────────────────
// Four common operational leaks. The visitor picks one, enters their own
// numbers, and the worksheet on the right shows the arithmetic line by line.
//
// Ground rules, so this stays honest:
//   * Every figure on the worksheet comes from a number the visitor can see
//     and change. There are no hidden multipliers or industry "benchmarks".
//   * The defaults are round placeholders to make the maths legible, not
//     claims about anyone's business.
//   * The recovery rate is the visitor's assumption, not a promise, and the
//     copy says so.
//   * Nothing is transmitted. "Send me this worksheet" only copies the
//     summary into the contact form, which the visitor then chooses to send.

type Unit = "$" | "%" | "";

type Field = {
  key: string;
  label: string;
  help?: string;
  unit: Unit;
  min: number; // slider range
  max: number;
  step: number;
  cap?: number; // highest value accepted when typed (defaults to max)
  def: number;
};

type Line = { label: string; math: string; result: string };

type Scenario = {
  id: string;
  tab: string;
  story: string;
  fields: Field[];
  recoverDefault: number;
  recoverNote: string;
  work: (v: Record<string, number>) => { lines: Line[]; annual: number };
};

const money = (n: number) =>
  "$" + Math.round(Number.isFinite(n) ? n : 0).toLocaleString("en-US");

const num = (n: number) =>
  (Number.isFinite(n) ? n : 0).toLocaleString("en-US", {
    maximumFractionDigits: n >= 100 ? 0 : 1,
  });

const SCENARIOS: Scenario[] = [
  {
    id: "calls",
    tab: "Calls nobody answers",
    story:
      "The phone rings while everyone is on a job. The caller hangs up and tries the next company on the list.",
    fields: [
      {
        key: "calls",
        label: "Inbound calls a week",
        help: "Everything that rings the main line.",
        unit: "",
        min: 10,
        max: 600,
        step: 5,
        cap: 50000,
        def: 120,
      },
      {
        key: "missed",
        label: "Go unanswered",
        help: "After hours, on the other line, up a ladder.",
        unit: "%",
        min: 1,
        max: 60,
        step: 1,
        cap: 100,
        def: 20,
      },
      {
        key: "book",
        label: "Of those, would have booked",
        help: "Leave out the spam and the price shoppers.",
        unit: "%",
        min: 5,
        max: 90,
        step: 1,
        cap: 100,
        def: 40,
      },
      {
        key: "job",
        label: "Average job",
        unit: "$",
        min: 50,
        max: 5000,
        step: 25,
        cap: 5000000,
        def: 450,
      },
    ],
    recoverDefault: 50,
    recoverNote:
      "A text back within seconds won't save every caller. Half is a cautious guess. Set your own.",
    work: (v) => {
      const missed = (v.calls * v.missed) / 100;
      const jobs = (missed * v.book) / 100;
      const annual = jobs * v.job * 52;
      return {
        annual,
        lines: [
          {
            label: "Calls nobody picked up",
            math: `${num(v.calls)} × ${num(v.missed)}%`,
            result: `${num(missed)} a week`,
          },
          {
            label: "Jobs you would have booked",
            math: `${num(missed)} × ${num(v.book)}%`,
            result: `${num(jobs)} a week`,
          },
          {
            label: "What those jobs were worth",
            math: `${num(jobs)} × ${money(v.job)} × 52 weeks`,
            result: `${money(annual)} a year`,
          },
        ],
      };
    },
  },
  {
    id: "quotes",
    tab: "Quotes that go out late",
    story:
      "The request comes in this morning. Your quote goes out tomorrow. Somebody else's went out within the hour.",
    fields: [
      {
        key: "rfq",
        label: "Quote requests a month",
        unit: "",
        min: 5,
        max: 500,
        step: 5,
        cap: 100000,
        def: 60,
      },
      {
        key: "deal",
        label: "Average deal",
        unit: "$",
        min: 500,
        max: 100000,
        step: 500,
        cap: 50000000,
        def: 8000,
      },
      {
        key: "win",
        label: "Win rate today",
        unit: "%",
        min: 1,
        max: 90,
        step: 1,
        cap: 100,
        def: 20,
      },
      {
        key: "fast",
        label: "Win rate when you answer first",
        help: "You've seen this number on the days you were quick.",
        unit: "%",
        min: 1,
        max: 95,
        step: 1,
        cap: 100,
        def: 28,
      },
    ],
    recoverDefault: 70,
    recoverNote:
      "You won't be first on every request. Set the share you think you'd realistically get to in time.",
    work: (v) => {
      const gap = Math.max(0, v.fast - v.win);
      const deals = (v.rfq * gap) / 100;
      const annual = deals * v.deal * 12;
      return {
        annual,
        lines: [
          {
            label: "Win-rate gap between fast and slow",
            math: `${num(v.fast)}% − ${num(v.win)}%`,
            result: `${num(gap)} points`,
          },
          {
            label: "Deals lost to speed",
            math: `${num(v.rfq)} × ${num(gap)}%`,
            result: `${num(deals)} a month`,
          },
          {
            label: "What those deals were worth",
            math: `${num(deals)} × ${money(v.deal)} × 12 months`,
            result: `${money(annual)} a year`,
          },
        ],
      };
    },
  },
  {
    id: "rework",
    tab: "Work done by hand, twice",
    story:
      "Someone types the same order into a second system. Someone else finds the mistake three days later and fixes it.",
    fields: [
      {
        key: "people",
        label: "People who touch it",
        unit: "",
        min: 1,
        max: 50,
        step: 1,
        cap: 10000,
        def: 4,
      },
      {
        key: "hours",
        label: "Hours each, per week",
        unit: "",
        min: 1,
        max: 40,
        step: 0.5,
        cap: 60,
        def: 6,
      },
      {
        key: "rate",
        label: "Loaded hourly cost",
        help: "Wage plus payroll taxes and benefits.",
        unit: "$",
        min: 15,
        max: 200,
        step: 1,
        cap: 2000,
        def: 55,
      },
      {
        key: "errs",
        label: "Mistakes a month that get redone",
        unit: "",
        min: 0,
        max: 200,
        step: 1,
        cap: 100000,
        def: 8,
      },
      {
        key: "errCost",
        label: "Cost of each mistake",
        help: "The redo, the credit, the phone call.",
        unit: "$",
        min: 0,
        max: 5000,
        step: 25,
        cap: 5000000,
        def: 300,
      },
    ],
    recoverDefault: 60,
    recoverNote:
      "Automation rarely removes the whole job. Somebody still handles the exceptions.",
    work: (v) => {
      const labor = v.people * v.hours * v.rate * 52;
      const errors = v.errs * v.errCost * 12;
      const annual = labor + errors;
      return {
        annual,
        lines: [
          {
            label: "Hands-on time",
            math: `${num(v.people)} people × ${num(v.hours)} hrs × ${money(v.rate)} × 52 weeks`,
            result: `${money(labor)} a year`,
          },
          {
            label: "Mistakes",
            math: `${num(v.errs)} × ${money(v.errCost)} × 12 months`,
            result: `${money(errors)} a year`,
          },
          {
            label: "Together",
            math: `${money(labor)} + ${money(errors)}`,
            result: `${money(annual)} a year`,
          },
        ],
      };
    },
  },
  {
    id: "billing",
    tab: "Jobs that never get billed",
    story:
      "The work got done. The ticket never made it to billing, or it got there missing a line.",
    fields: [
      {
        key: "jobs",
        label: "Jobs or tickets a month",
        unit: "",
        min: 20,
        max: 5000,
        step: 10,
        cap: 5000000,
        def: 400,
      },
      {
        key: "slip",
        label: "Never invoiced, or invoiced short",
        help: "If you don't know, that is usually the answer.",
        unit: "%",
        min: 0.5,
        max: 25,
        step: 0.5,
        cap: 100,
        def: 3,
      },
      {
        key: "inv",
        label: "Average invoice",
        unit: "$",
        min: 50,
        max: 20000,
        step: 50,
        cap: 50000000,
        def: 600,
      },
    ],
    recoverDefault: 80,
    recoverNote:
      "Reconciling tickets against invoices catches most of it. A few are gone for good.",
    work: (v) => {
      const slipped = (v.jobs * v.slip) / 100;
      const annual = slipped * v.inv * 12;
      return {
        annual,
        lines: [
          {
            label: "Tickets that slip through",
            math: `${num(v.jobs)} × ${num(v.slip)}%`,
            result: `${num(slipped)} a month`,
          },
          {
            label: "What they were worth",
            math: `${num(slipped)} × ${money(v.inv)} × 12 months`,
            result: `${money(annual)} a year`,
          },
        ],
      };
    },
  },
];

const defaults = (s: Scenario) =>
  Object.fromEntries(s.fields.map((f) => [f.key, f.def]));

export default function LeakCalculator() {
  const router = useRouter();
  const [activeId, setActiveId] = useState(SCENARIOS[0].id);

  // Each scenario keeps its own numbers, so switching tabs doesn't wipe
  // what the visitor already entered.
  const [values, setValues] = useState<Record<string, Record<string, number>>>(
    () => Object.fromEntries(SCENARIOS.map((s) => [s.id, defaults(s)])),
  );
  const [recover, setRecover] = useState<Record<string, number>>(() =>
    Object.fromEntries(SCENARIOS.map((s) => [s.id, s.recoverDefault])),
  );
  const [fixCost, setFixCost] = useState(0);

  const scenario = SCENARIOS.find((s) => s.id === activeId) ?? SCENARIOS[0];
  const v = values[scenario.id];
  const pct = recover[scenario.id];

  const { lines, annual } = useMemo(() => scenario.work(v), [scenario, v]);
  const recovered = (annual * pct) / 100;

  function setField(key: string, n: number) {
    setValues((all) => ({
      ...all,
      [scenario.id]: { ...all[scenario.id], [key]: n },
    }));
  }

  function reset() {
    setValues((all) => ({ ...all, [scenario.id]: defaults(scenario) }));
    setRecover((all) => ({ ...all, [scenario.id]: scenario.recoverDefault }));
    setFixCost(0);
  }

  // Plain-text copy of the worksheet, for the contact form.
  function summary() {
    const out = [
      `Leak worksheet: ${scenario.tab}`,
      "",
      ...scenario.fields.map(
        (f) =>
          `${f.label}: ${f.unit === "$" ? money(v[f.key]) : num(v[f.key])}${f.unit === "%" ? "%" : ""}`,
      ),
      "",
      `Leaking: ${money(annual)} a year`,
      `If a fix gets back ${num(pct)}%: ${money(recovered)} a year`,
    ];
    if (fixCost > 0) out.push(`Budget I had in mind for the fix: ${money(fixCost)}`);
    out.push("", "What I'd like to talk about:", "");
    return out.join("\n");
  }

  function sendWorksheet() {
    try {
      window.sessionStorage.setItem(WORKSHEET_KEY, summary());
    } catch {
      // Storage blocked (private mode etc.). The contact form still works,
      // it just won't be pre-filled.
    }
    router.push("/contact");
  }

  return (
    <div>
      {/* ── Which leak ─────────────────────────────────────────────── */}
      <div
        role="tablist"
        aria-label="Which leak sounds like yours"
        className="grid grid-cols-2 gap-2 lg:grid-cols-4"
      >
        {SCENARIOS.map((s) => {
          const on = s.id === scenario.id;
          return (
            <button
              key={s.id}
              type="button"
              role="tab"
              id={`tab-${s.id}`}
              aria-selected={on}
              aria-controls="leak-panel"
              onClick={() => setActiveId(s.id)}
              className={[
                "rounded-[3px] border-2 border-ink-900 px-4 py-3 text-left text-[15px] font-medium leading-snug transition-colors md:text-[16px]",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-900",
                on
                  ? "bg-ink-900 text-white"
                  : "bg-white text-ink-900 hover:bg-hl",
              ].join(" ")}
            >
              {s.tab}
            </button>
          );
        })}
      </div>

      <div
        id="leak-panel"
        role="tabpanel"
        aria-labelledby={`tab-${scenario.id}`}
        className="mt-4 grid items-start gap-4 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]"
      >
        {/* ── Your numbers ─────────────────────────────────────────── */}
        <div className="rounded-[3px] border-2 border-ink-900 bg-white p-5 md:p-8">
          <p className="font-head text-[20px] font-medium leading-snug text-ink-900 md:text-[22px]">
            {scenario.story}
          </p>

          <div className="mt-6 border-t border-sheet-rule">
            {scenario.fields.map((f) => (
              <NumberRow
                key={`${scenario.id}-${f.key}`}
                field={f}
                value={v[f.key]}
                onChange={(n) => setField(f.key, n)}
              />
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-[14px] text-ink-500">
            <span>Drag, or type your own number over mine.</span>
            <button
              type="button"
              onClick={reset}
              className="underline underline-offset-4 hover:text-ink-900"
            >
              Reset these
            </button>
          </div>
        </div>

        {/* ── The worksheet (legal pad) ────────────────────────────── */}
        <div className="relative overflow-hidden rounded-[3px] border-2 border-ink-900 bg-pad lg:sticky lg:top-5">
          {/* the pad's red margin rule */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[18px] top-0 w-[3px] border-x border-leak/45 md:left-[30px]"
          />

          <div className="py-6 pl-[36px] pr-5 md:py-7 md:pl-[52px] md:pr-7">
            <p className="text-[14px] font-semibold text-ink-700">
              Worksheet: {scenario.tab.toLowerCase()}
            </p>

            <ol className="mt-3">
              {lines.map((l, i) => (
                <li
                  key={i}
                  className="border-b border-pad-rule py-3 first:border-t"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-[15px] text-ink-900">{l.label}</span>
                    <span className="whitespace-nowrap font-mono text-[15px] font-medium tabular-nums text-ink-900">
                      {l.result}
                    </span>
                  </div>
                  <div className="mt-0.5 font-mono text-[13px] text-ink-500">
                    {l.math}
                  </div>
                </li>
              ))}
            </ol>

            {/* the leak */}
            <div className="mt-6">
              <p className="text-[14px] font-semibold text-ink-700">
                Leaking out
              </p>
              <output className="mt-1 block font-mono text-[40px] font-medium leading-none tracking-[-0.03em] text-leak tabular-nums md:text-[48px]">
                {money(annual)}
              </output>
              <p className="mt-2 text-[15px] text-ink-700">
                a year. That is {money(annual / 12)} a month, or{" "}
                {money(annual / 260)} every working day.
              </p>
            </div>

            {/* recovery assumption */}
            <div className="mt-6 border-t border-pad-rule pt-5">
              <div className="flex items-baseline justify-between gap-4">
                <label
                  htmlFor="recover"
                  className="text-[15px] font-medium text-ink-900"
                >
                  A fix gets back
                </label>
                <span className="font-mono text-[18px] font-medium tabular-nums">
                  {num(pct)}%
                </span>
              </div>
              <input
                id="recover"
                type="range"
                className="siq-range mt-1"
                min={5}
                max={100}
                step={5}
                value={pct}
                onChange={(e) =>
                  setRecover((all) => ({
                    ...all,
                    [scenario.id]: Number(e.target.value),
                  }))
                }
              />
              <p className="text-[13px] leading-snug text-ink-500">
                {scenario.recoverNote}
              </p>
            </div>

            {/* what comes back */}
            <div className="mt-5">
              <p className="text-[14px] font-semibold text-ink-700">
                Back in your pocket
              </p>
              <output className="mt-1 block font-mono text-[40px] font-medium leading-none tracking-[-0.03em] text-kept tabular-nums md:text-[48px]">
                {money(recovered)}
              </output>
              <p className="mt-2 text-[15px] text-ink-700">a year.</p>
            </div>

            {/* budget test */}
            <BudgetTest
              recovered={recovered}
              cost={fixCost}
              onCost={setFixCost}
            />

            <div className="mt-6 flex flex-col gap-2">
              <button type="button" onClick={sendWorksheet} className={BUTTON}>
                Send me this worksheet
              </button>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={BUTTON_QUIET}
              >
                Or talk it through for 15 minutes
              </a>
            </div>

            <p className="mt-4 text-[13px] leading-snug text-ink-500">
              These are your numbers and plain multiplication. I haven&apos;t
              seen your operation, so treat this as a starting figure, not a
              quote. Nothing you type here is sent anywhere unless you press
              the button above.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// One input: a fill-in-the-blank figure with a slider underneath.
function NumberRow({
  field,
  value,
  onChange,
}: {
  field: Field;
  value: number;
  onChange: (n: number) => void;
}) {
  const id = useId();
  return (
    <div className="border-b border-sheet-rule py-4">
      <div className="flex items-end justify-between gap-4">
        <label
          htmlFor={id}
          className="text-[16px] font-medium leading-snug text-ink-900 md:text-[17px]"
        >
          {field.label}
        </label>
        <BlankInput
          id={id}
          unit={field.unit}
          value={value}
          cap={field.cap ?? field.max}
          onChange={onChange}
        />
      </div>
      <input
        type="range"
        className="siq-range mt-1"
        aria-label={`${field.label}, slider`}
        min={field.min}
        max={field.max}
        step={field.step}
        value={Math.min(Math.max(value, field.min), field.max)}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      {field.help && (
        <p className="text-[14px] leading-snug text-ink-500">{field.help}</p>
      )}
    </div>
  );
}

// A number you type on an underline, like a paper form. Keeps a text draft
// while focused so the field can be cleared and retyped without snapping
// back to zero mid-keystroke.
function BlankInput({
  id,
  unit,
  value,
  cap,
  onChange,
  placeholder,
  wide,
}: {
  id: string;
  unit: Unit;
  value: number;
  cap: number;
  onChange: (n: number) => void;
  placeholder?: string;
  wide?: boolean;
}) {
  const [draft, setDraft] = useState<string | null>(null);
  const shown =
    draft ?? (placeholder && value === 0 ? "" : value.toLocaleString("en-US"));

  return (
    <span
      className={`flex flex-shrink-0 items-baseline gap-1 border-b-2 border-ink-900 font-mono text-[20px] font-medium text-ink-900 focus-within:bg-hl/60 ${
        wide ? "w-[150px]" : "w-[118px]"
      }`}
    >
      {unit === "$" && <span aria-hidden="true">$</span>}
      <input
        id={id}
        type="text"
        inputMode="decimal"
        autoComplete="off"
        placeholder={placeholder}
        value={shown}
        onFocus={(e) => {
          setDraft(value === 0 && placeholder ? "" : String(value));
          // select on next tick so the browser's own caret placement doesn't undo it
          const el = e.currentTarget;
          requestAnimationFrame(() => el.select());
        }}
        onChange={(e) => {
          const raw = e.target.value.replace(/[^0-9.]/g, "");
          setDraft(raw);
          const n = parseFloat(raw);
          onChange(Number.isFinite(n) ? Math.min(n, cap) : 0);
        }}
        onBlur={() => setDraft(null)}
        className="w-full min-w-0 bg-transparent text-right tabular-nums outline-none placeholder:text-ink-300"
      />
      {unit === "%" && <span aria-hidden="true">%</span>}
    </span>
  );
}

// "What would the fix have to cost?" Optional. With no figure entered it
// states the break-even; with one, the payback time and first-year return.
function BudgetTest({
  recovered,
  cost,
  onCost,
}: {
  recovered: number;
  cost: number;
  onCost: (n: number) => void;
}) {
  const id = useId();
  const perMonth = recovered / 12;
  let verdict: string;

  if (recovered <= 0) {
    verdict = "At these numbers there is nothing to recover. Lucky you.";
  } else if (cost <= 0) {
    verdict = `Any fix that costs less than ${money(recovered)} pays for itself inside a year.`;
  } else {
    const months = cost / perMonth;
    const back =
      months < 1
        ? "in under a month"
        : `in about ${num(Math.round(months * 10) / 10)} months`;
    verdict =
      months <= 12
        ? `Pays for itself ${back}. By the end of year one you are ${money(recovered - cost)} ahead, which is ${num(Math.round((recovered / cost) * 10) / 10)}× what you spent.`
        : `Takes about ${num(Math.round(months))} months to pay back. That one needs a harder look before anyone spends money.`;
  }

  return (
    <div className="mt-6 border-t border-pad-rule pt-5">
      <div className="flex items-end justify-between gap-4">
        <label htmlFor={id} className="text-[15px] font-medium text-ink-900">
          If the fix cost
          <span className="block text-[13px] font-normal text-ink-500">
            Optional. Try a number.
          </span>
        </label>
        <BlankInput
          id={id}
          unit="$"
          value={cost}
          cap={100000000}
          onChange={onCost}
          placeholder="0"
          wide
        />
      </div>
      <p className="mt-3 text-[15px] leading-snug text-ink-900">{verdict}</p>
    </div>
  );
}
