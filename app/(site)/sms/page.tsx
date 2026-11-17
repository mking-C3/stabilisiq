import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { SMS_CONSENT_TEXT } from "@/lib/consent";

// ─── LEGAL / OPERATOR CONSTANTS ──────────────────────────────────────────
// Reviewed / referenced by Twilio during toll-free verification. The opt-in
// URL submitted to Twilio is /contact (where the checkbox lives); this page
// is the full SMS program terms linked from that form. If anything here
// changes, check it still matches the verification submission.
const OPERATOR_LEGAL_NAME = "StabilisIQ LLC";
const PROGRAM_NAME = "StabilisIQ";
const OPERATOR_EMAIL = "matt@stabilisiq.com";
const OPERATOR_WEBSITE = "https://stabilisiq.com";
const SMS_NUMBER_DISPLAY = "(888) 913-2301";
const SMS_NUMBER_E164 = "+18889132301";
const LAST_UPDATED = "November 17, 2026";
// ─────────────────────────────────────────────────────────────────────────

export default function SmsTermsPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />

      <article id="main" className="mx-auto max-w-3xl px-5 py-14 md:py-20">
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-[15px] text-ink-500 hover:text-ink-900 transition inline-flex items-center gap-1.5"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to StabilisIQ
          </Link>
          <span className="text-[14px] text-ink-500">
            Last updated: {LAST_UPDATED}
          </span>
        </div>

        {/* Title */}
        <div className="mb-12">
          <p className="text-[15px] font-semibold text-ink-500 mb-4">
            SMS Terms & Consent
          </p>
          <h1 className="font-head text-4xl md:text-[52px] font-bold tracking-tight leading-[1.05]">
            Text Messaging Terms
          </h1>
          <p className="mt-5 text-[18px] text-ink-700 leading-[1.6]">
            These terms cover text messages sent by {PROGRAM_NAME} from{" "}
            <a href={`sms:${SMS_NUMBER_E164}`} className="text-ink-900 underline underline-offset-4">
              {SMS_NUMBER_DISPLAY}
            </a>
            : how you agree to receive them, what we send, and how to stop
            them at any time.
          </p>
        </div>

        {/* Body sections */}
        <div className="space-y-10 text-[17px] leading-[1.7] text-ink-700">

          <Section title="About the program">
            <p>
              {OPERATOR_LEGAL_NAME} (&quot;{PROGRAM_NAME},&quot; &quot;we,&quot;
              &quot;us&quot;) is a small automation consultancy. {SMS_NUMBER_DISPLAY}{" "}
              is our own customer-care text line. We use it to reply to people
              who contact us, to arrange a time to talk, and to show live
              demos of the text-message tools we build, when you ask to see
              one.
            </p>
            <p className="mt-3">
              Every message we send names {PROGRAM_NAME}. Demo messages start
              with &quot;{PROGRAM_NAME} demo&quot; so it is always clear that
              you are looking at an example and who it is from. We do not send
              marketing or promotional texts.
            </p>
          </Section>

          <Section title="How you opt in">
            <p>You only receive texts from us in one of these two ways:</p>
            <ol className="mt-3 space-y-3 list-decimal pl-6 marker:text-ink-500 marker:font-semibold">
              <li>
                <strong className="text-ink-900 font-semibold">
                  You tick the SMS box on our{" "}
                  <Link href="/contact" className="underline underline-offset-4">
                    contact form
                  </Link>
                  .
                </strong>{" "}
                The box is optional and starts unticked. You can send the form
                without it, and if you do we will reply by email or phone
                instead. The text beside the box reads:
                <blockquote className="mt-3 border-l-2 border-ink-900/40 pl-4 text-[16px] text-ink-900">
                  {SMS_CONSENT_TEXT}
                </blockquote>
              </li>
              <li>
                <strong className="text-ink-900 font-semibold">
                  You text {SMS_NUMBER_DISPLAY} first.
                </strong>{" "}
                If you send us a text, we reply to that conversation only. We
                will not start sending you other messages because you texted
                us.
              </li>
            </ol>
            <p className="mt-4">
              We never buy, rent or borrow phone numbers. If you have not done
              one of the two things above, you will not get a text from us.
            </p>
          </Section>

          <Section title="What we send">
            <ul className="mt-2 space-y-2.5 list-disc pl-6 marker:text-ink-500">
              <li>Replies to your message or question</li>
              <li>Messages to set up a call or meeting time</li>
              <li>
                Demo texts you have asked to see, such as a sample missed-call
                reply or a sample delay alert, each labelled &quot;{PROGRAM_NAME}{" "}
                demo&quot;
              </li>
              <li>A one-time confirmation when you opt in</li>
            </ul>
          </Section>

          <Section title="Message frequency">
            <p>
              Message frequency varies. Messages are sent only in response to
              your inquiry or a demo you asked for, usually a handful of
              messages within a single conversation. We do not send recurring
              or scheduled marketing messages.
            </p>
          </Section>

          <Section title="Message and data rates">
            <p>
              Message and data rates may apply. We do not charge you for
              messages; your mobile carrier may.
            </p>
          </Section>

          <Section title="How to opt out">
            <p>
              Reply <strong className="text-ink-900 font-semibold">STOP</strong>{" "}
              to any message from us to opt out at any time. You will receive
              one final message confirming that you have been unsubscribed, and
              no further messages will be sent to your number. To opt back in,
              reply <strong className="text-ink-900 font-semibold">START</strong>{" "}
              or tick the box on our contact form again.
            </p>
          </Section>

          <Section title="How to get help">
            <p>
              Reply <strong className="text-ink-900 font-semibold">HELP</strong>{" "}
              to any message from us for assistance, or email{" "}
              <a
                href={`mailto:${OPERATOR_EMAIL}`}
                className="text-ink-900 underline underline-offset-4"
              >
                {OPERATOR_EMAIL}
              </a>
              .
            </p>
          </Section>

          <Section title="Sample messages">
            <p className="text-ink-500 text-[15px] italic mb-3">
              Representative examples. Exact wording varies.
            </p>
            <div className="space-y-3">
              <SampleMessage>
                StabilisIQ: Thanks, you&apos;re opted in to texts from
                StabilisIQ about your inquiry and any demo you request. Msg
                frequency varies. Msg &amp; data rates may apply. Reply HELP
                for help, STOP to opt out.
              </SampleMessage>
              <SampleMessage>
                StabilisIQ: Hi Dana, thanks for your message about missed
                calls. Matt here. Does Thursday at 2pm work for a 15-minute
                call? Reply STOP to opt out.
              </SampleMessage>
              <SampleMessage>
                StabilisIQ demo: Sorry we missed your call! This is the sample
                text-back for a home-services shop. What&apos;s going on with
                your system? Reply STOP to opt out.
              </SampleMessage>
              <SampleMessage>
                StabilisIQ demo: Sample trip alert: Trip 4471 is running about
                30 min late due to traffic. New arrival 3:45pm. Reply STOP to
                opt out.
              </SampleMessage>
            </div>
          </Section>

          <Section title="Your information">
            <p>
              We use your phone number and the content of your messages only
              to run this text program: to reply to you, arrange a time to
              talk, and send demos you asked for. We do not sell, rent or share
              your information for marketing. All the above categories exclude
              text messaging originator opt-in data and consent; this
              information won&apos;t be shared with any third parties.
            </p>
            <p className="mt-3">
              See our{" "}
              <Link href="/privacy" className="text-ink-900 underline underline-offset-4">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms" className="text-ink-900 underline underline-offset-4">
                Terms of Service
              </Link>{" "}
              for more.
            </p>
          </Section>

          <Section title="Carrier disclaimer">
            <p>
              Wireless carriers are not liable for delayed or undelivered
              messages.
            </p>
          </Section>

          <Section title="Operator">
            <p>
              <strong className="text-ink-900 font-semibold">{OPERATOR_LEGAL_NAME}</strong>
              <br />
              Website:{" "}
              <a
                href={OPERATOR_WEBSITE}
                className="text-ink-900 underline underline-offset-4"
              >
                {OPERATOR_WEBSITE}
              </a>
              <br />
              Email:{" "}
              <a
                href={`mailto:${OPERATOR_EMAIL}`}
                className="text-ink-900 underline underline-offset-4"
              >
                {OPERATOR_EMAIL}
              </a>
              <br />
              Text line: {SMS_NUMBER_DISPLAY}
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
        <div className="mt-16 pt-8 border-t border-ink-900/25 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-[3px] border-2 border-ink-900 bg-ink-900 hover:bg-hl hover:text-ink-900 transition-colors px-5 py-2.5 text-[15px] font-medium text-white"
          >
            Back to StabilisIQ
          </Link>
          <span className="text-[14px] text-ink-500">
            {OPERATOR_LEGAL_NAME} · {LAST_UPDATED}
          </span>
        </div>
      </article>

      <SiteFooter />
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
      <h2 className="font-head text-2xl md:text-[28px] font-bold tracking-tight text-ink-900 mb-4">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function SampleMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white border border-ink-900/25 rounded-[3px] px-4 py-3 text-[16px] text-ink-900 leading-relaxed">
      {children}
    </div>
  );
}
