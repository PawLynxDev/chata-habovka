import ScrollReveal from "@/components/ui/ScrollReveal";
import RatingBadge from "@/components/ui/RatingBadge";
import type { SiteContent } from "@/lib/content-types";

export default function Reviews({
  reviews,
  bookingUrl,
}: {
  reviews: SiteContent["reviews"];
  bookingUrl: string;
}) {
  return (
    <section className="bg-charcoal-dark text-cream py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <p className="tracking-widest uppercase text-gold text-sm">
            {reviews.eyebrow}
          </p>

          <h2 className="font-serif text-4xl mt-4">{reviews.heading}</h2>

          <div className="mt-12 flex justify-center">
            <RatingBadge />
          </div>

          <blockquote className="italic text-cream/70 mt-8 max-w-xl mx-auto text-lg">
            &ldquo;{reviews.quote}&rdquo;
          </blockquote>

          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light mt-4 inline-block transition"
          >
            Čítať všetky recenzie na megaubytovanie.sk
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
