import type { Metadata } from "next";
import MarketingNav from "@/components/marketing/MarketingNav";
import MarketingFooter from "@/components/marketing/MarketingFooter";

// Ported from the previous StabilisIQ site (Vite/Lovable build). Content is
// unchanged from what was published there; only the styling was remapped to
// the current dark theme. Linked from the SMS consent checkbox on the contact
// form, so these URLs must stay live for Twilio compliance review.
const CALENDLY_URL = "https://calendly.com/matt-stabilisiq/30min";

export const metadata: Metadata = {
  title: "Privacy Policy — StabilisIQ",
  description: "How StabilisIQ collects, uses, and safeguards information, including data submitted through our contact form and SMS program.",
  openGraph: {
    title: "Privacy Policy — StabilisIQ",
    description: "How StabilisIQ collects, uses, and safeguards information, including data submitted through our contact form and SMS program.",
    type: "website",
    url: "https://stabilisiq.com/privacy",
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-ink-900 text-paper">
      <MarketingNav calendlyUrl={CALENDLY_URL} />
      <main className="pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="mx-auto max-w-3xl px-5">

            <h1 className="font-display text-4xl md:text-[52px] font-bold tracking-tight leading-[1.05] mb-3">Privacy Policy</h1>
            <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-ink-400 mb-12">Last Updated: January 17, 2026</p>

            <div className="space-y-10">
              <section>
                <h2 className="font-display text-2xl md:text-[28px] font-bold tracking-tight text-paper mb-4 mt-2">1. Introduction</h2>
                <p className="text-[17px] text-ink-200 leading-[1.7]">
                  StabilisIQ ("Company," "we," "us," or "our") is committed to protecting the privacy of individuals and organizations who interact with us. This Privacy Policy describes how we collect, use, disclose, and safeguard information in connection with our website and managed operational assurance services.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl md:text-[28px] font-bold tracking-tight text-paper mb-4 mt-2">2. Information We Collect</h2>
                
                <h3 className="font-display text-lg md:text-xl font-semibold tracking-tight text-paper mt-8 mb-3">2.1 Website and Inquiry Information</h3>
                <p className="text-[17px] text-ink-200 leading-[1.7] mb-4">
                  When you visit our website or contact us, we may collect:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[17px] text-ink-200 leading-[1.7] mb-4 marker:text-siq-light">
                  <li>Contact information (name, email address, phone number, company name)</li>
                  <li>Information submitted through contact forms or email communications</li>
                  <li>Technical information (IP address, browser type, device information, pages visited)</li>
                  <li>Cookies and similar tracking technologies as described in Section 9</li>
                </ul>

                <h3 className="font-display text-lg md:text-xl font-semibold tracking-tight text-paper mt-8 mb-3">2.2 Service Delivery Information</h3>
                <p className="text-[17px] text-ink-200 leading-[1.7] mb-4">
                  In the course of providing our managed operational assurance services, we may access or receive:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[17px] text-ink-200 leading-[1.7] marker:text-siq-light">
                  <li>Business and operational data necessary to perform monitoring and detection services</li>
                  <li>System logs, performance metrics, and operational indicators</li>
                  <li>Contact information for authorized client personnel</li>
                  <li>Other information as defined in your service agreement</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl md:text-[28px] font-bold tracking-tight text-paper mb-4 mt-2">3. How We Use Information</h2>
                <p className="text-[17px] text-ink-200 leading-[1.7] mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[17px] text-ink-200 leading-[1.7] marker:text-siq-light">
                  <li>To respond to inquiries and communicate with prospective and current clients</li>
                  <li>To provide, maintain, and improve our services</li>
                  <li>To perform monitoring, detection, escalation, and reporting as defined in service agreements</li>
                  <li>To fulfill our contractual obligations</li>
                  <li>To analyze and improve our website functionality and user experience</li>
                  <li>To comply with legal obligations and protect our legal rights</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl md:text-[28px] font-bold tracking-tight text-paper mb-4 mt-2">4. Data Sharing and Third Parties</h2>
                <p className="text-[17px] text-ink-200 leading-[1.7] mb-4">
                  We do not sell, rent, or trade your information to third parties. We may share information in the following limited circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[17px] text-ink-200 leading-[1.7] marker:text-siq-light">
                  <li><strong>Service Providers:</strong> We may engage trusted third-party vendors to assist in providing our services (e.g., hosting providers, communication tools). Such providers are bound by confidentiality obligations and are prohibited from using your information for other purposes.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information if required by law, regulation, legal process, or governmental request.</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction, subject to applicable confidentiality obligations.</li>
                  <li><strong>With Your Consent:</strong> We may share information with your express consent or at your direction.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl md:text-[28px] font-bold tracking-tight text-paper mb-4 mt-2">5. Data Security</h2>
                <p className="text-[17px] text-ink-200 leading-[1.7] mb-4">
                  We implement reasonable administrative, technical, and physical safeguards designed to protect information from unauthorized access, disclosure, alteration, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[17px] text-ink-200 leading-[1.7] mb-4 marker:text-siq-light">
                  <li>Encryption of data in transit and at rest where appropriate</li>
                  <li>Access controls limiting information access to authorized personnel</li>
                  <li>Regular security assessments and monitoring</li>
                  <li>Employee training on data protection practices</li>
                </ul>
                <p className="text-[17px] text-ink-200 leading-[1.7]">
                  While we strive to protect your information, no method of transmission or storage is completely secure. We cannot guarantee absolute security of information.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl md:text-[28px] font-bold tracking-tight text-paper mb-4 mt-2">6. Data Retention</h2>
                <p className="text-[17px] text-ink-200 leading-[1.7]">
                  We retain information for as long as necessary to fulfill the purposes described in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. Retention periods for client data are specified in applicable service agreements. Upon termination of services, we will return or destroy client data in accordance with the terms of your agreement.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl md:text-[28px] font-bold tracking-tight text-paper mb-4 mt-2">7. Client Data Confidentiality</h2>
                <p className="text-[17px] text-ink-200 leading-[1.7]">
                  We treat all client operational data accessed during service delivery as confidential. Such data is used solely for the purpose of providing services and is not used for any other commercial purpose. Confidentiality obligations are detailed in our service agreements and survive the termination of services.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl md:text-[28px] font-bold tracking-tight text-paper mb-4 mt-2">8. Your Rights</h2>
                <p className="text-[17px] text-ink-200 leading-[1.7] mb-4">
                  Depending on your jurisdiction, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[17px] text-ink-200 leading-[1.7] mb-4 marker:text-siq-light">
                  <li>The right to access personal information we hold about you</li>
                  <li>The right to request correction of inaccurate information</li>
                  <li>The right to request deletion of your information, subject to legal and contractual limitations</li>
                  <li>The right to opt out of certain communications</li>
                </ul>
                <p className="text-[17px] text-ink-200 leading-[1.7]">
                  To exercise these rights, please contact us using the information provided in Section 11. We will respond to requests in accordance with applicable law.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl md:text-[28px] font-bold tracking-tight text-paper mb-4 mt-2">9. Cookies and Website Analytics</h2>
                <p className="text-[17px] text-ink-200 leading-[1.7] mb-4">
                  Our website uses cookies and similar technologies to enhance functionality and analyze usage patterns. These include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[17px] text-ink-200 leading-[1.7] mb-4 marker:text-siq-light">
                  <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Used to understand how visitors interact with our website</li>
                  <li><strong>Preference Cookies:</strong> Used to remember your preferences and settings</li>
                </ul>
                <p className="text-[17px] text-ink-200 leading-[1.7]">
                  You can control cookie settings through your browser. Disabling certain cookies may affect website functionality.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl md:text-[28px] font-bold tracking-tight text-paper mb-4 mt-2">10. Changes to This Privacy Policy</h2>
                <p className="text-[17px] text-ink-200 leading-[1.7]">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. Material changes will be posted on our website with an updated effective date. We encourage you to review this Privacy Policy periodically.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl md:text-[28px] font-bold tracking-tight text-paper mb-4 mt-2">11. Contact Information</h2>
                <p className="text-[17px] text-ink-200 leading-[1.7] mb-4">
                  For questions or concerns about this Privacy Policy or our data practices, please contact:
                </p>
                <div className="text-ink-200">
                  <p>StabilisIQ</p>
                  <p>Attn: Privacy Officer</p>
                  <p>Email: privacy@stabilisiq.com</p>
                </div>
              </section>
            </div>
        </div>
      </main>
      <MarketingFooter />
    </div>
  );
}
