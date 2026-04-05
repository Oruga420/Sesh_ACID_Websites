'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Listings', href: '/listings' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{ backgroundColor: BRAND.colors.primary, height: '72px' }}
    >
      <div className="max-w-content mx-auto h-full flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span
            className="font-heading text-2xl font-semibold tracking-wide"
            style={{ color: BRAND.colors.secondary }}
          >
            Condos &amp; Castles
          </span>
          <span className="hidden sm:inline text-xs text-white/60 font-body uppercase tracking-widest">
            Realty
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-white/90 hover:text-white transition-colors"
              style={{
                fontWeight: BRAND.fonts.navWeight,
                textTransform: BRAND.fonts.navTextTransform,
                letterSpacing: BRAND.fonts.navLetterSpacing,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="font-body text-sm font-semibold px-5 py-2 transition-all hover:opacity-90"
            style={{
              backgroundColor: BRAND.colors.secondary,
              color: BRAND.colors.textHeading,
              borderRadius: BRAND.spacing.radiusButtons,
            }}
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden absolute top-[72px] left-0 right-0 shadow-xl"
          style={{ backgroundColor: BRAND.colors.primary }}
        >
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-body text-sm text-white/90 hover:text-white hover:bg-white/10 transition-colors px-6 py-3"
                style={{
                  fontWeight: BRAND.fonts.navWeight,
                  textTransform: BRAND.fonts.navTextTransform,
                  letterSpacing: BRAND.fonts.navLetterSpacing,
                }}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-6 py-3">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-block font-body text-sm font-semibold px-5 py-2"
                style={{
                  backgroundColor: BRAND.colors.secondary,
                  color: BRAND.colors.textHeading,
                  borderRadius: BRAND.spacing.radiusButtons,
                }}
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
