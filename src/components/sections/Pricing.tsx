import { Euro } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { DynamicIcon } from "@/lib/icons";
import type { SiteContent } from "@/lib/content-types";

export default function Pricing({
  pricing,
  bookingUrl,
}: {
  pricing: SiteContent["pricing"];
  bookingUrl: string;
}) {
  return (
    <section className="bg-cream py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center bg-forest/10 p-3 rounded-full mb-4">
              <Euro size={32} className="text-forest" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">
              {pricing.heading}
            </h2>
            <p className="text-charcoal-light mt-3 text-lg">{pricing.note}</p>
          </div>
        </ScrollReveal>

        <div className="grid gap-3">
          {pricing.seasons.map((s) => (
            <ScrollReveal key={s.id}>
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
              {pricing.servicesHeading}
            </h3>

            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {pricing.services.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white border border-cream-dark rounded-2xl p-8 text-center"
                  >
                    <div className="inline-flex items-center justify-center bg-gold/10 p-3 rounded-full mb-4">
                      <DynamicIcon
                        iconKey={service.iconKey}
                        size={32}
                        className="text-gold"
                      />
                    </div>
                    <h4 className="font-serif text-2xl text-charcoal">
                      {service.name}
                    </h4>
                    <p className="text-forest text-3xl font-semibold mt-2">
                      {service.price}&nbsp;&euro;
                      <span className="text-charcoal-light text-base font-normal">
                        {" "}
                        {service.unit}
                      </span>
                    </p>
                  </div>
              ))}
            </div>

            <div className="mt-6 bg-forest rounded-2xl p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3">
                <DynamicIcon
                  iconKey={pricing.combined.iconKey}
                  size={24}
                  className="text-gold-light"
                />
                <span className="text-white font-serif text-xl">
                  {pricing.combined.name}
                </span>
                <DynamicIcon
                  iconKey={pricing.combined.iconKey}
                  size={24}
                  className="text-gold-light"
                />
              </div>
              <p className="text-gold-light text-3xl font-semibold mt-2">
                {pricing.combined.price}&nbsp;&euro;
                <span className="text-white/70 text-base font-normal">
                  {" "}
                  {pricing.combined.unit}
                </span>
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-center text-charcoal-light mt-10 text-sm">
            {pricing.footnote}{" "}
            <a
              href={bookingUrl}
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
