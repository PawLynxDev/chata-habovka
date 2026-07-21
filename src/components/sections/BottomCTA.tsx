import { Phone } from "lucide-react";
import BookingButton from "@/components/ui/BookingButton";
import type { SiteContent } from "@/lib/content-types";

export default function BottomCTA({
  data,
  phone,
  phoneHref,
  bookingUrl,
}: {
  data: SiteContent["bottomCta"];
  phone: string;
  phoneHref: string;
  bookingUrl: string;
}) {
  return (
    <section className="bg-cream-dark py-20 px-4 text-center">
      <h2 className="font-serif text-4xl text-charcoal">{data.heading}</h2>
      <p className="text-lg text-charcoal-light mt-4">{data.text}</p>

      <div className="mt-8 flex gap-4 justify-center flex-wrap">
        <a
          href={`tel:${phoneHref}`}
          className="border-2 border-forest text-forest rounded-full px-8 py-3 font-semibold hover:bg-forest hover:text-white transition inline-flex items-center gap-2"
        >
          <Phone size={20} />
          {phone}
        </a>
        <BookingButton variant="primary" size="large" href={bookingUrl} />
      </div>
    </section>
  );
}
