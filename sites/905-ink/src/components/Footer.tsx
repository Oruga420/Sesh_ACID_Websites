import Link from "next/link";

const locations = [
  {
    name: "Brampton North",
    address: "470 Chrysler Dr, Unit #24, Brampton, ON",
    phone: "(905) 789-9993",
  },
  {
    name: "Brampton South",
    address: "1 Steeles Ave E, Unit #19, Brampton, ON",
    phone: "(905) 454-8086",
  },
  {
    name: "Toronto",
    address: "1386 Gerrard St E, Unit #1, Toronto, ON",
    phone: "(416) 546-3373",
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-dark-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-3xl text-burnt-red tracking-wider mb-4">
              905 INK
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The elegance of brilliance tattoo designs. Custom tattoo design and
              piercing shops serving Toronto and Brampton.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/905inktattoo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-burnt-red transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/905Ink"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-burnt-red transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.738-.9 10.126-5.864 10.126-11.854z" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@905inkCa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-burnt-red transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-heading text-xl text-white tracking-wider mb-4">
              LOCATIONS
            </h4>
            <div className="space-y-4">
              {locations.map((loc) => (
                <div key={loc.name} className="text-gray-400 text-sm">
                  <p className="text-white font-medium">{loc.name}</p>
                  <p>{loc.address}</p>
                  <a href={`tel:${loc.phone.replace(/[^+\d]/g, "")}`} className="hover:text-burnt-red transition-colors">
                    {loc.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl text-white tracking-wider mb-4">
              QUICK LINKS
            </h4>
            <div className="space-y-3">
              {[
                { href: "/services", label: "Services" },
                { href: "/artists", label: "Artists" },
                { href: "/contact", label: "Contact" },
                { href: "https://shop.905ink.ca", label: "Shop", external: true },
              ].map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-400 hover:text-burnt-red transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-gray-400 hover:text-burnt-red transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
            <div className="mt-6">
              <p className="text-gray-400 text-sm">Open Daily: 12PM - 9PM</p>
              <a
                href="mailto:info@905ink.ca"
                className="text-burnt-red hover:text-burnt-red-light transition-colors text-sm"
              >
                info@905ink.ca
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-lighter mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} 905 INK Tattoo Facility. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
