import Link from "next/link";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { SiteContent } from "@/lib/content-types";

export default function WellnessTeaser({
  data,
}: {
  data: SiteContent["wellnessTeaser"];
}) {
  return (
    <section className="bg-charcoal text-cream py-20 px-4">
      <ScrollReveal>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <ImagePlaceholder
            src={data.image.url}
            alt={data.image.alt}
            className="w-full aspect-[4/3] rounded-2xl"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Right: Content */}
          <div>
            <p className="font-sans text-sm uppercase tracking-widest text-gold mb-4">
              {data.eyebrow}
            </p>

            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight">
              {data.heading}
            </h2>

            <p className="text-cream/80 mt-6 text-lg leading-relaxed">
              {data.text}
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
