import Link from "next/link";

export default function Footer() {
  const navLinks = [
    { href: "/", label: "Domov" },
    { href: "/interier", label: "Interiér" },
    { href: "/wellness", label: "Wellness" },
    { href: "/okolie", label: "Okolie" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <footer className="bg-charcoal-dark text-cream">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Cabin info */}
          <div>
            <h3 className="font-serif text-xl font-bold text-white">
              Chata za Studeným potokom
            </h3>
            <p className="mt-3 text-sm text-cream/70">
              Vaša horská oáza v Západných Tatrách
            </p>
            <address className="mt-4 text-sm not-italic text-cream/60">
              Pod Jamami 514/37, 027 32, Habovka
            </address>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white">
              Navigácia
            </h4>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white">
              Kontakt
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="tel:+421948280363"
                  className="text-sm text-cream/70 transition-colors duration-200 hover:text-white"
                >
                  +421 948 280 363
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs text-cream/50">
              Hovoríme po anglicky a po poľsky
            </p>
          </div>

          {/* Column 4: Booking & Social */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white">
              Rezervácia
            </h4>
            <a
              href="https://www.megaubytovanie.sk/chata-za-studenym-potokom"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full bg-forest px-6 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Rezervovať
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-cream/50">
            &copy; 2026 Chata za Studeným potokom. Všetky práva vyhradené.
          </p>
          <p className="text-xs text-cream/50">
            Vyrobené spoločnosťou{" "}
            <a
              href="https://pawlynx.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/70 transition-colors duration-200 hover:text-white"
            >
              PawLynx
            </a>
          </p>
          <Link
            href="#"
            className="text-xs text-cream/50 transition-colors duration-200 hover:text-white"
          >
            Ochrana osobných údajov
          </Link>
        </div>
      </div>
    </footer>
  );
}
