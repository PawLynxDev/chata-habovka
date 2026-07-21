import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SiteDisabled from "@/components/SiteDisabled";
import { getContent } from "@/lib/content";

// Verejné stránky sa renderujú dynamicky, aby vždy zobrazovali aktuálny obsah z Blob
// (a aby vypínač webu zabral okamžite).
export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent();
  if (!content.siteEnabled) {
    return {
      title: "Stránka nie je k dispozícii",
      robots: { index: false, follow: false },
    };
  }
  return {
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = await getContent();

  // Vypínač webu: keď je vypnutý, zobraz iba čiernu stránku (žiadna navigácia, JSON-LD, obsah).
  if (!content.siteEnabled) {
    return <SiteDisabled />;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Chata za Studeným potokom",
    description:
      "Luxusná horská chata v Habovke s privátnym wellness, fínskou saunou a vírivkou. Ubytovanie až pre 13 hostí s exkluzívnym súkromím. Roháče, Západné Tatry, Orava.",
    image:
      "https://chatazastudenympotokom.sk/images/fotoOfHouse/upscalemedia-transformed (1).webp",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pod Jamami 514/37",
      addressLocality: "Habovka",
      postalCode: "027 32",
      addressRegion: "Žilinský kraj",
      addressCountry: "SK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.274138,
      longitude: 19.602702,
    },
    telephone: content.phoneHref,
    url: "https://chatazastudenympotokom.sk",
    sameAs: [content.bookingUrl],
    checkinTime: "15:00",
    checkoutTime: "10:00",
    numberOfRooms: 4,
    petsAllowed: false,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Fínska sauna", value: true },
      { "@type": "LocationFeatureSpecification", name: "Vírivka", value: true },
      { "@type": "LocationFeatureSpecification", name: "Krb", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wi-Fi zadarmo", value: true },
      { "@type": "LocationFeatureSpecification", name: "Parkovanie", value: true },
      { "@type": "LocationFeatureSpecification", name: "Klimatizácia", value: true },
      { "@type": "LocationFeatureSpecification", name: "Podlahové kúrenie", value: true },
      { "@type": "LocationFeatureSpecification", name: "Detské ihrisko", value: true },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      ratingCount: "56",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main>{children}</main>
      <Footer />
      <Analytics />
    </>
  );
}
