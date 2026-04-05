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
    <header className="sticky top-10 z-40 bg-white border-b border-brand-border shadow-sm">
      <div className="max-w-content mx-auto px-6 flex items-center justify-between" style={{ height: '72px' }}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <img
            src={BRAND.images.logo}
            alt="Executive Real Estate Services Ltd."
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading text-sm font-semibold uppercase tracking-wider text-brand-textBody hover:text-brand-primary transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${BRAND.business.phone}`}
            className="ml-4 px-6 py-3 bg-brand-primary text-white font-heading font-semibold text-sm rounded-btn hover:bg-brand-heroBg transition-all duration-300 hover:shadow-lg"
          >
            Call {BRAND.business.phone}
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-brand-textHeading transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-brand-textHeading transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-brand-textHeading transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-brand-border">
          <nav className="max-w-content mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-heading text-base font-semibold uppercase tracking-wider text-brand-textBody hover:text-brand-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${BRAND.business.phone}`}
              className="mt-2 px-6 py-3 bg-brand-primary text-white font-heading font-semibold text-sm text-center rounded-btn"
            >
              Call {BRAND.business.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
