import { Lock } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PrivacyBanner() {
  return (
    <section className="bg-forest text-white py-16 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="shrink-0">
              <div className="bg-white/10 p-4 rounded-full">
                <Lock size={48} className="text-gold" />
              </div>
            </div>

            <div className="text-center md:text-left">
              <h2 className="font-serif text-2xl md:text-3xl">
                Len jedna skupina hostí naraz
              </h2>
              <p className="text-white/80 mt-2">
                Celou chatou disponuje vždy len jedna skupina. Žiadni cudzinci
                na chodbe, žiadne zdieľané priestory. Užívajte si absolútne
                súkromie.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
