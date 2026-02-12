import Link from "next/link";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function InteriorTeaser() {
  return (
    <section className="bg-cream py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl text-center text-charcoal">
          Interiér chaty
        </h2>
        <p className="text-lg text-charcoal-light text-center max-w-2xl mx-auto mt-4">
          Moderný interiér s dôrazom na pohodlie. Štýlová obývačka s krbom,
          plne vybavená kuchyňa a 4 pohodlné spálne.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <ScrollReveal>
            <ImagePlaceholder
              name="interior-living-1"
              alt="Obývačka"
              className="w-full aspect-[4/3] rounded-xl"
            />
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <ImagePlaceholder
              name="interior-kitchen-1"
              alt="Kuchyňa"
              className="w-full aspect-[4/3] rounded-xl"
            />
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <ImagePlaceholder
              name="interior-bedroom-1"
              alt="Spálňa"
              className="w-full aspect-[4/3] rounded-xl"
            />
          </ScrollReveal>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/interier"
            className="text-forest font-semibold hover:text-forest-dark transition"
          >
            Prezrieť interiér &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
