import { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BookingButton from "@/components/ui/BookingButton";
import {
  Phone,
  Globe,
  MapPin,
  Navigation,
  Clock,
  LogOut,
  Users,
  CigaretteOff,
  PawPrint,
  Lock,
  Thermometer,
  Languages,
  Smartphone,
  Utensils,
  ShoppingCart,
  Bus,
  TrainFront,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt & Rezervácia",
  description:
    "Kontaktujte nás alebo si rezervujte pobyt v Chate za Studeným potokom v Habovke.",
};

const practicalInfo = [
  { icon: MapPin, label: "Adresa", value: "Pod Jamami 514/37, 027 32, Habovka" },
  { icon: Navigation, label: "GPS", value: "49.274138, 19.602702" },
  { icon: Clock, label: "Check-in", value: "15:00 – 19:00" },
  { icon: LogOut, label: "Check-out", value: "08:00 – 10:00" },
  { icon: Users, label: "Kapacita", value: "11 lôžok + 2 prístelky" },
  { icon: CigaretteOff, label: "Fajčenie", value: "Zakázané v interiéri" },
  { icon: PawPrint, label: "Zvieratá", value: "Nie sú povolené" },
  { icon: Lock, label: "Súkromie", value: "Len jedna skupina hostí naraz" },
  { icon: Thermometer, label: "Vykurovanie", value: "Podlahové kúrenie, krb, klimatizácia" },
  { icon: Languages, label: "Jazyky", value: "Slovenčina, čeština, angličtina, poľština" },
  { icon: Smartphone, label: "Signál", value: "Telekom, Orange, O2, 4ka" },
  { icon: Utensils, label: "Reštaurácia", value: "100m" },
  { icon: ShoppingCart, label: "Potraviny", value: "200m" },
  { icon: Bus, label: "Autobus", value: "Zastávka 1km" },
  { icon: TrainFront, label: "Vlak", value: "Stanica 12km" },
];

export default function KontaktPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-charcoal text-cream pt-32 pb-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="font-serif text-5xl text-center">Kontakt</h1>
            <p className="text-cream/70 text-center mt-4 text-lg">
              Budeme sa tešiť na vašu návštevu
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Rezervacia */}
      <section className="bg-cream py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl text-charcoal">
              Rezervácia pobytu
            </h2>
            <p className="text-charcoal-light mt-4">
              Rezervovať si pobyt môžete telefonicky, emailom alebo cez náš
              rezervačný systém.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-2xl mx-auto">
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
                <div className="flex justify-center mb-4">
                  <Phone size={32} className="text-forest" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                  Telefón
                </h3>
                <a
                  href="tel:+421948280363"
                  className="text-2xl font-serif font-bold text-forest"
                >
                  +421 948 280 363
                </a>
                <p className="text-charcoal-light text-sm mt-2">
                  Denne 8:00 – 20:00
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
                <div className="flex justify-center mb-4">
                  <Globe size={32} className="text-forest" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                  Online rezervácia
                </h3>
                <div className="mb-2">
                  <BookingButton variant="primary" size="default" />
                </div>
                <p className="text-charcoal-light text-sm mt-2">
                  Okamžité potvrdenie
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Prakticke informacie */}
      <section className="bg-cream-dark py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-3xl text-center text-charcoal">
              Praktické informácie
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
            {practicalInfo.map((item) => {
              const IconComponent = item.icon;
              return (
                <ScrollReveal
                  key={item.label + item.value}
                >
                  <div className="bg-white rounded-xl p-4 text-center">
                    <div className="flex justify-center mb-2">
                      <IconComponent
                        size={24}
                        className="text-forest"
                        strokeWidth={1.5}
                      />
                    </div>
                    <p className="font-semibold text-charcoal text-sm">
                      {item.label}
                    </p>
                    <p className="text-charcoal-light text-sm mt-1">
                      {item.value}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="bg-cream py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-3xl text-center text-charcoal">
              Kde nás nájdete
            </h2>
            <p className="text-center text-charcoal-light mt-2">
              Pod Jamami 514/37, 027 32, Habovka
            </p>
            <p className="text-center text-sm text-charcoal-light/60 mt-1">
              49.274138, 19.602702
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2612.5!2d19.602702!3d49.274138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDE2JzI2LjkiTiAxOcKwMzYnMDkuNyJF!5e0!3m2!1sen!2ssk!4v1"
              width="100%"
              height={450}
              className="rounded-2xl mt-8 border-0"
              loading="lazy"
              allowFullScreen
            />
          </ScrollReveal>

          <p className="text-center text-charcoal-light mt-4">
            Z Bratislavy 2,5 hod, z Krakova 2 hod
          </p>
        </div>
      </section>

    </main>
  );
}
