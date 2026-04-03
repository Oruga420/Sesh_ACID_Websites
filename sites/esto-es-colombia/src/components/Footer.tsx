import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-4">
            Esto es Colombia
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            The best Colombian restaurant &amp; bar in Toronto. Authentic
            recipes from Cali brought to North York by Chef Diana Arizala.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wider text-brand-yellow mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="/menu" className="hover:text-white transition-colors">
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="https://wa.me/19054613895"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Reservations
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wider text-brand-yellow mb-4">
            Visit Us
          </h4>
          <address className="not-italic text-sm text-gray-400 space-y-2">
            <p>2848 Dufferin St</p>
            <p>North York, ON M6B 3S3</p>
            <p>
              <a
                href="tel:+19054613895"
                className="hover:text-white transition-colors"
              >
                (905) 461-3895
              </a>
            </p>
          </address>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.facebook.com/estoescolombiarest/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-yellow transition-colors text-sm"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/estoescolombiarest/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-yellow transition-colors text-sm"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@EstoesColombiaTV"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-yellow transition-colors text-sm"
              aria-label="YouTube"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-6 text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Esto es Colombia. All rights
        reserved.
      </div>
    </footer>
  );
}
