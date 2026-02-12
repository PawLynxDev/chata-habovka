"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4;
}

export default function ScrollReveal({
  children,
  className = "",
  delay,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("revealed");
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const delayClass = delay ? `scroll-reveal-delay-${delay}` : "";

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${delayClass} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
