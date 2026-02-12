import { Phone } from "lucide-react";
import BookingButton from "@/components/ui/BookingButton";

export default function BottomCTA() {
  return (
    <section className="bg-cream-dark py-20 px-4 text-center">
      <h2 className="font-serif text-4xl text-charcoal">
        Rezervujte si svoj pobyt
      </h2>
      <p className="text-lg text-charcoal-light mt-4">
        Kontaktujte nás alebo si rovno rezervujte termín.
      </p>

      <div className="mt-8 flex gap-4 justify-center flex-wrap">
        <a
          href="tel:+421948280363"
          className="border-2 border-forest text-forest rounded-full px-8 py-3 font-semibold hover:bg-forest hover:text-white transition inline-flex items-center gap-2"
        >
          <Phone size={20} />
          +421 948 280 363
        </a>
        <BookingButton variant="primary" size="large" />
      </div>
    </section>
  );
}
