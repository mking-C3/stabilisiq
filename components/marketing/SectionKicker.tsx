// Section header kicker: "§ 01 — Section Name" with hairline rule.

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
        className={`font-mono text-[15px] uppercase tracking-[0.18em] tabular-nums font-semibold ${
          isDark ? "text-siq-light" : "text-siq"
        }`}
      >
        § {n}
      </span>
      <span
        className={`h-px w-10 ${isDark ? "bg-paper/20" : "bg-ink-900/15"}`}
      />
      <span
        className={`font-mono text-[14px] uppercase tracking-[0.2em] font-semibold ${
          isDark ? "text-ink-200" : "text-ink-700"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
