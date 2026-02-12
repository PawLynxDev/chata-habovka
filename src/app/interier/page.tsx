"use client";

import { useState } from "react";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BookingButton from "@/components/ui/BookingButton";
import Lightbox from "@/components/ui/Lightbox";
import imageMap from "@/lib/imageMap";

const livingImages = Array.from({ length: 8 }, (_, i) => ({
  name: `living-${i + 1}`,
  src: imageMap[`living-${i + 1}`] || `living-${i + 1}`,
  alt: `Obývačka s krbom - foto ${i + 1}`,
}));

const kitchenImages = Array.from({ length: 3 }, (_, i) => ({
  name: `kitchen-${i + 1}`,
  src: imageMap[`kitchen-${i + 1}`] || `kitchen-${i + 1}`,
  alt: `Plne vybavená kuchyňa - foto ${i + 1}`,
}));

// Bedroom sub-sections
const bedroom1Images = [1, 2, 3].map((n) => ({
  name: `bedroom-${n}`,
  src: imageMap[`bedroom-${n}`] || `bedroom-${n}`,
  alt: `Spálňa 1 - foto ${n}`,
}));

const bedroom2Images = [4, 5, 6].map((n) => ({
  name: `bedroom-${n}`,
  src: imageMap[`bedroom-${n}`] || `bedroom-${n}`,
  alt: `Spálňa 2 - foto ${n - 3}`,
}));

const bedroom3Images = [7, 8, 9].map((n) => ({
  name: `bedroom-${n}`,
  src: imageMap[`bedroom-${n}`] || `bedroom-${n}`,
  alt: `Spálňa 3 - foto ${n - 6}`,
}));

const bedroom4Images = [10, 11, 12].map((n) => ({
  name: `bedroom-${n}`,
  src: imageMap[`bedroom-${n}`] || `bedroom-${n}`,
  alt: `Spálňa 4 - foto ${n - 9}`,
}));

// Bathroom sub-sections
const bathroom1Images = [1, 2, 3].map((n) => ({
  name: `bathroom-${n}`,
  src: imageMap[`bathroom-${n}`] || `bathroom-${n}`,
  alt: `Kúpeľňa 1 (poschodie) - foto ${n}`,
}));

const bathroom2Images = [4, 5, 6].map((n) => ({
  name: `bathroom-${n}`,
  src: imageMap[`bathroom-${n}`] || `bathroom-${n}`,
  alt: `Kúpeľňa 2 (prízemie) - foto ${n - 3}`,
}));

const bathroom3Images = [7, 8].map((n) => ({
  name: `bathroom-${n}`,
  src: imageMap[`bathroom-${n}`] || `bathroom-${n}`,
  alt: `Samostatné WC (prízemie) - foto ${n - 6}`,
}));

const allImages = [
  ...livingImages,
  ...kitchenImages,
  ...bedroom1Images,
  ...bedroom2Images,
  ...bedroom3Images,
  ...bedroom4Images,
  ...bathroom1Images,
  ...bathroom2Images,
  ...bathroom3Images,
];

