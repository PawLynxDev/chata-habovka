import { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BookingButton from "@/components/ui/BookingButton";
import { Phone, Globe } from "lucide-react";
import { getContent } from "@/lib/content";
import { DynamicIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Kontakt & Rezervácia - Rezervujte si pobyt",
  description:
    "Rezervujte si pobyt v Chate za Studeným potokom v Habovke. Adresa: Pod Jamami 514/37, Habovka. Telefón: +421 948 280 363. Check-in od 15:00, check-out do 10:00.",
  alternates: {
    canonical: "https://chatazastudenympotokom.sk/kontakt",
  },
};

export default async function KontaktPage() {
  const content = await getContent();
  const contact = content.contact;

  return (
    <main>
      {/* Page Header */}
      <section className="bg-charcoal text-cream pt-32 pb-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="font-serif text-5xl text-center">
              {contact.headerTitle}
            </h1>
            <p className="text-cream/70 text-center mt-4 text-lg">
              {contact.headerSubtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Rezervacia */}
      <section className="bg-cream py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl text-charcoal">
              {contact.reservationHeading}
            </h2>
            <p className="text-charcoal-light mt-4">{contact.reservationText}</p>
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
                  href={`tel:${content.phoneHref}`}
                  className="text-2xl font-serif font-bold text-forest"
                >
                  {content.phone}
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
                  <BookingButton
                    variant="primary"
                    size="default"
                    href={content.bookingUrl}
                  />
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
            {contact.practicalInfo.map((item) => (
              <ScrollReveal key={item.id}>
                <div className="bg-white rounded-xl p-4 text-center">
                  <div className="flex justify-center mb-2">
                    <DynamicIcon
                      iconKey={item.iconKey}
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
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="bg-cream py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-3xl text-center text-charcoal">
              {contact.mapHeading}
            </h2>
            <p className="text-center text-charcoal-light mt-2">
              {contact.address}
            </p>
            <p className="text-center text-sm text-charcoal-light/60 mt-1">
              {contact.gps}
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <iframe
              src={contact.mapEmbedUrl}
              width="100%"
              height={450}
              className="rounded-2xl mt-8 border-0"
              loading="lazy"
              allowFullScreen
            />
          </ScrollReveal>

          <p className="text-center text-charcoal-light mt-4">
            {contact.travelNote}
          </p>
        </div>
      </section>
    </main>
  );
}
