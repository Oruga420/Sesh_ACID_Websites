'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/team', label: 'Our Team' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-8 z-50 bg-white shadow-sm">
      <div className="max-w-content mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src={BRAND.images.logo}
            alt="EFX Salon and Spa"
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading text-sm tracking-[0.08em] uppercase text-brand-textBody hover:text-brand-primary transition-colors duration-200"
              style={{ fontWeight: BRAND.fonts.navWeight }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="font-heading text-sm uppercase tracking-wide px-6 py-3 text-white transition-all duration-200 hover:opacity-90"
            style={{
              backgroundColor: BRAND.colors.primary,
              borderRadius: BRAND.spacing.radiusButtons,
              fontWeight: 600,
            }}
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 transition-transform"
            style={{ backgroundColor: BRAND.colors.primary }}
          />
          <span
            className="block w-6 h-0.5"
            style={{ backgroundColor: BRAND.colors.primary }}
          />
          <span
            className="block w-6 h-0.5 transition-transform"
            style={{ backgroundColor: BRAND.colors.primary }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 font-heading text-sm uppercase tracking-[0.08em] text-brand-textBody hover:text-brand-primary"
              style={{ fontWeight: BRAND.fonts.navWeight }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mt-3 text-center font-heading text-sm uppercase tracking-wide px-6 py-3 text-white"
            style={{
              backgroundColor: BRAND.colors.primary,
              borderRadius: BRAND.spacing.radiusButtons,
              fontWeight: 600,
            }}
            onClick={() => setMobileOpen(false)}
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}
