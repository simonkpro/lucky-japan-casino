import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { RankingSection } from "@/components/RankingSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import { PaymentsSection } from "@/components/PaymentsSection";
import { BonusesSection } from "@/components/BonusesSection";
import { CalculatorSection } from "@/components/CalculatorSection";
import { GamesSection } from "@/components/GamesSection";
import { ProvidersSection } from "@/components/ProvidersSection";
import { MobileSection } from "@/components/MobileSection";
import { ProsConsSection } from "@/components/ProsConsSection";
import { SecuritySection } from "@/components/SecuritySection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <RankingSection />
        <ReviewsSection />
        <CategoriesSection />
        <PaymentsSection />
        <BonusesSection />
        <CalculatorSection />
        <GamesSection />
        <ProvidersSection />
        <MobileSection />
        <ProsConsSection />
        <SecuritySection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
