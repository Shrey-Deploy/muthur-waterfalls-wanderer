
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TrekkingSection from "@/components/TrekkingSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import TravelTipsSection from "@/components/TravelTipsSection";
import AccessibilitySection from "@/components/AccessibilitySection";
import LocalInsightsSection from "@/components/LocalInsightsSection";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <TrekkingSection />
      <ActivitiesSection />
      <TravelTipsSection />
      <AccessibilitySection />
      <LocalInsightsSection />
      
      {showBackToTop && (
        <Button
          className="fixed bottom-6 right-6 bg-nature-forest hover:bg-nature-forest-light rounded-full h-12 w-12 p-0 shadow-lg"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </main>
  );
};

export default Index;
