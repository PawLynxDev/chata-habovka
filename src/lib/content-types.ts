// Centrálny dátový model pre celý web.
// Tento JSON sa ukladá ako jeden dokument vo Vercel Blob (content/content.json).
// Verejné stránky ho čítajú cez lib/content.ts getContent(); admin ho upravuje cez /api/content.

export const CONTENT_SCHEMA_VERSION = 1;

/** Cesta dokumentu obsahu vo Vercel Blob. */
export const CONTENT_PATHNAME = "content/content.json";

/** Jedna fotka v galérii. url je buď "/images/..." (pôvodné seed fotky) alebo absolútna Blob URL (nahrané). */
export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
}

export interface PricingSeason {
  id: string;
  name: string;
  dates: string;
  price: number;
  minNights: number;
  highlight?: boolean;
}

export interface ServicePrice {
  id: string;
  name: string;
  price: number;
  unit: string; // napr. "/ pobyt"
  iconKey: string; // kľúč do ICONS (lib/icons.tsx)
}

export interface Amenity {
  id: string;
  iconKey: string;
  label: string;
  description: string;
}

/** Položka "Praktické informácie" (wellness aj kontakt používajú podobné). */
export interface InfoItem {
  id: string;
  iconKey: string;
  title: string;
  desc: string;
}

export interface PracticalInfoItem {
  id: string;
  iconKey: string;
  label: string;
  value: string;
}

export interface Attraction {
  id: string;
  image: GalleryImage;
  title: string;
  subtitle: string;
  distance: string; // necháme string – pôvodné dáta používajú desatinnú čiarku ("1,2")
}

/** Sekcia s nadpisom, popisom a galériou fotiek (obývačka, kuchyňa, jedna spálňa, terasa…). */
export interface GallerySection {
  heading: string;
  description: string;
  images: GalleryImage[];
}

export interface SiteContent {
  schemaVersion: number;
  updatedAt: string; // ISO timestamp, nastaví sa pri každom uložení
  siteEnabled: boolean; // VYPÍNAČ: true = web beží, false = čierna "Stránka nie je k dispozícii"

  // Globálne kontaktné/odkazové údaje (používané na viacerých miestach)
  bookingUrl: string;
  phone: string; // zobrazovaný tvar "+421 948 280 363"
  phoneHref: string; // pre tel: odkaz "+421948280363"

  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    image: GalleryImage;
  };

  about: {
    heading: string;
    text: string;
    amenities: Amenity[];
  };

  interiorTeaser: {
    heading: string;
    text: string;
    living: GalleryImage;
    kitchen: GalleryImage;
    bedroom: GalleryImage;
  };

  wellnessTeaser: {
    eyebrow: string;
    heading: string;
    text: string;
    image: GalleryImage;
  };

  reviews: {
    eyebrow: string;
    heading: string;
    quote: string;
  };

  privacyBanner: {
    heading: string;
    text: string;
  };

  bottomCta: {
    heading: string;
    text: string;
  };

  pricing: {
    heading: string;
    note: string;
    seasons: PricingSeason[];
    servicesHeading: string;
    services: ServicePrice[];
    combined: ServicePrice;
    footnote: string; // "Aktuálne ceny a dostupnosť nájdete na…"
  };

  interier: {
    headerTitle: string;
    headerSubtitle: string;
    living: GallerySection;
    kitchen: GallerySection;
    bedroomsHeading: string;
    bedroomsDescription: string;
    bedrooms: GallerySection[]; // 4 spálne
    bedroomsFootnote: string;
    bathroomsHeading: string;
    bathroomsDescription: string;
    bathrooms: GallerySection[]; // 3 (2 kúpeľne + WC)
  };

  wellness: {
    headerTitle: string;
    headerSubtitle: string;
    wellness: GallerySection;
    wellnessFootnote: string;
    terrace: GallerySection;
    kids: GallerySection;
    infoHeading: string;
    infoItems: InfoItem[];
  };

  okolie: {
    headerTitle: string;
    headerSubtitle: string;
    heading: string;
    description: string;
    attractions: Attraction[];
    footnote: string;
  };

  contact: {
    headerTitle: string;
    headerSubtitle: string;
    reservationHeading: string;
    reservationText: string;
    practicalInfo: PracticalInfoItem[];
    mapHeading: string;
    mapEmbedUrl: string;
    address: string;
    gps: string;
    travelNote: string;
  };
}

/** Kľúče sekcií s galériami – používa admin "Fotky" tab na výber, ktorú galériu upravuje. */
export type GalleryKey =
  | "hero"
  | "interiorTeaser.living"
  | "interiorTeaser.kitchen"
  | "interiorTeaser.bedroom"
  | "wellnessTeaser"
  | "interier.living"
  | "interier.kitchen"
  | "interier.bedrooms.0"
  | "interier.bedrooms.1"
  | "interier.bedrooms.2"
  | "interier.bedrooms.3"
  | "interier.bathrooms.0"
  | "interier.bathrooms.1"
  | "interier.bathrooms.2"
  | "wellness.wellness"
  | "wellness.terrace"
  | "wellness.kids"
  | "okolie.attractions";
