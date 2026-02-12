import ScrollReveal from "@/components/ui/ScrollReveal";
import RatingBadge from "@/components/ui/RatingBadge";

export default function Reviews() {
  return (
    <section className="bg-charcoal-dark text-cream py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <p className="tracking-widest uppercase text-gold text-sm">
            HODNOTENIE HOSTÍ
          </p>

          <h2 className="font-serif text-4xl mt-4">Naši hostia nás milujú</h2>

          <div className="mt-12 flex justify-center">
            <RatingBadge />
          </div>

          <blockquote className="italic text-cream/70 mt-8 max-w-xl mx-auto text-lg">
            &ldquo;Úžasné miesto, skvelý wellness, čistý vzduch a neskutočný
            pokoj. Určite sa vrátime!&rdquo;
          </blockquote>

          <a
            href="https://www.megaubytovanie.sk/chata-za-studenym-potokom"
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
