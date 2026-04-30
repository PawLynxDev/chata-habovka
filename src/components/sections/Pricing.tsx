import { Euro, Flame, Waves, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const seasons = [
  {
    name: "Zimná sezóna",
    dates: "2. 1. – 31. 3.",
    price: 250,
    minNights: 3,
  },
  {
    name: "Letná mimosezóna",
    dates: "1. 4. – 30. 6.",
    price: 250,
    minNights: 2,
  },
  {
    name: "Veľkonočný pobyt",
    dates: "3. 4. – 6. 4.",
    price: 350,
    minNights: 3,
    highlight: true,
  },
  {
    name: "Letná sezóna",
    dates: "1. 7. – 31. 8.",
    price: 250,
    minNights: 3,
  },
  {
    name: "Zimná mimosezóna",
    dates: "1. 9. – 22. 12.",
    price: 250,
    minNights: 2,
  },
  {
    name: "Vianočný pobyt",
    dates: "23. 12. – 28. 12.",
    price: 350,
    minNights: 3,
    highlight: true,
  },
  {
    name: "Silvester",
    dates: "29. 12. – 1. 1.",
    price: 450,
    minNights: 3,
    highlight: true,
  },
];

export default function Pricing() {
  return (
    <section className="bg-cream py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center bg-forest/10 p-3 rounded-full mb-4">
              <Euro size={32} className="text-forest" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">
              Cenník
            </h2>
            <p className="text-charcoal-light mt-3 text-lg">
              Cena za celý objekt / noc &middot; min. 1 osoba &middot; min. 2–3 noci podľa sezóny
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-3">
          {seasons.map((s, i) => (
            <ScrollReveal key={s.name + s.dates}>
              <div
                className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 px-6 py-4 rounded-2xl transition ${
                  s.highlight
                    ? "bg-forest text-white"
                    : "bg-white border border-cream-dark"
                }`}
              >
                <div className="flex-1 min-w-0">
                  <h3
                    className={`font-serif text-xl md:text-2xl ${
                      s.highlight ? "text-white" : "text-charcoal"
                    }`}
                  >
                    {s.name}
                  </h3>
                  <span
                    className={`text-sm ${
                      s.highlight ? "text-white/70" : "text-charcoal-light"
                    }`}
                  >
                    {s.dates}
                  </span>
                </div>

                <div className="flex items-baseline gap-4 sm:text-right">
                  <span
                    className={`text-2xl md:text-3xl font-semibold ${
                      s.highlight ? "text-gold-light" : "text-forest"
                    }`}
                  >
                    {s.price}&nbsp;&euro;
                  </span>
                  <span
                    className={`text-sm whitespace-nowrap ${
                      s.highlight ? "text-white/70" : "text-charcoal-light"
                    }`}
                  >
                    min. {s.minNights} noci
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Doplatok za služby */}
        <ScrollReveal>
          <div className="mt-16 text-center">
            <h3 className="font-serif text-3xl md:text-4xl text-charcoal mb-10">
              Doplatok za služby
            </h3>

            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-white border border-cream-dark rounded-2xl p-8 text-center">
                <div className="inline-flex items-center justify-center bg-gold/10 p-3 rounded-full mb-4">
                  <Flame size={32} className="text-gold" />
                </div>
                <h4 className="font-serif text-2xl text-charcoal">Sauna</h4>
                <p className="text-forest text-3xl font-semibold mt-2">
                  80&nbsp;&euro;
                  <span className="text-charcoal-light text-base font-normal">
                    {" "}
                    / pobyt
                  </span>
                </p>
              </div>

              <div className="bg-white border border-cream-dark rounded-2xl p-8 text-center">
                <div className="inline-flex items-center justify-center bg-gold/10 p-3 rounded-full mb-4">
                  <Waves size={32} className="text-gold" />
                </div>
                <h4 className="font-serif text-2xl text-charcoal">
                  Vírivka / Jacuzzi
                </h4>
                <p className="text-forest text-3xl font-semibold mt-2">
                  80&nbsp;&euro;
                  <span className="text-charcoal-light text-base font-normal">
                    {" "}
                    / pobyt
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-6 bg-forest rounded-2xl p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3">
                <Sparkles size={24} className="text-gold-light" />
                <span className="text-white font-serif text-xl">
                  Sauna + Vírivka spolu
                </span>
                <Sparkles size={24} className="text-gold-light" />
              </div>
              <p className="text-gold-light text-3xl font-semibold mt-2">
                150&nbsp;&euro;
                <span className="text-white/70 text-base font-normal">
                  {" "}
                  / pobyt
                </span>
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-center text-charcoal-light mt-10 text-sm">
            Aktuálne ceny a dostupnosť nájdete na{" "}
            <a
              href="https://www.megaubytovanie.sk/chata-za-studenym-potokom"
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest font-semibold underline underline-offset-2 hover:text-forest-light transition"
            >
              megaubytovanie.sk
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
