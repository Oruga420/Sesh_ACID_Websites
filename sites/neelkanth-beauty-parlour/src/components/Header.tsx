'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-8 z-40 bg-white border-b transition-shadow duration-300"
      style={{ borderColor: BRAND.colors.border, height: '72px' }}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-full px-6">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img
            src={BRAND.images.logo}
            alt="Neelkanth Beauty Parlour"
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold tracking-widest uppercase transition-colors duration-200 hover:text-brand-primary"
              style={{
                fontFamily: `${BRAND.fonts.nav}, ${BRAND.fonts.navFallback}`,
                color: BRAND.colors.textBody,
                letterSpacing: BRAND.fonts.navLetterSpacing,
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${BRAND.business.phone.replace(/[^0-9+]/g, '')}`}
            className="px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-white rounded transition-all duration-300 hover:shadow-lg"
            style={{
              backgroundColor: BRAND.colors.primary,
              fontFamily: `${BRAND.fonts.nav}, ${BRAND.fonts.navFallback}`,
            }}
          >
            Book Now
          </a>
        </nav>

        {/* Social icons in header */}
        <div className="hidden lg:flex items-center gap-3 ml-4">
          <a href={BRAND.business.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-brand-text-muted hover:text-brand-primary transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          <a href={`https://wa.me/${BRAND.business.whatsapp.replace(/\+/g, '')}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-brand-text-muted hover:text-green-600 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-brand-secondary transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-brand-secondary transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-brand-secondary transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t absolute top-full left-0 right-0 shadow-lg" style={{ borderColor: BRAND.colors.border }}>
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-6 py-3 text-sm font-semibold tracking-widest uppercase transition-colors hover:bg-brand-warm-cream"
                style={{
                  fontFamily: `${BRAND.fonts.nav}, ${BRAND.fonts.navFallback}`,
                  color: BRAND.colors.textBody,
                }}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-6 py-3">
              <a
                href={`tel:${BRAND.business.phone.replace(/[^0-9+]/g, '')}`}
                className="block text-center px-5 py-3 text-sm font-bold uppercase tracking-wider text-white rounded transition-all"
                style={{ backgroundColor: BRAND.colors.primary }}
              >
                Book Now — {BRAND.business.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
