import type { Metadata } from "next";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BookingButton from "@/components/ui/BookingButton";
import { getContent } from "@/lib/content";
import { DynamicIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Wellness & Záhrada - Sauna, Vírivka, Terasa",
  description:
    "Privátny wellness v Chate za Studeným potokom: fínska sauna pre 6 osôb, vírivka pod holým nebom s výhľadom na hory, dažďové sprchy, rozľahlá terasa a detské ihrisko v Habovke.",
  alternates: {
    canonical: "https://chatazastudenympotokom.sk/wellness",
  },
};

export default async function WellnessPage() {
  const content = await getContent();
  const wellness = content.wellness;

  return (
    <>
      {/* Header */}
      <section className="bg-charcoal text-cream pt-32 pb-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="font-serif text-5xl">{wellness.headerTitle}</h1>
            <p className="text-cream/70 mt-4 text-lg">
              {wellness.headerSubtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Sauna, virivka, sprchy */}
      <section className="bg-charcoal-dark text-cream py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="tracking-widest uppercase text-gold text-sm">
              WELLNESS
            </p>
            <h2 className="font-serif text-3xl mt-2">
              {wellness.wellness.heading}
            </h2>
            <p className="text-cream/70 mt-3 max-w-2xl">
              {wellness.wellness.description}
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {wellness.wellness.images.map((img, i) => (
              <ScrollReveal key={img.id} delay={(i + 1) as 1 | 2 | 3}>
                <ImagePlaceholder
                  src={img.url}
                  alt={img.alt}
                  className="w-full aspect-[4/3] rounded-xl"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p className="text-cream/50 italic mt-8 text-center text-lg">
              {wellness.wellnessFootnote}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Terasa a zahrada */}
      <section className="bg-cream py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="tracking-widest uppercase text-forest text-sm">
              EXTERIÉR
            </p>
            <h2 className="font-serif text-3xl text-charcoal mt-2">
              {wellness.terrace.heading}
            </h2>
            <p className="text-charcoal-light mt-3 max-w-2xl">
              {wellness.terrace.description}
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {wellness.terrace.images.map((img, i) => {
              const isWide = i === 0 || i >= wellness.terrace.images.length - 2;
              return (
                <ScrollReveal
                  key={img.id}
                  delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
                  className={isWide ? "col-span-2" : ""}
                >
                  <ImagePlaceholder
                    src={img.url}
                    alt={img.alt}
                    className={`w-full rounded-lg ${
                      isWide ? "aspect-[16/9]" : "aspect-[4/3]"
                    }`}
                    sizes={
                      isWide
                        ? "(max-width: 768px) 100vw, 50vw"
                        : "(max-width: 768px) 50vw, 25vw"
                    }
                  />
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detsky kutik */}
      <section className="bg-cream-dark py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="tracking-widest uppercase text-wood text-sm">
              PRE DETI
            </p>
            <h2 className="font-serif text-3xl text-charcoal mt-2">
              {wellness.kids.heading}
            </h2>
            <p className="text-charcoal-light mt-3 max-w-2xl">
              {wellness.kids.description}
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 gap-4 mt-8">
            {wellness.kids.images.map((img, i) => (
              <ScrollReveal key={img.id} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <ImagePlaceholder
                  src={img.url}
                  alt={img.alt}
                  className="w-full aspect-[4/3] rounded-lg"
                  sizes="50vw"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Prakticke info */}
      <section className="bg-cream py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-3xl text-charcoal text-center">
              {wellness.infoHeading}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {wellness.infoItems.map((item, i) => (
              <ScrollReveal key={item.id} delay={((i + 1) as 1 | 2 | 3 | 4)}>
                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="flex justify-center mb-4">
                    <DynamicIcon
                      iconKey={item.iconKey}
                      className="w-8 h-8 text-forest"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-serif text-lg text-charcoal">
                    {item.title}
                  </h3>
                  <p className="text-charcoal-light text-sm mt-1">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-cream py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl text-charcoal">
              Pripravení na oddych?
            </h2>
            <p className="text-charcoal-light mt-3 mb-8">
              Rezervujte si termín a užite si wellness priamo pri chate.
            </p>
            <BookingButton
              variant="primary"
              size="large"
              href={content.bookingUrl}
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
