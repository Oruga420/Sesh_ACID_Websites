import Link from "next/link";

const HOURS = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday - Thursday", time: "12:00 PM - 7:00 PM" },
  { day: "Friday - Saturday", time: "12:00 PM - 9:00 PM" },
  { day: "Sunday", time: "12:00 PM - 6:00 PM" },
] as const;

export function Footer() {
  return (
    <footer className="bg-brand-coffee text-brand-cream">
      <div className="max-w-[1200px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About Column */}
        <div>
          <h3 className="font-[family-name:var(--font-heading)] text-brand-gold text-2xl font-bold mb-4">
            The Toston
          </h3>
          <p className="text-brand-cream/80 text-sm leading-relaxed font-[family-name:var(--font-body)]">
            Authentic Colombian paisa cuisine made with love by Chef Alexander
            and Cristina. Bringing Colombia&apos;s rich cafe culture to Markham
            since day one.
          </p>
        </div>

        {/* Hours Column */}
        <div>
          <h4 className="font-[family-name:var(--font-heading)] text-brand-gold text-xl font-semibold mb-4">
            Hours
          </h4>
          <ul className="space-y-2 font-[family-name:var(--font-body)] text-sm">
            {HOURS.map((h) => (
              <li key={h.day} className="flex justify-between">
                <span className="text-brand-cream/80">{h.day}</span>
                <span
                  className={
                    h.time === "Closed"
                      ? "text-brand-red"
                      : "text-brand-cream"
                  }
                >
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="font-[family-name:var(--font-heading)] text-brand-gold text-xl font-semibold mb-4">
            Visit Us
          </h4>
          <address className="not-italic text-sm space-y-3 font-[family-name:var(--font-body)]">
            <p className="text-brand-cream/80">
              35 Karachi Dr. Unit 39
              <br />
              Markham, ON L3S 0B5
            </p>
            <p>
              <a
                href="tel:6476662400"
                className="text-brand-gold hover:text-brand-gold-dark transition-colors duration-300"
              >
                (647) 666-2400
              </a>
            </p>
            <div className="flex gap-4 pt-2">
              <Link
                href="/menu"
                className="text-brand-cream/80 hover:text-brand-gold transition-colors duration-300"
              >
                Menu
              </Link>
              <Link
                href="/about"
                className="text-brand-cream/80 hover:text-brand-gold transition-colors duration-300"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-brand-cream/80 hover:text-brand-gold transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </address>
        </div>
      </div>

      <div className="border-t border-brand-cream/10 py-6 text-center text-brand-cream/50 text-xs font-[family-name:var(--font-body)]">
        &copy; {new Date().getFullYear()} The Toston Colombian Cuisine. All
        rights reserved.
      </div>
    </footer>
  );
}
