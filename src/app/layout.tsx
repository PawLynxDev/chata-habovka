import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
