import { ChevronDown } from "lucide-react";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import BookingButton from "@/components/ui/BookingButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
        <ImagePlaceholder
          name="hero-exterior-1"
          alt="Chata za Studeným potokom - exteriér"
          className="w-full h-full"
          sizes="100vw"
          priority
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-white text-center px-4 max-w-4xl mx-auto">
        <p className="font-sans text-sm uppercase tracking-widest mb-6 text-white/80">
          HABOVKA | ZÁPADNÉ TATRY
        </p>

        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight">
          Chata za Studeným potokom
        </h1>

        <p className="text-xl md:text-2xl font-light mt-4 text-white/90">
          Kde sa moderný komfort spája s tichom prírody
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <BookingButton variant="primary" size="large" />

          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-full border-2 border-white text-white px-8 py-4 text-lg font-sans font-medium transition-all duration-300 hover:bg-white hover:text-charcoal"
          >
            Preskúmať
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown
          className="w-8 h-8 text-white/70 animate-bounce-down"
          strokeWidth={1.5}
        />
      </div>

      {/* Cream wave overlay at bottom */}
      <div className="absolute -bottom-px left-0 right-0 z-10 leading-[0]">
        <svg
          className="relative block w-full h-auto"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,60 1440,70 L1440,120 L0,120 Z"
            fill="#FAF6F0"
          />
        </svg>
      </div>
    </section>
  );
}
