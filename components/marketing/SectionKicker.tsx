// Section header kicker: "§ 01 — Section Name" with hairline rule.
// Reads as editorial/technical, not generic uppercase label.

export default function SectionKicker({
  n,
  label,
  variant = "light",
}: {
  n: string;
  label: string;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <div className="flex items-center gap-3">
      <span
        className={`font-mono text-[10px] uppercase tracking-[0.22em] tabular-nums ${
          isDark ? "text-siq-light" : "text-siq"
        }`}
      >
        § {n}
      </span>
      <span
        className={`h-px w-8 ${isDark ? "bg-paper/20" : "bg-ink-900/15"}`}
      />
      <span
        className={`font-mono text-[10px] uppercase tracking-[0.22em] font-semibold ${
          isDark ? "text-ink-200" : "text-ink-700"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
