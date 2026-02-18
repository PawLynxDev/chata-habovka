import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chatazastudenympotokom.sk"),
  title: {
    default:
      "Chata za Studeným potokom | Prémiové ubytovanie Habovka, Západné Tatry",
    template: "%s | Chata za Studeným potokom",
  },
  description:
    "Luxusná horská chata v Habovke s privátnym wellness, fínskou saunou a vírivkou. Ubytovanie až pre 13 hostí s exkluzívnym súkromím. Roháče, Západné Tatry, Orava.",
  keywords: [
    "chata Habovka",
    "chata za Studeným potokom",
    "ubytovanie Habovka",
    "prenájom chaty Habovka",
    "chata Roháče",
    "chata Západné Tatry",
    "ubytovanie Orava",
    "chata s wellness",
    "chata so saunou",
    "chata s vírivkou",
    "horská chata prenájom",
    "luxusná chata Slovensko",
    "dovolenka Habovka",
    "ubytovanie Roháče",
    "chata pre rodiny",
    "privátne ubytovanie hory",
    "chata Orava",
    "wellness chata",
    "sauna vírivka chata",
    "Skipark Roháče ubytovanie",
  ],
  alternates: {
    canonical: "https://chatazastudenympotokom.sk",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Chata za Studeným potokom | Prémiové ubytovanie Habovka",
    description:
      "Luxusná horská chata v Habovke s privátnym wellness, fínskou saunou a vírivkou. Ubytovanie až pre 13 hostí. Roháče, Západné Tatry.",
    type: "website",
    locale: "sk_SK",
    url: "https://chatazastudenympotokom.sk",
    siteName: "Chata za Studeným potokom",
    images: [
      {
        url: "/images/fotoOfHouse/upscalemedia-transformed (1).webp",
        width: 1200,
        height: 630,
        alt: "Chata za Studeným potokom - luxusná horská chata v Habovke",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chata za Studeným potokom | Prémiové ubytovanie Habovka",
    description:
      "Luxusná horská chata v Habovke s privátnym wellness, saunou a vírivkou. Až 13 hostí. Roháče, Západné Tatry.",
    images: ["/images/fotoOfHouse/upscalemedia-transformed (1).webp"],
  },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "Chata za Studeným potokom",
              description:
                "Luxusná horská chata v Habovke s privátnym wellness, fínskou saunou a vírivkou. Ubytovanie až pre 13 hostí s exkluzívnym súkromím. Roháče, Západné Tatry, Orava.",
              image: "https://chatazastudenympotokom.sk/images/fotoOfHouse/upscalemedia-transformed (1).webp",
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
              telephone: "+421948280363",
              url: "https://chatazastudenympotokom.sk",
              sameAs: [
                "https://www.megaubytovanie.sk/chata-za-studenym-potokom",
              ],
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
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
