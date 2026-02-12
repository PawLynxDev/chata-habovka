import type { Metadata } from "next";
import { Bike, Snowflake, Car, Dog } from "lucide-react";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BookingButton from "@/components/ui/BookingButton";

export const metadata: Metadata = {
  title: "Wellness & Záhrada | Chata za Studeným potokom",
  description:
    "Fínska sauna, vírivka pod holým nebom, dažďové sprchy a rozľahlá záhrada s altánkom.",
};

const wellnessImages = [
  { name: "wellness-sauna", alt: "Fínska sauna pre 6 osôb" },
  { name: "wellness-hottub", alt: "Vírivka pod holým nebom s výhľadom na hory" },
  { name: "wellness-shower", alt: "Dažďové sprchy" },
];

const terraceImages = Array.from({ length: 8 }, (_, i) => ({
  name: `terrace-${i + 1}`,
  alt: `Terasa a záhrada - foto ${i + 1}`,
}));

const kidsImages = Array.from({ length: 2 }, (_, i) => ({
  name: `kids-${i + 1}`,
  alt: `Detský kútik - foto ${i + 1}`,
}));

const infoItems = [
  {
    icon: Bike,
    title: "Úloženie bicyklov",
    desc: "Uzamykateľná miestnosť",
  },
  {
    icon: Snowflake,
    title: "Úloženie lyží",
    desc: "Vyhrievaná skiroom",
  },
  {
    icon: Car,
    title: "Parkovanie",
    desc: "6 oplotených miest pri chate",
  },
  {
    icon: Dog,
    title: "Zvieratá",
    desc: "Nie sú povolené",
  },
];

export default function WellnessPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-charcoal text-cream pt-32 pb-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="font-serif text-5xl">Wellness & Záhrada</h1>
            <p className="text-cream/70 mt-4 text-lg">
              Váš súkromný wellness priamo pri chate
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
            <h2 className="font-serif text-3xl mt-2">Váš privátny wellness</h2>
            <p className="text-cream/70 mt-3 max-w-2xl">
              Súkromná sauna pre 6 osôb, vírivka pod holým nebom s výhľadom na
              hory, dva vonkajšie sprchy a ochladzovacia kaďa. Všetko len pre
              vás.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {wellnessImages.map((img, i) => (
              <ScrollReveal key={img.name} delay={(i + 1) as 1 | 2 | 3}>
                <ImagePlaceholder
                  name={img.name}
                  alt={img.alt}
                  className="w-full aspect-[4/3] rounded-xl"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p className="text-cream/50 italic mt-8 text-center text-lg">
              Ideálne na oddych po dni strávenom v horách
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
              Terasa a záhrada
            </h2>
            <p className="text-charcoal-light mt-3 max-w-2xl">
              Rozľahlá terasa s vonkajším sedením, altánok s grilom a
              ohniskom, kotlík na guláš, záhradná hojdačka a stolný futbal.
              Ideálne na grilovanie a večerné posedenia pri ohni.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {terraceImages.map((img, i) => (
              <ScrollReveal key={img.name} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <ImagePlaceholder
                  name={img.name}
                  alt={img.alt}
                  className="w-full aspect-[4/3] rounded-lg"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </ScrollReveal>
            ))}
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
              Detský raj
            </h2>
            <p className="text-charcoal-light mt-3 max-w-2xl">
              Detské ihrisko s hojdačkou a preliezkami, detská herňa s hračkami
              a futbalové ihrisko v blízkosti. Deti sa u nás nudiť nebudú.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 gap-4 mt-8">
            {kidsImages.map((img, i) => (
              <ScrollReveal key={img.name} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <ImagePlaceholder
                  name={img.name}
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
              Praktické informácie
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {infoItems.map((item, i) => (
              <ScrollReveal key={item.title} delay={((i + 1) as 1 | 2 | 3 | 4)}>
                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="flex justify-center mb-4">
                    <item.icon className="w-8 h-8 text-forest" strokeWidth={1.5} />
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
            <BookingButton variant="primary" size="large" />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
