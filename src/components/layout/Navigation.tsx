"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Domov" },
    { href: "/interier", label: "Interiér" },
    { href: "/wellness", label: "Wellness" },
    { href: "/okolie", label: "Okolie" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const linkColor = (href: string) => {
    if (isActive(href)) {
      return isScrolled
        ? "text-forest font-semibold"
        : "text-white font-semibold";
    }
    return isScrolled
      ? "text-charcoal hover:text-forest"
      : "text-white/80 hover:text-white";
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-cream/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Left: Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Chata za Studeným potokom"
                width={160}
                height={56}
                className={`h-14 w-auto transition-all duration-300 drop-shadow-lg ${
                  isScrolled ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                priority
              />
            </Link>

            {/* Center: Nav links (desktop) */}
            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-wide transition-colors duration-200 ${linkColor(link.href)}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right: Booking button (desktop) + Hamburger (mobile) */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.megaubytovanie.sk/chata-za-studenym-potokom"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden rounded-full bg-forest px-6 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 md:inline-block"
              >
                Rezervovať
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setIsOpen(true)}
                className={`md:hidden ${isScrolled ? "text-charcoal" : "text-white"}`}
                aria-label="Otvoriť menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-cream md:hidden">
          <div className="flex h-20 items-center justify-between px-4 sm:px-6">
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <Image
                src="/logo.png"
                alt="Chata za Studeným potokom"
                width={160}
                height={56}
                className="h-14 w-auto"
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="text-charcoal"
              aria-label="Zatvoriť menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-serif text-2xl transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-forest font-semibold"
                    : "text-charcoal hover:text-forest"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <a
              href="https://www.megaubytovanie.sk/chata-za-studenym-potokom"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 rounded-full bg-forest px-8 py-3 text-base font-medium text-white transition-opacity hover:opacity-90"
            >
              Rezervovať
            </a>
          </div>
        </div>
      )}
    </>
  );
}
