import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WellnessTeaser from "@/components/sections/WellnessTeaser";
import InteriorTeaser from "@/components/sections/InteriorTeaser";
import Reviews from "@/components/sections/Reviews";
import PrivacyBanner from "@/components/sections/PrivacyBanner";
import Pricing from "@/components/sections/Pricing";
import BottomCTA from "@/components/sections/BottomCTA";
import SectionTransition from "@/components/ui/SectionTransition";
import { getContent } from "@/lib/content";

export default async function Home() {
  const content = await getContent();

  return (
    <>
      <Hero hero={content.hero} bookingUrl={content.bookingUrl} />
      <About about={content.about} />
      <SectionTransition from="#FAF6F0" to="#2C2C2C" />
      <WellnessTeaser data={content.wellnessTeaser} />
      <SectionTransition from="#2C2C2C" to="#FAF6F0" />
      <InteriorTeaser data={content.interiorTeaser} />
      <SectionTransition from="#FAF6F0" to="#1A1A1A" />
      <Reviews reviews={content.reviews} bookingUrl={content.bookingUrl} />
      <SectionTransition from="#1A1A1A" to="#2D5016" />
      <PrivacyBanner data={content.privacyBanner} />
      <SectionTransition from="#2D5016" to="#FAF6F0" />
      <Pricing pricing={content.pricing} bookingUrl={content.bookingUrl} />
      <SectionTransition from="#FAF6F0" to="#F0E8D8" />
      <BottomCTA
        data={content.bottomCta}
        phone={content.phone}
        phoneHref={content.phoneHref}
        bookingUrl={content.bookingUrl}
      />
    </>
  );
}
