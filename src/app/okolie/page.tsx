import { Metadata } from "next";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BookingButton from "@/components/ui/BookingButton";
import { MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Okolie & Aktivity | Chata za Studeným potokom",
  description:
    "Turistika, cyklistika, lyžovanie a termálne kúpele v okolí našej chaty v Habovke.",
};

const attractions = [
  {
    image: "summer-stream",
    alt: "Studený potok",
    title: "Studený potok",
    subtitle: "Otužovanie a kúpanie priamo pri chate",
    distance: "0,1",
  },
  {
    image: "winter-ski",
    alt: "Skipark Roháče",
    title: "Skipark Roháče – Janovky",
    subtitle: "Zjazdovky pre všetkých",
    distance: "1,2",
  },
  {
    image: "summer-folklore",
    alt: "Podroháčske folklórne slávnosti",
    title: "Podroháčske folklórne slávnosti",
    subtitle: "Tradičné folklórne slávnosti v regióne",
    distance: "1,6",
  },
  {
    image: "summer-hiking",
    alt: "Turistika v Roháčoch",
    title: "Turistika v Roháčoch",
    subtitle: "Sivý vrch, Brestová, Baníkov, Roháčske plesá",
    distance: "2",
  },
  {
    image: "summer-cycling",
    alt: "Cyklistika",
    title: "Cyklistika",
    subtitle: "Horské aj cestné trasy pre každú úroveň",
    distance: "2",
  },
  {
    image: "winter-crosscountry",
    alt: "Bežkovanie",
    title: "Bežkovanie",
    subtitle: "Upravené bežkárske trate v okolí",
    distance: "3",
  },
  {
    image: "summer-sports",
    alt: "Športové aktivity",
    title: "Šport a rekreácia",
    subtitle: "Jazda na koni, fitness, tenis, bazén",
    distance: "3",
  },
  {
    image: "summer-nature",
    alt: "Tarzánia — lanový park",
    title: "Tarzánia – lanový park",
    subtitle: "Adrenalín pre deti aj dospelých",
    distance: "4,6",
  },
  {
    image: "summer-museum",
    alt: "Múzeum oravskej dediny",
    title: "Múzeum oravskej dediny",
    subtitle: "Skanzen v Zuberci",
    distance: "4,6",
  },
  {
    image: "winter-snowboard",
    alt: "Snowboarding",
    title: "Snowboarding",
    subtitle: "Snowpark a freeride možnosti",
    distance: "5",
  },
  {
    image: "winter-hiking",
    alt: "Zimná turistika",
    title: "Zimná turistika",
    subtitle: "Zasnežená krajina Roháčov",
    distance: "5",
  },
  {
    image: "thermal-baths",
    alt: "Termálne kúpele",
    title: "Termálne kúpele",
    subtitle: "Oravice, Bešeňová, Chochołowskie Termy",
    distance: "15",
  },
  {
    image: "summer-rafting",
    alt: "Splav Oravy",
    title: "Splav Oravy",
    subtitle: "Raftovanie a kanoistika na rieke Orava",
    distance: "15",
  },
  {
    image: "summer-lake",
    alt: "Oravská priehrada",
    title: "Oravská priehrada",
    subtitle: "Kúpanie, vodné športy a plavba loďou",
    distance: "20",
  },
  {
    image: "summer-castle",
    alt: "Oravský hrad",
    title: "Oravský hrad",
    subtitle: "Jeden z najkrajších hradov na Slovensku",
    distance: "28",
  },
  {
    image: "zakopane",
    alt: "Zakopane",
    title: "Zakopane, Poľsko",
    subtitle: "Obľúbený poľský Smokovec",
    distance: "45",
  },
];

export default function OkoliePage() {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-forest text-white pt-32 pb-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="font-serif text-5xl text-center">
              Okolie & Aktivity
            </h1>
            <p className="text-white/70 text-center mt-4 text-lg">
              Zážitky v každom ročnom období
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Atrakcie v okoli */}
      <section className="bg-cream py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-3xl text-charcoal">
              Atrakcie v okolí
            </h2>
            <p className="text-charcoal-light mt-2">
              Vzdialenosti sú uvedené vzdušnou čiarou.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 mt-10">
            {attractions.map((item) => (
              <ScrollReveal key={item.image}>
                <div>
                  <div className="relative rounded-xl overflow-hidden">
                    <ImagePlaceholder
                      name={item.image}
                      alt={item.alt}
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
              Reštaurácie a pizzérie do 200 m od chaty. Potraviny 200 m.
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
              <BookingButton variant="primary" size="large" />
              <a
                href="tel:+421948280363"
                className="inline-flex items-center gap-2 text-forest font-semibold hover:text-forest-dark transition-colors"
              >
                <Phone className="w-5 h-5" />
                +421 948 280 363
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