export default function InterierPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Offsets for calculating global index per section
  const livingOffset = 0;
  const kitchenOffset = livingImages.length;
  const bedroom1Offset = kitchenOffset + kitchenImages.length;
  const bedroom2Offset = bedroom1Offset + bedroom1Images.length;
  const bedroom3Offset = bedroom2Offset + bedroom2Images.length;
  const bedroom4Offset = bedroom3Offset + bedroom3Images.length;
  const bathroom1Offset = bedroom4Offset + bedroom4Images.length;
  const bathroom2Offset = bathroom1Offset + bathroom1Images.length;
  const bathroom3Offset = bathroom2Offset + bathroom2Images.length;

  return (
    <>
      {/* Header */}
      <section className="bg-forest text-white pt-32 pb-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="font-serif text-5xl">Interiér chaty</h1>
            <p className="text-white/70 mt-4 text-lg">
              Každý detail navrhovaný pre váš komfort
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Obyvacka */}
      <section className="bg-cream py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-3xl text-charcoal">
              Obývačka s krbom
            </h2>
            <p className="text-charcoal-light mt-3 max-w-2xl">
              Priestranná obývačka s krbom, pohodlnými sedačkami a výhľadom na
              hory. Ideálne miesto na spoločné večery.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {livingImages.map((img, i) => (
                <button
                  key={img.name}
                  type="button"
                  onClick={() => openLightbox(livingOffset + i)}
                  className="cursor-pointer"
                >
                  <ImagePlaceholder
                    name={img.name}
                    alt={img.alt}
                    className="w-full aspect-[4/3] rounded-lg hover:opacity-90 transition"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Kuchyna */}
      <section className="bg-cream-dark py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-3xl text-charcoal">
              Plne vybavená kuchyňa
            </h2>
            <p className="text-charcoal-light mt-3 max-w-2xl">
              Moderná kuchyňa so všetkým čo potrebujete — umývačka riadu,
              mikrovlnka, trouba, kávovar.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {kitchenImages.map((img, i) => (
                <button
                  key={img.name}
                  type="button"
                  onClick={() => openLightbox(kitchenOffset + i)}
                  className="cursor-pointer"
                >
                  <ImagePlaceholder
                    name={img.name}
                    alt={img.alt}
                    className="w-full aspect-[4/3] rounded-lg hover:opacity-90 transition"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Spalne */}
      <section className="bg-cream py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-3xl text-charcoal">Spálne</h2>
            <p className="text-charcoal-light mt-3 max-w-2xl">
              4 pohodlné spálne s kvalitnými matracmi. Kapacita 11 lôžok + 2 prístelky.
            </p>
          </ScrollReveal>

          {/* Spalna 1 */}
          <ScrollReveal>
            <h3 className="font-serif text-xl text-charcoal mt-10 mb-1">
              Spálňa 1
            </h3>
            <p className="text-charcoal-light text-sm mb-4">
              2-lôžková izba (dve single postele)
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {bedroom1Images.map((img, i) => (
                <button
                  key={img.name}
                  type="button"
                  onClick={() => openLightbox(bedroom1Offset + i)}
                  className="cursor-pointer"
                >
                  <ImagePlaceholder
                    name={img.name}
                    alt={img.alt}
                    className="w-full aspect-[4/3] rounded-lg hover:opacity-90 transition"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Spalna 2 */}
          <ScrollReveal>
            <h3 className="font-serif text-xl text-charcoal mt-10 mb-1">
              Spálňa 2
            </h3>
            <p className="text-charcoal-light text-sm mb-4">
              3-lôžková izba (manželská posteľ + single)
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {bedroom2Images.map((img, i) => (
                <button
                  key={img.name}
                  type="button"
                  onClick={() => openLightbox(bedroom2Offset + i)}
                  className="cursor-pointer"
                >
                  <ImagePlaceholder
                    name={img.name}
                    alt={img.alt}
                    className="w-full aspect-[4/3] rounded-lg hover:opacity-90 transition"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Spalna 3 */}
          <ScrollReveal>
            <h3 className="font-serif text-xl text-charcoal mt-10 mb-1">
              Spálňa 3
            </h3>
            <p className="text-charcoal-light text-sm mb-4">
              3-lôžková izba (manželská posteľ + single + rozkladacie kreslo)
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {bedroom3Images.map((img, i) => (
                <button
                  key={img.name}
                  type="button"
                  onClick={() => openLightbox(bedroom3Offset + i)}
                  className="cursor-pointer"
                >
                  <ImagePlaceholder
                    name={img.name}
                    alt={img.alt}
                    className="w-full aspect-[4/3] rounded-lg hover:opacity-90 transition"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Spalna 4 */}
          <ScrollReveal>
            <h3 className="font-serif text-xl text-charcoal mt-10 mb-1">
              Spálňa 4
            </h3>
            <p className="text-charcoal-light text-sm mb-4">
              3-lôžková izba (manželská posteľ + single + rozkladacie kreslo)
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {bedroom4Images.map((img, i) => (
                <button
                  key={img.name}
                  type="button"
                  onClick={() => openLightbox(bedroom4Offset + i)}
                  className="cursor-pointer"
                >
                  <ImagePlaceholder
                    name={img.name}
                    alt={img.alt}
                    className="w-full aspect-[4/3] rounded-lg hover:opacity-90 transition"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </button>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-charcoal-light text-sm mt-8 italic">
              Každá izba má TV. Detská postieľka k dispozícii zdarma na vyžiadanie.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Kupelne */}
      <section className="bg-cream-dark py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-3xl text-charcoal">Kúpeľne</h2>
            <p className="text-charcoal-light mt-3 max-w-2xl">
              2 kúpeľne a samostatné WC s podlahovým kúrením.
            </p>
          </ScrollReveal>

          {/* Kupelna 1 */}
          <ScrollReveal>
            <h3 className="font-serif text-xl text-charcoal mt-10 mb-1">
              Kúpeľňa 1 (poschodie)
            </h3>
            <p className="text-charcoal-light text-sm mb-4">
              sprchovací kút, WC, umývadlo, fén, sušiak, uteráky
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {bathroom1Images.map((img, i) => (
                <button
                  key={img.name}
                  type="button"
                  onClick={() => openLightbox(bathroom1Offset + i)}
                  className="cursor-pointer"
                >
                  <ImagePlaceholder
                    name={img.name}
                    alt={img.alt}
                    className="w-full aspect-[4/3] rounded-lg hover:opacity-90 transition"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Kupelna 2 */}
          <ScrollReveal>
            <h3 className="font-serif text-xl text-charcoal mt-10 mb-1">
              Kúpeľňa 2 (prízemie)
            </h3>
            <p className="text-charcoal-light text-sm mb-4">
              vaňa, sprcha, umývadlo, uteráky
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {bathroom2Images.map((img, i) => (
                <button
                  key={img.name}
                  type="button"
                  onClick={() => openLightbox(bathroom2Offset + i)}
                  className="cursor-pointer"
                >
                  <ImagePlaceholder
                    name={img.name}
                    alt={img.alt}
                    className="w-full aspect-[4/3] rounded-lg hover:opacity-90 transition"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Samostatne WC */}
          <ScrollReveal>
            <h3 className="font-serif text-xl text-charcoal mt-10 mb-1">
              Samostatné WC (prízemie)
            </h3>
            <p className="text-charcoal-light text-sm mb-4">
              umývadlo, WC, uteráky
            </p>
            <div className="grid grid-cols-2 gap-4">
              {bathroom3Images.map((img, i) => (
                <button
                  key={img.name}
                  type="button"
                  onClick={() => openLightbox(bathroom3Offset + i)}
                  className="cursor-pointer"
                >
                  <ImagePlaceholder
                    name={img.name}
                    alt={img.alt}
                    className="w-full aspect-[4/3] rounded-lg hover:opacity-90 transition"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-cream py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl text-charcoal">
              Páčilo sa vám?
            </h2>
            <p className="text-charcoal-light mt-3 mb-8">
              Rezervujte si termín a užite si pohodlie našej chaty naplno.
            </p>
            <BookingButton variant="primary" size="large" />
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
