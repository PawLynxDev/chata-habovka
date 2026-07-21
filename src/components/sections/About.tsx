import IconCard from "@/components/ui/IconCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { DynamicIcon } from "@/lib/icons";
import type { SiteContent } from "@/lib/content-types";

export default function About({ about }: { about: SiteContent["about"] }) {
  return (
    <section id="about" className="bg-cream py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="font-serif text-4xl text-charcoal text-center font-bold">
            {about.heading}
          </h2>

          <p className="text-lg text-charcoal-light text-center max-w-3xl mx-auto mt-6 leading-relaxed">
            {about.text}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
          {about.amenities.map((amenity, index) => (
            <ScrollReveal
              key={amenity.id}
              delay={((index % 5) + 1) as 1 | 2 | 3 | 4}
            >
              <IconCard
                icon={
                  <DynamicIcon
                    iconKey={amenity.iconKey}
                    className="w-8 h-8"
                    strokeWidth={1.5}
                  />
                }
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
