import Link from "next/link";

const HOURS = [
  { day: "Monday - Sunday", time: "11:30 AM - 7:30 PM" },
] as const;

export function Footer() {
  return (
    <footer className="bg-brand-espresso text-brand-offwhite">
      <div className="max-w-[1200px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About Column */}
        <div>
          <h3 className="font-[family-name:var(--font-heading)] text-brand-gold text-2xl font-bold mb-4">
            La Bonita
          </h3>
          <p className="text-brand-offwhite/80 text-sm leading-relaxed font-[family-name:var(--font-body)]">
            Authentic Latin American and Colombian cuisine made with
            love — following grandmother&apos;s recipes since 2016.
            Highlighting Latin culture through exquisite dishes that
            delight the whole family.
          </p>
        </div>

        {/* Hours Column */}
        <div>
          <h4 className="font-[family-name:var(--font-heading)] text-brand-gold text-xl font-bold mb-4">
            Hours
          </h4>
          <ul className="space-y-2 font-[family-name:var(--font-body)] text-sm">
            {HOURS.map((h) => (
              <li key={h.day} className="flex justify-between">
                <span className="text-brand-offwhite/80">{h.day}</span>
                <span className="text-brand-offwhite">{h.time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-brand-gold text-sm font-[family-name:var(--font-body)] font-semibold">
            Cash &amp; E-Transfer Only
          </p>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="font-[family-name:var(--font-heading)] text-brand-gold text-xl font-bold mb-4">
            Visit Us
          </h4>
          <address className="not-italic text-sm space-y-3 font-[family-name:var(--font-body)]">
            <p className="text-brand-offwhite/80">
              1065 Canadian Place Unit 109
              <br />
              Mississauga, ON L4W 0B8
            </p>
            <p>
              <a
                href="tel:9052320915"
                className="text-brand-gold hover:text-brand-gold-dark transition-colors duration-300"
              >
                (905) 232-0915
              </a>
            </p>
            <div className="flex gap-4 pt-2">
              <Link
                href="/menu"
                className="text-brand-offwhite/80 hover:text-brand-gold transition-colors duration-300"
              >
                Menu
              </Link>
              <Link
                href="/about"
                className="text-brand-offwhite/80 hover:text-brand-gold transition-colors duration-300"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-brand-offwhite/80 hover:text-brand-gold transition-colors duration-300"
              >
                Contact
              </Link>
              <a
                href="https://www.instagram.com/labonita.latin.restaurant/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-offwhite/80 hover:text-brand-gold transition-colors duration-300"
              >
                Instagram
              </a>
            </div>
          </address>
        </div>
      </div>

      <div className="border-t border-brand-offwhite/10 py-6 text-center text-brand-offwhite/50 text-xs font-[family-name:var(--font-body)]">
        &copy; {new Date().getFullYear()} La Bonita Latin American Restaurant.
        All rights reserved.
      </div>
    </footer>
  );
}
