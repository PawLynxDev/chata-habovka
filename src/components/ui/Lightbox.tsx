"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          onPrev();
          break;
        case "ArrowRight":
          onNext();
          break;
      }
    },
    [onClose, onPrev, onNext]
  );

  // Keyboard support
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Prevent body scroll while open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const current = images[currentIndex];
  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-charcoal-dark/95 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 cursor-pointer"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 z-10 text-white/70 text-sm font-sans tabular-nums">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Previous Button */}
      <button
        onClick={onPrev}
        className="absolute left-4 z-10 text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 cursor-pointer"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      {/* Image */}
      <div className="relative w-full h-full max-w-[90vw] max-h-[85vh] m-auto flex items-center justify-center">
        <Image
          src={current.src}
          alt={current.alt}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute right-4 z-10 text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 cursor-pointer"
        aria-label="Next image"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </div>
  );
}
