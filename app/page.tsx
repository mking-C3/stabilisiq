import Hero from "@/components/marketing/Hero";
import WorkSection from "@/components/marketing/WorkSection";
import ModesSection from "@/components/marketing/ModesSection";
import LoopSection from "@/components/marketing/LoopSection";
import WhoSection from "@/components/marketing/WhoSection";
import FinalCTA from "@/components/marketing/FinalCTA";
import MarketingNav from "@/components/marketing/MarketingNav";
import MarketingFooter from "@/components/marketing/MarketingFooter";

// ─── SITE CONSTANTS ──────────────────────────────────────────────────────
const CALENDLY_URL = "https://calendly.com/matt-stabilisiq/30min";
// ─────────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <main className="min-h-screen bg-ink-900 text-paper">
      <MarketingNav calendlyUrl={CALENDLY_URL} />
      <Hero calendlyUrl={CALENDLY_URL} />
      <WorkSection />
      <ModesSection calendlyUrl={CALENDLY_URL} />
      <LoopSection />
      <WhoSection />
      <FinalCTA calendlyUrl={CALENDLY_URL} />
      <MarketingFooter />
    </main>
  );
}
