import Link from "next/link";
import { BUTTON, CALENDLY_URL } from "@/lib/site";

const NAV = [
  { href: "/#calculator", label: "Calculator" },
  { href: "/#work", label: "Work" },
  { href: "/#how", label: "How I work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="border-b-2 border-ink-900 bg-sheet">
      <div className="mx-auto max-w-[1120px] px-5 md:px-8">
        <div className="flex h-[68px] items-center justify-between gap-6">
          <Link
            href="/"
            className="font-head text-[25px] font-bold tracking-[-0.01em] text-ink-900"
            aria-label="StabilisIQ home"
          >
            Stabilis<span className="hl">IQ</span>
          </Link>

          <nav
            aria-label="Main"
            className="hidden items-center gap-7 text-[16px] text-ink-700 md:flex"
          >
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="underline-offset-[6px] hover:text-ink-900 hover:underline"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${BUTTON} !px-4 !py-2 !text-[15px] whitespace-nowrap`}
          >
            Book 15 minutes
          </a>
        </div>

        {/* Phones: the same links on their own row, scrollable if they don't fit */}
        <nav
          aria-label="Main"
          className="-mx-5 flex gap-6 overflow-x-auto px-5 pb-3 text-[15px] text-ink-700 md:hidden"
        >
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="whitespace-nowrap">
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
