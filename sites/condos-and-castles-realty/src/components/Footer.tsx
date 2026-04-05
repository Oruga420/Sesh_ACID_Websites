import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0D253F' }} className="text-white">
      <div className="max-w-content mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3
              className="font-heading text-2xl font-semibold mb-4"
              style={{ color: BRAND.colors.secondary }}
            >
              Condos &amp; Castles
            </h3>
            <p className="text-white/70 text-sm font-body leading-relaxed">
              Toronto&apos;s original independent boutique brokerage since 1999. One-stop shop for all your real estate needs.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href={BRAND.business.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/60 hover:text-white transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={BRAND.business.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/60 hover:text-white transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Our Services', href: '/services' },
                { label: 'Listings', href: '/listings' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-white text-sm font-body transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              {['Buying', 'Selling', 'Renting', 'Investment', 'Cottage Sales'].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-white/60 hover:text-white text-sm font-body transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-3 text-sm font-body">
              <p className="text-white/70">{BRAND.business.address}</p>
              <p>
                <a href={`tel:${BRAND.business.phone}`} className="text-white/70 hover:text-white transition-colors">
                  {BRAND.business.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${BRAND.business.email}`} className="text-white/70 hover:text-white transition-colors">
                  {BRAND.business.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs font-body">
            &copy; {new Date().getFullYear()} Condos and Castles Realty Inc. Brokerage. All rights reserved.
          </p>
          <p className="text-white/40 text-xs font-body">
            Proud family tradition since 1402
          </p>
        </div>
      </div>
    </footer>
  );
}
