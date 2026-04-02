import Link from "next/link";

const HOURS = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday - Saturday", time: "12:00 PM - 7:00 PM" },
  { day: "Sunday", time: "12:00 PM - 5:00 PM" },
];

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/artists", label: "Artists" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.squarespace-cdn.com/content/v1/645a279bf6479109759c303a/ee131453-9577-4ccf-894b-9e57e1bbe457/tattoohaus_vector_finalized.png"
              alt="Toronto Tattoohaus"
              className="h-12 w-auto invert mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Proudly inclusive and fully accessible tattoo studio.
              Fine line, illustrative, black &amp; grey, and fully custom designs.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/torontotattoohaus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-brand-gold transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-brand-gold font-heading text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-brand-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://form.jotform.com/200156118945251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-brand-gold text-sm transition-colors"
                >
                  Book a Tattoo
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-brand-gold font-heading text-lg mb-4">Studio Hours</h3>
            <ul className="space-y-2">
              {HOURS.map((item) => (
                <li key={item.day} className="text-sm">
                  <span className="text-white/80">{item.day}</span>
                  <br />
                  <span className={item.time === "Closed" ? "text-red-400/70" : "text-white/50"}>
                    {item.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-white/40 text-xs mt-4">
              Flash Days: Tue &amp; Wed from $80
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-brand-gold font-heading text-lg mb-4">Contact</h3>
            <address className="not-italic text-sm space-y-3">
              <p className="text-white/60">
                873 St. Clair Ave W (Main Floor)
                <br />
                Toronto, ON M6C 1C4
              </p>
              <p>
                <a href="tel:+16473453549" className="text-white/60 hover:text-brand-gold transition-colors">
                  647-345-3549
                </a>
              </p>
              <p>
                <a href="mailto:torontotattoohaus@gmail.com" className="text-white/60 hover:text-brand-gold transition-colors">
                  torontotattoohaus@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Toronto Tattoohaus. All rights reserved.</p>
          <p className="mt-1">Inclusive &amp; Accessible Tattoo Studio &bull; St. Clair West, Toronto</p>
        </div>
      </div>
    </footer>
  );
}
