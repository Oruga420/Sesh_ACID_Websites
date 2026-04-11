import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

export default function Footer() {
  return (
    <footer className="bg-brand-footer-bg text-brand-footer-text">
      <div className="mx-auto max-w-[1240px] px-5 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Column 1: Brand */}
          <div>
            <h3
              className="mb-3 text-xl font-bold text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              P &amp; A Nails
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Hamilton Mountain&apos;s neighbourhood nail salon. Making clients
              feel at home for over 10 years.
            </p>
            {/* Social icons */}
            <div className="mt-4 flex items-center gap-4">
              <a
                href={BRAND.businessData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 transition-colors hover:text-brand-primary"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href={`tel:${BRAND.businessData.phone}`}
                aria-label="Phone"
                className="text-gray-400 transition-colors hover:text-brand-primary"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </a>
              <a
                href={`mailto:${BRAND.businessData.email}`}
                aria-label="Email"
                className="text-gray-400 transition-colors hover:text-brand-primary"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-primary">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { href: '/gallery', label: 'Gallery' },
                { href: '/services', label: 'Services' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Hours & Location */}
          <div>
            <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-primary">
              Visit Us
            </h4>
            <p className="text-sm text-gray-400">
              {BRAND.businessData.address}
            </p>
            <p className="mt-2 text-sm text-gray-400">
              <span className="text-gray-300">Mon-Sat:</span> {BRAND.businessData.hours.mondayToSaturday}
            </p>
            <p className="text-sm text-gray-400">
              <span className="text-gray-300">Sunday:</span> {BRAND.businessData.hours.sunday}
            </p>
            <p className="mt-2 text-sm text-gray-400">
              <a href={`tel:${BRAND.businessData.phone}`} className="hover:text-white">
                {BRAND.businessData.phone}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} P &amp; A Nails Hamilton Mountain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
