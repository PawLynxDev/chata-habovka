import { Metadata } from "next";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BookingButton from "@/components/ui/BookingButton";
import { MapPin, Phone } from "lucide-react";
import { getContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Okolie & Aktivity - Roháče, Lyžovanie, Turistika",
  description:
    "Aktivity v okolí Chaty za Studeným potokom: Skipark Roháče, turistika, cyklistika, rafting na Dunajci, termálne kúpele a Oravský hrad. Habovka, Západné Tatry.",
  alternates: {
    canonical: "https://chatazastudenympotokom.sk/okolie",
  },
};

export default async function OkoliePage() {
  const content = await getContent();
  const okolie = content.okolie;

  return (
    <main>
      {/* Page Header */}
      <section className="bg-forest text-white pt-32 pb-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="font-serif text-5xl text-center">
              {okolie.headerTitle}
            </h1>
            <p className="text-white/70 text-center mt-4 text-lg">
              {okolie.headerSubtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Atrakcie v okoli */}
      <section className="bg-cream py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-3xl text-charcoal">
              {okolie.heading}
            </h2>
            <p className="text-charcoal-light mt-2">{okolie.description}</p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 mt-10">
            {okolie.attractions.map((item) => (
              <ScrollReveal key={item.id}>
                <div>
                  <div className="relative rounded-xl overflow-hidden">
                    <ImagePlaceholder
                      src={item.image.url}
                      alt={item.image.alt}
                      className="w-full aspect-[4/3] object-cover"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <span className="absolute bottom-2 right-2 bg-forest/90 text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm shadow-sm">
                      <MapPin className="w-3 h-3" />
                      {item.distance} km
                    </span>
                  </div>
                  <h3 className="font-serif text-base font-semibold text-forest mt-2.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-charcoal-light text-sm mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p className="text-charcoal-light mt-12 text-center text-sm">
              {okolie.footnote}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-cream-dark py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl text-charcoal">
              Pripravení na dobrodružstvo?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <BookingButton
                variant="primary"
                size="large"
                href={content.bookingUrl}
              />
              <a
                href={`tel:${content.phoneHref}`}
                className="inline-flex items-center gap-2 text-forest font-semibold hover:text-forest-dark transition-colors"
              >
                <Phone className="w-5 h-5" />
                {content.phone}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
