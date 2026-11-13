import Link from "next/link";
import { EMAIL } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="border-t-2 border-ink-900 bg-sheet">
      <div className="mx-auto max-w-[1120px] px-5 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-head text-[22px] font-bold tracking-[-0.01em]">
              Stabilis<span className="hl">IQ</span>
            </p>
            <p className="mt-3 max-w-sm text-[16px] leading-relaxed text-ink-500">
              Operations repair. I find where the money leaks, fix it, and
              build the automation that keeps it fixed.
            </p>
            <p className="mt-4 text-[16px]">
              <a
                href={`mailto:${EMAIL}`}
                className="underline decoration-ink-900/40 underline-offset-[5px] hover:decoration-ink-900"
              >
                {EMAIL}
              </a>
            </p>
          </div>

          <FooterList
            title="This site"
            links={[
              { href: "/#calculator", label: "Leak calculator" },
              { href: "/#work", label: "Work" },
              { href: "/playbooks/propane", label: "Propane runbook" },
              { href: "/#how", label: "How I work" },
              { href: "/#questions", label: "Straight answers" },
              { href: "/about", label: "About Matt" },
              { href: "/contact", label: "Contact" },
            ]}
          />
          <FooterList
            wide
            title="Products"
            links={[
              {
                href: "https://hvac.stabilisiq.com",
                label: "Missed-call text-back for HVAC",
              },
              {
                href: "https://locksmith.stabilisiq.com",
                label: "Missed-call text-back for locksmiths",
              },
            ]}
          />
          <FooterList
            title="Fine print"
            links={[
              { href: "/sms", label: "SMS terms" },
              { href: "/privacy", label: "Privacy policy" },
              { href: "/terms", label: "Terms of service" },
            ]}
          />
        </div>

        <p className="mt-12 border-t border-sheet-rule pt-6 text-[14px] text-ink-500">
          © {new Date().getFullYear()} StabilisIQ. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterList({
  title,
  links,
  wide,
}: {
  title: string;
  links: { href: string; label: string }[];
  wide?: boolean;
}) {
  return (
    <div className={wide ? "md:col-span-3" : "md:col-span-2"}>
      <p className="text-[14px] font-semibold text-ink-900">{title}</p>
      <ul className="mt-3 space-y-2 text-[15px] text-ink-500">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="underline-offset-[5px] hover:text-ink-900 hover:underline"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
