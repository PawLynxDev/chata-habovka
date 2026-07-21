"use client";

import { useState } from "react";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BookingButton from "@/components/ui/BookingButton";
import Lightbox from "@/components/ui/Lightbox";
import type { GalleryImage, SiteContent } from "@/lib/content-types";

function cumulativeOffsets(lengths: number[]): number[] {
  const result: number[] = [];
  let acc = 0;
  for (const len of lengths) {
    result.push(acc);
    acc += len;
  }
  return result;
}

export default function InterierGallery({
  data,
  bookingUrl,
}: {
  data: SiteContent["interier"];
  bookingUrl: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const groups: GalleryImage[][] = [
    data.living.images,
    data.kitchen.images,
    ...data.bedrooms.map((b) => b.images),
    ...data.bathrooms.map((b) => b.images),
  ];
  const offsets = cumulativeOffsets(groups.map((g) => g.length));
  const allImages = groups.flat().map((img) => ({ src: img.url, alt: img.alt }));

  const livingOffset = offsets[0];
  const kitchenOffset = offsets[1];
  const bedroomOffsets = data.bedrooms.map((_, i) => offsets[2 + i]);
  const bathroomOffsets = data.bathrooms.map(
    (_, i) => offsets[2 + data.bedrooms.length + i]
  );

  function openLightbox(globalIndex: number) {
    setCurrentIndex(globalIndex);
    setIsOpen(true);
  }
  function closeLightbox() {
    setIsOpen(false);
  }
  function goToPrev() {
    setCurrentIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  }
  function goToNext() {
    setCurrentIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  }

  const renderItems = (images: GalleryImage[], offset: number) =>
    images.map((img, i) => (
      <button
        key={img.id}
        type="button"
        onClick={() => openLightbox(offset + i)}
        className="cursor-pointer"
      >
        <ImagePlaceholder
          src={img.url}
          alt={img.alt}
          className="w-full aspect-[4/3] rounded-lg hover:opacity-90 transition"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </button>
    ));

  return (
    <>
      {/* Header */}
      <section className="bg-forest text-white pt-32 pb-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="font-serif text-5xl">{data.headerTitle}</h1>
            <p className="text-white/70 mt-4 text-lg">{data.headerSubtitle}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Obyvacka */}
      <section className="bg-cream py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-3xl text-charcoal">
              {data.living.heading}
            </h2>
            <p className="text-charcoal-light mt-3 max-w-2xl">
              {data.living.description}
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {renderItems(data.living.images, livingOffset)}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Kuchyna */}
      <section className="bg-cream-dark py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-3xl text-charcoal">
              {data.kitchen.heading}
            </h2>
            <p className="text-charcoal-light mt-3 max-w-2xl">
              {data.kitchen.description}
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {renderItems(data.kitchen.images, kitchenOffset)}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Spalne */}
      <section className="bg-cream py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-3xl text-charcoal">
              {data.bedroomsHeading}
            </h2>
            <p className="text-charcoal-light mt-3 max-w-2xl">
              {data.bedroomsDescription}
            </p>
          </ScrollReveal>

          {data.bedrooms.map((room, idx) => (
            <ScrollReveal key={idx}>
              <h3 className="font-serif text-xl text-charcoal mt-10 mb-1">
                {room.heading}
              </h3>
              <p className="text-charcoal-light text-sm mb-4">
                {room.description}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {renderItems(room.images, bedroomOffsets[idx])}
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal>
            <p className="text-charcoal-light text-sm mt-8 italic">
              {data.bedroomsFootnote}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Kupelne */}
      <section className="bg-cream-dark py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-3xl text-charcoal">
              {data.bathroomsHeading}
            </h2>
            <p className="text-charcoal-light mt-3 max-w-2xl">
              {data.bathroomsDescription}
            </p>
          </ScrollReveal>

          {data.bathrooms.map((room, idx) => (
            <ScrollReveal key={idx}>
              <h3 className="font-serif text-xl text-charcoal mt-10 mb-1">
                {room.heading}
              </h3>
              <p className="text-charcoal-light text-sm mb-4">
                {room.description}
              </p>
              <div
                className={`grid gap-4 ${
                  idx === data.bathrooms.length - 1
                    ? "grid-cols-2"
                    : "grid-cols-2 md:grid-cols-3"
                }`}
              >
                {renderItems(room.images, bathroomOffsets[idx])}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-cream py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl text-charcoal">Páčilo sa vám?</h2>
            <p className="text-charcoal-light mt-3 mb-8">
              Rezervujte si termín a užite si pohodlie našej chaty naplno.
            </p>
            <BookingButton variant="primary" size="large" href={bookingUrl} />
          </ScrollReveal>
        </div>
      </section>

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          images={allImages}
          currentIndex={currentIndex}
          onClose={closeLightbox}
          onPrev={goToPrev}
          onNext={goToNext}
        />
      )}
    </>
  );
}
