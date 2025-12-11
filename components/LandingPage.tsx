import { NicheConfig } from "@/config/types";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionGrid } from "@/components/sections/SolutionGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { UseCases } from "@/components/sections/UseCases";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

interface LandingPageProps {
  config: NicheConfig;
}

export function LandingPage({ config }: LandingPageProps) {
  return (
    <ThemeProvider theme={config.theme} slug={config.slug}>
      <Layout nav={config.nav} footer={config.footer}>
        <Hero config={config.hero} />
        <ProblemSection config={config.problem} />
        <SolutionGrid config={config.solution} />
        <HowItWorks config={config.howItWorks} />
        <UseCases config={config.useCases} />
        <PricingSection config={config.pricing} />
        <FAQSection config={config.faq} />
        <FinalCTA config={config.finalCta} />
      </Layout>
    </ThemeProvider>
  );
}
