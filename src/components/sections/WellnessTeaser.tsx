import Link from "next/link";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function WellnessTeaser() {
  return (
    <section className="bg-charcoal text-cream py-20 px-4">
      <ScrollReveal>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <ImagePlaceholder
            name="wellness-hottub"
            alt="Virivka pod holym nebom"
            className="w-full aspect-[4/3] rounded-2xl"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Right: Content */}
          <div>
            <p className="font-sans text-sm uppercase tracking-widest text-gold mb-4">
              WELLNESS & RELAX
            </p>

            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight">
              Váš privátny wellness priamo v chate
            </h2>

            <p className="text-cream/80 mt-6 text-lg leading-relaxed">
              Súkromná sauna, vírivka a vonkajšie sprchy — ideálne na oddych
              po dni strávenom v horách.
            </p>

            <Link
              href="/wellness"
              className="inline-flex items-center justify-center rounded-full border-2 border-gold text-gold px-8 py-3 font-sans font-medium mt-8 transition-all duration-300 hover:bg-gold hover:text-charcoal"
            >
              Objaviť wellness
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
