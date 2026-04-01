import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/5 text-brand-silver">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images-prod-1.getsquire.com/7a5acb58-19e8-4ed8-b12d-8dacb7f0a3c6_untitled-design-5.png"
                alt="Scarborough Fades logo"
                className="h-8 w-auto"
              />
              <span className="font-display text-lg font-bold text-white uppercase tracking-wider">
                Scarborough Fades
              </span>
            </div>
            <p className="text-sm leading-relaxed text-brand-silver">
              Combining the culture and style of Scarborough. Over 60 years of
              combined experience. Walk-ins welcome, appointments recommended.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Visit Us
            </h3>
            <div className="space-y-2.5 text-sm">
              <p>2231 Victoria Park Ave, Unit 2</p>
              <p>Scarborough, ON M1R 1V8</p>
              <p className="pt-1">
                <a href="tel:+14163911761" className="hover:text-white transition-colors">
                  (416) 391-1761
                </a>
              </p>
              <div className="pt-2 flex gap-4">
                <a href="https://www.instagram.com/scarborough_fades/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
                <a href="https://www.facebook.com/ScarboroughFades/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 text-center text-xs text-brand-silver/50">
          &copy; {new Date().getFullYear()} Scarborough Fades. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
