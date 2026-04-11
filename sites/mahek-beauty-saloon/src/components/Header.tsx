'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BRAND } from '@/lib/brand-tokens';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Team', href: '/team' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-primary">
      <div className="mx-auto flex max-w-[1140px] items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={BRAND.images.logo}
            alt={BRAND.business.name}
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
            unoptimized
          />
          <span
            className="hidden text-brand-text-on-dark sm:block"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '18px',
              fontWeight: 400,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            Mahek Beauty
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-brand-text-on-dark transition-colors hover:text-brand-secondary"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '13px',
                fontWeight: 400,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${BRAND.business.locations[0].phone}`}
            className="bg-brand-secondary px-6 py-2.5 text-brand-text-on-dark transition-opacity hover:opacity-90"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition-transform ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white transition-transform ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="border-t border-white/10 bg-brand-primary px-6 pb-6 lg:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block border-b border-white/5 py-3 text-brand-text-on-dark"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '14px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${BRAND.business.locations[0].phone}`}
            className="mt-4 block bg-brand-secondary px-6 py-3 text-center text-brand-text-on-dark"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Book Now
          </a>
        </nav>
      )}
    </header>
  );
}
