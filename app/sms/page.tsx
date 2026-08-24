import Link from "next/link";
import MarketingNav from "@/components/marketing/MarketingNav";
import MarketingFooter from "@/components/marketing/MarketingFooter";

// ─── LEGAL / OPERATOR CONSTANTS ──────────────────────────────────────────
// Reviewed / referenced by Twilio during toll-free verification.
// If any of these change, update this page.
const OPERATOR_LEGAL_NAME = "StabilisIQ LLC";
const OPERATOR_EMAIL = "matt@stabilisiq.com";
const OPERATOR_WEBSITE = "https://stabilisiq.com";
const CALENDLY_URL = "https://calendly.com/matt-stabilisiq/30min";
const SMS_NUMBER_DISPLAY = "(888) 913-2301";
const SMS_NUMBER_E164 = "+18889132301";
const BRAND_ON_SMS = "Mike's HVAC"; // What the sender identifies as in messages
const LAST_UPDATED = "December 2, 2026";
// ─────────────────────────────────────────────────────────────────────────

export default function SmsTermsPage() {
  return (
    <main className="min-h-screen bg-ink-900 text-paper">
      <MarketingNav calendlyUrl={CALENDLY_URL} />

      <article className="mx-auto max-w-3xl px-5 py-14 md:py-20">
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-[15px] text-ink-300 hover:text-paper transition inline-flex items-center gap-1.5"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to StabilisIQ
          </Link>
          <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-ink-400">
            Last updated: {LAST_UPDATED}
          </span>
        </div>

        {/* Title */}
        <div className="mb-12">
          <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-siq-light font-semibold mb-4">
            SMS Terms & Consent
          </p>
          <h1 className="font-display text-4xl md:text-[52px] font-bold tracking-tight leading-[1.05]">
            Text Messaging Terms
          </h1>
          <p className="mt-5 text-[18px] text-ink-200 leading-[1.6]">
            These terms describe how the automated text messaging service at{" "}
            <a href={`sms:${SMS_NUMBER_E164}`} className="text-siq-light underline underline-offset-4">
              {SMS_NUMBER_DISPLAY}
            </a>{" "}
            works, how you consent to receive messages, and how to stop them at
            any time.
          </p>
        </div>

        {/* Body sections */}
        <div className="space-y-10 text-[17px] leading-[1.7] text-ink-200">

          <Section title="About the service">
            <p>
              {OPERATOR_LEGAL_NAME} (&quot;we,&quot; &quot;us&quot;) operates
              an automated text-back service at {SMS_NUMBER_DISPLAY}. The
              number is used as the live demo line for our HVAC
              missed-call-text-back product — publicly shown at{" "}
              <a
                href="https://hvac.stabilisiq.com"
                className="text-siq-light underline underline-offset-4"
              >
                hvac.stabilisiq.com
              </a>{" "}
              — where the automated assistant identifies itself as{" "}
              &quot;{BRAND_ON_SMS}&quot; for demonstration purposes.
            </p>
            <p className="mt-3">
              This is a &quot;missed call text back&quot; service — when a
              caller reaches the number and the call goes unanswered, an
              automated SMS reply is sent to that caller&apos;s phone within a
              few seconds to continue the conversation over text.
            </p>
          </Section>

          <Section title="How you opt in">
            <p>
              You opt in to receive text messages from us in one of two ways:
            </p>
            <ol className="mt-3 space-y-3 list-decimal pl-6 marker:text-siq-light marker:font-semibold">
              <li>
                <strong className="text-paper font-semibold">
                  You call {SMS_NUMBER_DISPLAY} and the call is not answered.
                </strong>{" "}
                A single automated reply is sent to the number you called from,
                acknowledging the missed call and asking how we can help. This
                initial reply is a direct response to your call, not a
                promotional message.
              </li>
              <li>
                <strong className="text-paper font-semibold">
                  You reply to the initial text.
                </strong>{" "}
                Your reply constitutes consent to continue the conversation.
                Further messages from us (asking about your issue, offering
                appointment times, confirming a booking) will follow as part of
                that conversation until it concludes or you opt out.
              </li>
            </ol>
            <p className="mt-4">
              We do not send unsolicited messages. If you have never called our
              number, you will not receive a text from us.
            </p>
          </Section>

          <Section title="What to expect">
            <ul className="mt-2 space-y-2.5 list-disc pl-6 marker:text-siq-light">
              <li>An initial automated reply within roughly 5 seconds of a missed call</li>
              <li>Short conversational follow-ups asking about your service issue</li>
              <li>Two proposed appointment windows for you to choose from</li>
              <li>A confirmation once an appointment is booked</li>
              <li>A follow-up from a technician to confirm details, if applicable</li>
            </ul>
          </Section>

          <Section title="Message frequency">
            <p>
              Message frequency varies based on the conversation. A typical
              interaction is 3 to 8 messages, sent within a single window of a
              few minutes to a few hours. We do not send recurring or scheduled
              marketing messages.
            </p>
          </Section>

          <Section title="Message and data rates">
            <p>
              Message and data rates may apply. Standard messaging rates from
              your mobile carrier apply to every message you send and receive.
              We do not charge you for messages; your carrier may.
            </p>
          </Section>

          <Section title="How to opt out">
            <p>
              Reply <strong className="text-paper font-semibold">STOP</strong>{" "}
              to any message from us to opt out at any time. You will receive
              a single final confirmation message acknowledging that you have
              been unsubscribed, and no further messages will be sent to your
              number.
            </p>
            <p className="mt-3">
              To opt back in later, simply call {SMS_NUMBER_DISPLAY} again.
            </p>
          </Section>

          <Section title="How to get help">
            <p>
              Reply <strong className="text-paper font-semibold">HELP</strong>{" "}
              to any message from us for assistance. You will receive a reply
              with our contact information. You can also email us directly at{" "}
              <a
                href={`mailto:${OPERATOR_EMAIL}`}
                className="text-siq-light underline underline-offset-4"
              >
                {OPERATOR_EMAIL}
              </a>
              .
            </p>
          </Section>

          <Section title="Sample messages">
            <p className="text-ink-300 text-[15px] italic mb-3">
              Below are representative examples of messages you may receive.
              Exact wording varies.
            </p>
            <div className="space-y-3">
              <SampleMessage>
                Hey, this is Mike&apos;s HVAC — sorry we missed your call! I
                can get you sorted right here over text. What&apos;s going on?
              </SampleMessage>
              <SampleMessage>
                Sounds like an AC issue. Is it blowing warm air, or nothing at
                all?
              </SampleMessage>
              <SampleMessage>
                Got it. I can get a tech out today between 2pm–4pm, or tomorrow
                morning 8am–10am. Which works?
              </SampleMessage>
              <SampleMessage>
                You&apos;re confirmed for today, 2pm–4pm. A tech will call you
                on the way to confirm. Reply STOP to opt out of future
                messages.
              </SampleMessage>
            </div>
          </Section>

          <Section title="How we use your information">
            <p>
              We use the phone number you called from and the content of your
              text messages solely to respond to your inquiry and to schedule
              a service appointment. We do not sell, rent, or share your
              information with third parties for marketing purposes. No mobile
              opt-in data — including phone numbers or consent records — will
              be shared with third parties or affiliates for marketing or
              promotional purposes.
            </p>
          </Section>

          <Section title="Operator">
            <p>
              <strong className="text-paper font-semibold">{OPERATOR_LEGAL_NAME}</strong>
              <br />
              Website:{" "}
              <a
                href={OPERATOR_WEBSITE}
                className="text-siq-light underline underline-offset-4"
              >
                {OPERATOR_WEBSITE}
              </a>
              <br />
              Email:{" "}
              <a
                href={`mailto:${OPERATOR_EMAIL}`}
                className="text-siq-light underline underline-offset-4"
              >
                {OPERATOR_EMAIL}
              </a>
            </p>
          </Section>

          <Section title="Changes to these terms">
            <p>
              We may update these terms from time to time. The current version
              is always available at this URL, with the &quot;Last
              updated&quot; date at the top of the page reflecting the most
              recent change.
            </p>
          </Section>
        </div>

        {/* End-of-page marker */}
        <div className="mt-16 pt-8 border-t border-paper/10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-paper hover:bg-white transition-colors px-5 py-2.5 text-[15px] font-semibold text-ink-900"
          >
            Back to StabilisIQ
          </Link>
          <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-ink-400">
            {OPERATOR_LEGAL_NAME} · {LAST_UPDATED}
          </span>
        </div>
      </article>

      <MarketingFooter />
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-2xl md:text-[28px] font-bold tracking-tight text-paper mb-4">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function SampleMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-ink-800 border border-paper/10 rounded-lg px-4 py-3 text-[16px] text-ink-100 leading-relaxed">
      {children}
    </div>
  );
}
