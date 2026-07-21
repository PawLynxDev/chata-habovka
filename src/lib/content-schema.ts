// Zod schéma pre validáciu celého SiteContent pri ukladaní (PUT /api/content).
// Chráni dokument, od ktorého závisí celý verejný web, pred poškodením.
import { z } from "zod";

const galleryImage = z.object({
  id: z.string().min(1),
  url: z.string().min(1),
  alt: z.string(),
});

const gallerySection = z.object({
  heading: z.string(),
  description: z.string(),
  images: z.array(galleryImage),
});

const pricingSeason = z.object({
  id: z.string().min(1),
  name: z.string(),
  dates: z.string(),
  price: z.number(),
  minNights: z.number(),
  highlight: z.boolean().optional(),
});

const servicePrice = z.object({
  id: z.string().min(1),
  name: z.string(),
  price: z.number(),
  unit: z.string(),
  iconKey: z.string(),
});

const amenity = z.object({
  id: z.string().min(1),
  iconKey: z.string(),
  label: z.string(),
  description: z.string(),
});

const infoItem = z.object({
  id: z.string().min(1),
  iconKey: z.string(),
  title: z.string(),
  desc: z.string(),
});

const practicalInfoItem = z.object({
  id: z.string().min(1),
  iconKey: z.string(),
  label: z.string(),
  value: z.string(),
});

const attraction = z.object({
  id: z.string().min(1),
  image: galleryImage,
  title: z.string(),
  subtitle: z.string(),
  distance: z.string(),
});

export const siteContentSchema = z.object({
  schemaVersion: z.number(),
  updatedAt: z.string(),
  siteEnabled: z.boolean(),

  bookingUrl: z.string(),
  phone: z.string(),
  phoneHref: z.string(),

  hero: z.object({
    eyebrow: z.string(),
    title: z.string(),
    subtitle: z.string(),
    image: galleryImage,
  }),

  about: z.object({
    heading: z.string(),
    text: z.string(),
    amenities: z.array(amenity),
  }),

  interiorTeaser: z.object({
    heading: z.string(),
    text: z.string(),
    living: galleryImage,
    kitchen: galleryImage,
    bedroom: galleryImage,
  }),

  wellnessTeaser: z.object({
    eyebrow: z.string(),
    heading: z.string(),
    text: z.string(),
    image: galleryImage,
  }),

  reviews: z.object({
    eyebrow: z.string(),
    heading: z.string(),
    quote: z.string(),
  }),

  privacyBanner: z.object({
    heading: z.string(),
    text: z.string(),
  }),

  bottomCta: z.object({
    heading: z.string(),
    text: z.string(),
  }),

  pricing: z.object({
    heading: z.string(),
    note: z.string(),
    seasons: z.array(pricingSeason),
    servicesHeading: z.string(),
    services: z.array(servicePrice),
    combined: servicePrice,
    footnote: z.string(),
  }),

  interier: z.object({
    headerTitle: z.string(),
    headerSubtitle: z.string(),
    living: gallerySection,
    kitchen: gallerySection,
    bedroomsHeading: z.string(),
    bedroomsDescription: z.string(),
    bedrooms: z.array(gallerySection),
    bedroomsFootnote: z.string(),
    bathroomsHeading: z.string(),
    bathroomsDescription: z.string(),
    bathrooms: z.array(gallerySection),
  }),

  wellness: z.object({
    headerTitle: z.string(),
    headerSubtitle: z.string(),
    wellness: gallerySection,
    wellnessFootnote: z.string(),
    terrace: gallerySection,
    kids: gallerySection,
    infoHeading: z.string(),
    infoItems: z.array(infoItem),
  }),

  okolie: z.object({
    headerTitle: z.string(),
    headerSubtitle: z.string(),
    heading: z.string(),
    description: z.string(),
    attractions: z.array(attraction),
    footnote: z.string(),
  }),

  contact: z.object({
    headerTitle: z.string(),
    headerSubtitle: z.string(),
    reservationHeading: z.string(),
    reservationText: z.string(),
    practicalInfo: z.array(practicalInfoItem),
    mapHeading: z.string(),
    mapEmbedUrl: z.string(),
    address: z.string(),
    gps: z.string(),
    travelNote: z.string(),
  }),
});
