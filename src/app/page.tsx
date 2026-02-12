import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WellnessTeaser from "@/components/sections/WellnessTeaser";
import InteriorTeaser from "@/components/sections/InteriorTeaser";
import Reviews from "@/components/sections/Reviews";
import PrivacyBanner from "@/components/sections/PrivacyBanner";
import BottomCTA from "@/components/sections/BottomCTA";
import SectionTransition from "@/components/ui/SectionTransition";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SectionTransition from="#FAF6F0" to="#2C2C2C" />
      <WellnessTeaser />
      <SectionTransition from="#2C2C2C" to="#FAF6F0" />
      <InteriorTeaser />
      <SectionTransition from="#FAF6F0" to="#1A1A1A" />
      <Reviews />
      <SectionTransition from="#1A1A1A" to="#2D5016" />
      <PrivacyBanner />
      <SectionTransition from="#2D5016" to="#F0E8D8" />
      <BottomCTA />
    </>
  );
}
