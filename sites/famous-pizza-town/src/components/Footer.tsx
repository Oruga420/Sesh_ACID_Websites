import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                F
              </div>
              <span className="text-lg font-semibold text-white">
                Famous Pizza Town
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Serving Scarborough with fresh, flavourful pizza, wings, and more.
              Your neighbourhood go-to for quality eats.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/menu", label: "Menu" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Visit Us
            </h3>
            <div className="space-y-2.5 text-sm">
              <p>1947 Victoria Park Avenue</p>
              <p>Scarborough, ON M1R 1V1</p>
              <p className="pt-1">
                <a
                  href="tel:+16473523786"
                  className="hover:text-white transition-colors"
                >
                  (647) 352-3786
                </a>
              </p>
              <div className="pt-2">
                <p>Mon&ndash;Sat: 11 AM &ndash; 9 PM</p>
                <p>Sun: 12 PM &ndash; 9 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Famous Pizza Town. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
