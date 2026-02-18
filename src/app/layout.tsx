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
  title: {
    default: "Chata za Studeným potokom | Prémiové ubytovanie Habovka, Orava",
    template: "%s | Chata za Studeným potokom",
  },
  description:
    "Luxusná horská chata v Habovke s wellness, saunou a vírivkou. Súkromie pre jednu skupinu hostí. Západné Tatry, Roháče.",
  keywords: [
    "chata",
    "Habovka",
    "prenájom",
    "wellness",
    "sauna",
    "vírivka",
    "Roháče",
    "Západné Tatry",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Chata za Studeným potokom | Prémiové ubytovanie Habovka, Orava",
    description:
      "Luxusná horská chata v Habovke s wellness, saunou a vírivkou.",
    type: "website",
    locale: "sk_SK",
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
                "Luxusná horská chata v Habovke s wellness, saunou a vírivkou.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Pod Jamami 514/37",
                addressLocality: "Habovka",
                postalCode: "027 32",
                addressCountry: "SK",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 49.274138,
                longitude: 19.602702,
              },
              telephone: "+421 948 280 363",
              url: "https://www.megaubytovanie.sk/chata-za-studenym-potokom",
              amenityFeature: [
                { "@type": "LocationFeatureSpecification", name: "Sauna" },
                { "@type": "LocationFeatureSpecification", name: "Hot tub" },
                { "@type": "LocationFeatureSpecification", name: "Fireplace" },
                { "@type": "LocationFeatureSpecification", name: "Free WiFi" },
                { "@type": "LocationFeatureSpecification", name: "Parking" },
              ],
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
