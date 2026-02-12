import {
  BedDouble,
  DoorOpen,
  Bath,
  Wifi,
  Flame,
  Heater,
  Snowflake,
  Car,
  Baby,
  Ticket,
} from "lucide-react";
import IconCard from "@/components/ui/IconCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

const amenities = [
  {
    icon: <BedDouble className="w-8 h-8" strokeWidth={1.5} />,
    label: "11 lôžok + 2 prístelky",
    description: "Kapacita",
  },
  {
    icon: <DoorOpen className="w-8 h-8" strokeWidth={1.5} />,
    label: "4 spálne",
    description: "Každá s TV",
  },
  {
    icon: <Bath className="w-8 h-8" strokeWidth={1.5} />,
    label: "2 kúpeľne, 2 toalety",
    description: "Podlahové kúrenie",
  },
  {
    icon: <Wifi className="w-8 h-8" strokeWidth={1.5} />,
    label: "Vysokorýchlostné WiFi",
    description: "V celej chate",
  },
  {
    icon: <Flame className="w-8 h-8" strokeWidth={1.5} />,
    label: "Sauna & Vírivka",
    description: "Privátny wellness",
  },
  {
    icon: <Heater className="w-8 h-8" strokeWidth={1.5} />,
    label: "Krb",
    description: "Romantické večery",
  },
  {
    icon: <Snowflake className="w-8 h-8" strokeWidth={1.5} />,
    label: "Klimatizácia",
    description: "Celoročný komfort",
  },
  {
    icon: <Car className="w-8 h-8" strokeWidth={1.5} />,
    label: "6 parkovacích miest",
    description: "Oplotené & strážené",
  },
  {
    icon: <Baby className="w-8 h-8" strokeWidth={1.5} />,
    label: "Pre rodiny s deťmi",
    description: "Detské ihrisko",
  },
  {
    icon: <Ticket className="w-8 h-8" strokeWidth={1.5} />,
    label: "Rekreačné poukážky",
    description: "Akceptované",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-cream py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="font-serif text-4xl text-charcoal text-center font-bold">
            O chate
          </h2>

          <p className="text-lg text-charcoal-light text-center max-w-3xl mx-auto mt-6 leading-relaxed">
            Hľadáte miesto, kde sa moderný komfort prirodzene spája s tichom
            prírody? Chata za Studeným potokom sa nachádza v obci Habovka,
            v atraktívnom regióne Orava. Situovaná na okraji obce, v blízkosti
            lesa a 50 metrov od potoka — príjemná atmosféra pokoja a súkromia.
            Moderný dizajn, kvalitné vybavenie a vlastné wellness zázemie
            so saunou a vírivkou.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
          {amenities.map((amenity, index) => (
            <ScrollReveal
              key={amenity.label}
              delay={((index % 5) + 1) as 1 | 2 | 3 | 4}
            >
              <IconCard
                icon={amenity.icon}
                label={amenity.label}
                description={amenity.description}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
