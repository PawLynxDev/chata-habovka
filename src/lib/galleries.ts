// Popisovače galérií pre admin "Fotky" tab – mapujú výber galérie na čítanie/zápis do SiteContent.
import type { GalleryImage, SiteContent } from "./content-types";

export interface MultiGallery {
  key: string;
  label: string;
  type: "multi";
  get: (c: SiteContent) => GalleryImage[];
  set: (c: SiteContent, images: GalleryImage[]) => SiteContent;
}

export interface SingleGallery {
  key: string;
  label: string;
  type: "single";
  get: (c: SiteContent) => GalleryImage;
  set: (c: SiteContent, image: GalleryImage) => SiteContent;
}

export type GalleryDesc = MultiGallery | SingleGallery;

export const GALLERIES: GalleryDesc[] = [
  {
    key: "hero",
    label: "Úvod – hlavná fotka",
    type: "single",
    get: (c) => c.hero.image,
    set: (c, image) => ({ ...c, hero: { ...c.hero, image } }),
  },
  {
    key: "teaser-living",
    label: "Úvod – náhľad obývačka",
    type: "single",
    get: (c) => c.interiorTeaser.living,
    set: (c, image) => ({
      ...c,
      interiorTeaser: { ...c.interiorTeaser, living: image },
    }),
  },
  {
    key: "teaser-kitchen",
    label: "Úvod – náhľad kuchyňa",
    type: "single",
    get: (c) => c.interiorTeaser.kitchen,
    set: (c, image) => ({
      ...c,
      interiorTeaser: { ...c.interiorTeaser, kitchen: image },
    }),
  },
  {
    key: "teaser-bedroom",
    label: "Úvod – náhľad spálňa",
    type: "single",
    get: (c) => c.interiorTeaser.bedroom,
    set: (c, image) => ({
      ...c,
      interiorTeaser: { ...c.interiorTeaser, bedroom: image },
    }),
  },
  {
    key: "teaser-wellness",
    label: "Úvod – náhľad wellness",
    type: "single",
    get: (c) => c.wellnessTeaser.image,
    set: (c, image) => ({
      ...c,
      wellnessTeaser: { ...c.wellnessTeaser, image },
    }),
  },
  {
    key: "interier-living",
    label: "Interiér – Obývačka",
    type: "multi",
    get: (c) => c.interier.living.images,
    set: (c, images) => ({
      ...c,
      interier: { ...c.interier, living: { ...c.interier.living, images } },
    }),
  },
  {
    key: "interier-kitchen",
    label: "Interiér – Kuchyňa",
    type: "multi",
    get: (c) => c.interier.kitchen.images,
    set: (c, images) => ({
      ...c,
      interier: { ...c.interier, kitchen: { ...c.interier.kitchen, images } },
    }),
  },
  ...[0, 1, 2, 3].map(
    (i): MultiGallery => ({
      key: `interier-bedroom-${i}`,
      label: `Interiér – Spálňa ${i + 1}`,
      type: "multi",
      get: (c) => c.interier.bedrooms[i]?.images ?? [],
      set: (c, images) => ({
        ...c,
        interier: {
          ...c.interier,
          bedrooms: c.interier.bedrooms.map((b, j) =>
            j === i ? { ...b, images } : b
          ),
        },
      }),
    })
  ),
  ...[0, 1, 2].map(
    (i): MultiGallery => ({
      key: `interier-bathroom-${i}`,
      label: `Interiér – Kúpeľňa ${i + 1}`,
      type: "multi",
      get: (c) => c.interier.bathrooms[i]?.images ?? [],
      set: (c, images) => ({
        ...c,
        interier: {
          ...c.interier,
          bathrooms: c.interier.bathrooms.map((b, j) =>
            j === i ? { ...b, images } : b
          ),
        },
      }),
    })
  ),
  {
    key: "wellness-wellness",
    label: "Wellness – Sauna / vírivka",
    type: "multi",
    get: (c) => c.wellness.wellness.images,
    set: (c, images) => ({
      ...c,
      wellness: {
        ...c.wellness,
        wellness: { ...c.wellness.wellness, images },
      },
    }),
  },
  {
    key: "wellness-terrace",
    label: "Wellness – Terasa a záhrada",
    type: "multi",
    get: (c) => c.wellness.terrace.images,
    set: (c, images) => ({
      ...c,
      wellness: { ...c.wellness, terrace: { ...c.wellness.terrace, images } },
    }),
  },
  {
    key: "wellness-kids",
    label: "Wellness – Detský kútik",
    type: "multi",
    get: (c) => c.wellness.kids.images,
    set: (c, images) => ({
      ...c,
      wellness: { ...c.wellness, kids: { ...c.wellness.kids, images } },
    }),
  },
];
