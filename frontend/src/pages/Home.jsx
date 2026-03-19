// ================================
// File: src/pages/Home.jsx
// ================================
import HeroSection from "../components/hero/HeroSection";
import ReviewsSection from "../components/reviews/ReviewsSection";
import AboutIntroSection from "../components/home/AboutIntroSection";
import NoSurpriseFeeSection from "../components/sections/NoSurpriseFeeSection";
import HireUsSection from "../components/sections/HireUsSection";
import WhyChooseSection from "../components/sections/WhyChooseSection";
import GuaranteedSection from "../components/sections/GuaranteedSection";
import FAQSection from "../components/sections/FAQSection";
import OurServicesSection from "../components/sections/OurServicesSection";
import { OUR_SERVICES } from "../data/ourServices";
import FindUsSection from "../components/sections/FindUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutIntroSection />
      <NoSurpriseFeeSection />

      <HireUsSection variant="top" />
      <HireUsSection variant="bottom" />

      <ReviewsSection limit={6} />

      <WhyChooseSection variant="top" />
      <WhyChooseSection variant="bottom" />

      <GuaranteedSection />

      <OurServicesSection
        title="Frequently Asked Questions About Relocating in San Antonio"
        description="Preparing for a move can feel like a lot to manage..."
        services={OUR_SERVICES}
      />

      <FindUsSection />

      <FAQSection />
    </>
  );
}