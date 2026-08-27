import type { Metadata } from "next";
import MarketingNav from "@/components/marketing/MarketingNav";
import MarketingFooter from "@/components/marketing/MarketingFooter";

// Ported from the previous StabilisIQ site (Vite/Lovable build). Content is
// unchanged from what was published there; only the styling was remapped to
// the current dark theme. Linked from the SMS consent checkbox on the contact
// form, so these URLs must stay live for Twilio compliance review.
const CALENDLY_URL = "https://calendly.com/matt-stabilisiq/30min";

export const metadata: Metadata = {
  title: "Terms of Service — StabilisIQ",
  description: "The terms governing use of the StabilisIQ website and services.",
  openGraph: {
    title: "Terms of Service — StabilisIQ",
    description: "The terms governing use of the StabilisIQ website and services.",
    type: "website",
    url: "https://stabilisiq.com/terms",
  },
  robots: { index: true, follow: true },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-ink-900 text-paper">
      <MarketingNav calendlyUrl={CALENDLY_URL} />
      <main className="pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="mx-auto max-w-3xl px-5">

            <h1 className="font-display text-4xl md:text-[52px] font-bold tracking-tight leading-[1.05] mb-3">Terms of Service</h1>
            <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-ink-400 mb-12">Last Updated: January 17, 2026</p>

            <div className="space-y-10">
              <section>
                <h2 className="font-display text-2xl md:text-[28px] font-bold tracking-tight text-paper mb-4 mt-2">1. Introduction and Acceptance</h2>
                <p className="text-[17px] text-ink-200 leading-[1.7] mb-4">
                  These Terms of Service ("Terms") govern your access to and use of the services provided by StabilisIQ ("Company," "we," "us," or "our"). By engaging our services or accessing our website, you ("Client," "you," or "your") agree to be bound by these Terms.
                </p>
                <p className="text-[17px] text-ink-200 leading-[1.7]">
                  These Terms are supplementary to any Master Services Agreement ("MSA") or Statement of Work ("SOW") executed between you and StabilisIQ. In the event of a conflict between these Terms and a signed MSA or SOW, the signed agreement shall prevail.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl md:text-[28px] font-bold tracking-tight text-paper mb-4 mt-2">2. Scope of Services</h2>
                <p className="text-[17px] text-ink-200 leading-[1.7] mb-4">
                  StabilisIQ provides managed operational assurance services, which may include continuous monitoring, issue detection, escalation, intervention, and executive reporting. The specific scope of services provided to you will be defined in your applicable service agreement.
                </p>
                <p className="text-[17px] text-ink-200 leading-[1.7] mb-4">
                  StabilisIQ provides managed operational services, not software licenses. We do not provide software products for installation, deployment, or self-service use. All services are delivered by StabilisIQ personnel under defined service agreements.
                </p>
                <p className="text-[17px] text-ink-200 leading-[1.7]">
                  The description of services herein is illustrative and non-exhaustive. Actual services rendered are subject to mutual agreement and documented in applicable service agreements.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl md:text-[28px] font-bold tracking-tight text-paper mb-4 mt-2">3. No Guarantee of Outcomes</h2>
                <p className="text-[17px] text-ink-200 leading-[1.7] mb-4">
                  Services are provided on a best-efforts basis within the parameters defined in your service agreement. StabilisIQ does not guarantee uninterrupted service, the detection of all issues, or the prevention of all operational incidents.
                </p>
                <p className="text-[17px] text-ink-200 leading-[1.7]">
                  No warranties are provided beyond those explicitly stated in a signed contract between you and StabilisIQ. All other warranties, whether express, implied, statutory, or otherwise, including warranties of merchantability, fitness for a particular purpose, and non-infringement, are expressly disclaimed to the fullest extent permitted by law.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl md:text-[28px] font-bold tracking-tight text-paper mb-4 mt-2">4. Client Responsibilities</h2>
                <p className="text-[17px] text-ink-200 leading-[1.7] mb-4">
                  To enable StabilisIQ to perform services effectively, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[17px] text-ink-200 leading-[1.7] marker:text-siq-light">
                  <li>Provide timely and accurate access to systems, data, and personnel as reasonably required</li>
                  <li>Designate authorized points of contact for communications and escalations</li>
                  <li>Maintain appropriate security controls on your systems and infrastructure</li>
                  <li>Notify StabilisIQ promptly of any changes to your environment that may affect service delivery</li>
                  <li>Comply with all applicable laws and regulations governing your operations</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl md:text-[28px] font-bold tracking-tight text-paper mb-4 mt-2">5. No Professional Advice</h2>
                <p className="text-[17px] text-ink-200 leading-[1.7]">
                  StabilisIQ does not provide legal, financial, medical, tax, or regulatory advice. Our services are limited to operational monitoring and assurance as defined in your service agreement. You are solely responsible for ensuring compliance with applicable laws and regulations and for making business decisions based on your own judgment and professional advisors.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl md:text-[28px] font-bold tracking-tight text-paper mb-4 mt-2">6. Limitation of Liability</h2>
                <p className="text-[17px] text-ink-200 leading-[1.7] mb-4">
                  To the maximum extent permitted by applicable law, StabilisIQ's total liability arising out of or related to these Terms or services provided shall not exceed the fees paid by you to StabilisIQ during the twelve (12) months preceding the claim.
                </p>
                <p className="text-[17px] text-ink-200 leading-[1.7]">
                  In no event shall StabilisIQ be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, revenue, data, or business opportunities, regardless of the cause of action or whether StabilisIQ has been advised of the possibility of such damages.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl md:text-[28px] font-bold tracking-tight text-paper mb-4 mt-2">7. Indemnification</h2>
                <p className="text-[17px] text-ink-200 leading-[1.7]">
                  You agree to indemnify, defend, and hold harmless StabilisIQ, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or related to: (a) your breach of these Terms; (b) your use of our services; (c) your violation of any applicable law or regulation; or (d) any third-party claims related to your systems or operations.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl md:text-[28px] font-bold tracking-tight text-paper mb-4 mt-2">8. Confidentiality</h2>
                <p className="text-[17px] text-ink-200 leading-[1.7] mb-4">
                  Each party agrees to maintain the confidentiality of any proprietary or confidential information disclosed by the other party in connection with the services. Confidential information shall not be disclosed to third parties except as necessary to perform the services or as required by law.
                </p>
                <p className="text-[17px] text-ink-200 leading-[1.7]">
                  This confidentiality obligation shall survive the termination of services for a period of three (3) years, unless a longer period is specified in your service agreement.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl md:text-[28px] font-bold tracking-tight text-paper mb-4 mt-2">9. Intellectual Property</h2>
                <p className="text-[17px] text-ink-200 leading-[1.7] mb-4">
                  All methodologies, tools, processes, templates, and know-how developed or used by StabilisIQ in the course of providing services remain the exclusive property of StabilisIQ. Nothing in these Terms transfers any intellectual property rights to you.
                </p>
                <p className="text-[17px] text-ink-200 leading-[1.7]">
                  Reports, analyses, and deliverables prepared specifically for you under a service agreement are licensed for your internal business use only, unless otherwise agreed in writing. You may not distribute, publish, or share such materials with third parties without prior written consent from StabilisIQ.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl md:text-[28px] font-bold tracking-tight text-paper mb-4 mt-2">10. Payment Terms</h2>
                <p className="text-[17px] text-ink-200 leading-[1.7] mb-4">
                  Fees for services shall be as set forth in your applicable service agreement. Unless otherwise specified, invoices are due and payable within thirty (30) days of the invoice date.
                </p>
                <p className="text-[17px] text-ink-200 leading-[1.7]">
                  Late payments may be subject to interest charges and may result in suspension of services. StabilisIQ reserves the right to modify pricing upon reasonable notice for renewal periods.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl md:text-[28px] font-bold tracking-tight text-paper mb-4 mt-2">11. Term and Termination</h2>
                <p className="text-[17px] text-ink-200 leading-[1.7] mb-4">
                  The term of services shall be as specified in your service agreement. Either party may terminate services for cause upon written notice if the other party materially breaches these Terms or the applicable service agreement and fails to cure such breach within thirty (30) days of receiving written notice.
                </p>
                <p className="text-[17px] text-ink-200 leading-[1.7]">
                  Upon termination, you shall pay all fees due for services rendered through the effective date of termination. StabilisIQ shall return or destroy your confidential information in accordance with your service agreement.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl md:text-[28px] font-bold tracking-tight text-paper mb-4 mt-2">12. Governing Law and Dispute Resolution</h2>
                <p className="text-[17px] text-ink-200 leading-[1.7] mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of laws principles.
                </p>
                <p className="text-[17px] text-ink-200 leading-[1.7]">
                  Any disputes arising out of or related to these Terms shall be resolved through binding arbitration administered by the American Arbitration Association in accordance with its Commercial Arbitration Rules. The arbitration shall take place in Wilmington, Delaware, and the decision of the arbitrator shall be final and binding.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl md:text-[28px] font-bold tracking-tight text-paper mb-4 mt-2">13. Changes to Terms</h2>
                <p className="text-[17px] text-ink-200 leading-[1.7]">
                  StabilisIQ reserves the right to modify these Terms at any time. Material changes will be communicated to active clients with reasonable advance notice. Continued use of services after such changes constitutes acceptance of the modified Terms.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl md:text-[28px] font-bold tracking-tight text-paper mb-4 mt-2">14. Contact Information</h2>
                <p className="text-[17px] text-ink-200 leading-[1.7] mb-4">
                  For questions regarding these Terms, please contact:
                </p>
                <div className="text-ink-200">
                  <p>StabilisIQ</p>
                  <p>Attn: Legal Department</p>
                  <p>Email: legal@stabilisiq.com</p>
                </div>
              </section>
            </div>
        </div>
      </main>
      <MarketingFooter />
    </div>
  );
}
