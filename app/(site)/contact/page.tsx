import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import ContactForm from "@/components/ContactForm";
import { CALENDLY_URL, EMAIL, LINK } from "@/lib/site";

// Canonical contact page for the StabilisIQ brand. Carries the same SMS
// opt-in checkbox as the vertical product pages. This is the URL to hand a
// carrier compliance reviewer, since the brand named in the consent text
// ("StabilisIQ") matches the domain it sits on.

export const metadata: Metadata = {
  title: "Contact",
  alternates: { canonical: "/contact" },
  description:
    "Tell Matt what's leaking. Send a message, or book 15 minutes.",
  openGraph: {
    title: "Contact StabilisIQ",
    description:
      "Tell Matt what's leaking. Send a message, or book 15 minutes.",
    type: "website",
    url: "https://stabilisiq.com/contact",
  },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="mx-auto max-w-[1120px] px-5 pb-20 pt-12 md:px-8 md:pb-28 md:pt-20">
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <h1 className="font-head text-[40px] font-bold leading-[1.06] tracking-[-0.02em] sm:text-[52px]">
              Tell me what&apos;s <span className="hl">leaking</span>.
            </h1>
            <p className="mt-6 text-[19px] leading-[1.6] text-ink-700">
              Send a message and I&apos;ll write back. A couple of sentences is
              plenty.
            </p>

            <dl className="mt-10 border-t border-ink-900/25 text-[17px]">
              <div className="border-b border-ink-900/25 py-4">
                <dt className="text-[15px] text-ink-500">Rather talk?</dt>
                <dd className="mt-1">
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={LINK}
                  >
                    Book 15 minutes on my calendar
                  </a>
                </dd>
              </div>
              <div className="border-b border-ink-900/25 py-4">
                <dt className="text-[15px] text-ink-500">Rather email?</dt>
                <dd className="mt-1">
                  <a href={`mailto:${EMAIL}`} className={LINK}>
                    {EMAIL}
                  </a>
                </dd>
              </div>
              <div className="border-b border-ink-900/25 py-4">
                <dt className="text-[15px] text-ink-500">Not sure it&apos;s worth a call?</dt>
                <dd className="mt-1">
                  <Link href="/#calculator" className={LINK}>
                    Run the numbers first
                  </Link>
                </dd>
              </div>
            </dl>
          </div>

          <div className="md:col-span-7">
            <ContactForm sourcePage="stabilisiq.com/contact" accentColor="ink" />

            <p className="mt-5 text-[14px] leading-relaxed text-ink-500">
              The fine print on what happens to what you send:{" "}
              <Link href="/sms" className="underline underline-offset-4 hover:text-ink-900">
                SMS terms
              </Link>
              ,{" "}
              <Link href="/privacy" className="underline underline-offset-4 hover:text-ink-900">
                privacy policy
              </Link>{" "}
              and{" "}
              <Link href="/terms" className="underline underline-offset-4 hover:text-ink-900">
                terms of service
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
