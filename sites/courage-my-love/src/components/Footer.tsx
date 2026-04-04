import { BRAND } from "@/lib/brand-tokens";

export default function Footer() {
  return (
    <footer className="bg-brand-espresso text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div>
            <h3
              className="text-2xl tracking-wide text-brand-secondary mb-4"
              style={{ fontFamily: BRAND.fonts.heading }}
            >
              COURAGE MY LOVE
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
              A Kensington Market institution since 1975. Three generations of
              the Scriver family curating vintage treasures from around the
              world.
            </p>
          </div>

          {/* Contact Column */}
          <div>
            <h4
              className="text-sm uppercase tracking-[0.15em] text-brand-warm-gold mb-4"
              style={{ fontFamily: BRAND.fonts.heading }}
            >
              Visit Us
            </h4>
            <address className="not-italic text-sm text-white/70 space-y-2">
              <p>14 Kensington Ave</p>
              <p>Toronto, ON M5T 2J7</p>
              <p className="pt-2">
                <a
                  href="tel:416-979-1992"
                  className="hover:text-brand-secondary transition-colors"
                >
                  416-979-1992
                </a>
              </p>
              <p>
                <a
                  href="mailto:ceceandstewart@yahoo.ca"
                  className="hover:text-brand-secondary transition-colors"
                >
                  ceceandstewart@yahoo.ca
                </a>
              </p>
            </address>
          </div>

          {/* Hours & Social Column */}
          <div>
            <h4
              className="text-sm uppercase tracking-[0.15em] text-brand-warm-gold mb-4"
              style={{ fontFamily: BRAND.fonts.heading }}
            >
              Hours
            </h4>
            <div className="text-sm text-white/70 space-y-1">
              <p>Mon–Fri: 11:30 AM – 6:00 PM</p>
              <p>Saturday: 11:00 AM – 6:00 PM</p>
              <p>Sunday: 1:00 PM – 5:00 PM</p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.instagram.com/couragemylove/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/60 hover:text-brand-secondary transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/cececourage/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cece on Instagram"
                className="text-white/60 hover:text-brand-secondary transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Courage My Love. Kensington Market, Toronto.</p>
        </div>
      </div>
    </footer>
  );
}
