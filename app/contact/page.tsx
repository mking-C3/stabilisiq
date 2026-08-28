import type { Metadata } from "next";
import MarketingNav from "@/components/marketing/MarketingNav";
import MarketingFooter from "@/components/marketing/MarketingFooter";
import SectionKicker from "@/components/marketing/SectionKicker";
import ContactForm from "@/components/ContactForm";

// Canonical contact page for the StabilisIQ brand. Carries the same
// SMS opt-in checkbox as the vertical product pages — this is the URL to
// hand a carrier compliance reviewer, since the brand shown in the consent
// text ("StabilisIQ") matches the domain.
const CALENDLY_URL = "https://calendly.com/matt-stabilisiq/30min";
const EMAIL = "matt@stabilisiq.com";

export const metadata: Metadata = {
  title: "Contact — StabilisIQ",
  description:
    "Tell us what's leaking. Send a message, or book a 15-minute fit check.",
  openGraph: {
    title: "Contact — StabilisIQ",
    description:
      "Tell us what's leaking. Send a message, or book a 15-minute fit check.",
    type: "website",
    url: "https://stabilisiq.com/contact",
  },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-ink-900 text-paper">
      <MarketingNav calendlyUrl={CALENDLY_URL} />

      <section className="relative overflow-hidden pt-14 pb-14 md:pt-20 md:pb-20">
        {/* Same dot grid as the home hero, for continuity */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative mx-auto max-w-3xl px-5">
          <SectionKicker n="10" label="Contact" variant="dark" />

          <h1 className="mt-6 font-display text-4xl md:text-[64px] font-bold tracking-tightest leading-[1.02]">
            Tell us what&apos;s{" "}
            <span className="italic font-medium text-bronze-light">
              leaking.
            </span>
          </h1>

          <p className="mt-6 text-[19px] md:text-[20px] text-ink-200 leading-[1.55]">
            Send a message and we&apos;ll get back to you. If you&apos;d rather
            just talk, book a{" "}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-siq-light underline underline-offset-4 hover:text-paper transition"
            >
              15-minute fit check
            </a>{" "}
            or email{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="font-mono text-[17px] text-siq-light underline underline-offset-4 hover:text-paper transition"
            >
              {EMAIL}
            </a>
            .
          </p>

          <div className="mt-10">
            <ContactForm
              sourcePage="stabilisiq.com/contact"
              accentColor="blue"
            />
          </div>

          <p className="mt-6 text-[14px] text-ink-400 leading-relaxed">
            Prefer the details? Our{" "}
            <a
              href="/sms"
              className="text-ink-200 underline underline-offset-4 hover:text-paper transition"
            >
              SMS terms
            </a>
            ,{" "}
            <a
              href="/privacy"
              className="text-ink-200 underline underline-offset-4 hover:text-paper transition"
            >
              privacy policy
            </a>{" "}
            and{" "}
            <a
              href="/terms"
              className="text-ink-200 underline underline-offset-4 hover:text-paper transition"
            >
              terms of service
            </a>{" "}
            spell out exactly what we do with what you send us.
          </p>
        </div>
      </section>

      <MarketingFooter />
    </main>
  );
}
