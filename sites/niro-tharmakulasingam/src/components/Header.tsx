'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BRAND } from '@/lib/brand-tokens';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Listings', href: '/listings' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-50"
      style={{ backgroundColor: BRAND.colors.primary, height: '72px' }}
    >
      <div className="mx-auto flex h-full items-center justify-between px-6" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={BRAND.images.logo}
            alt="Niro Tharmakulasingam - RE/MAX"
            className="h-8"
            style={{ filter: 'brightness(1)' }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm transition-colors duration-300"
              style={{
                color: pathname === item.href ? BRAND.colors.secondary : BRAND.colors.textLight,
                fontFamily: BRAND.fonts.heading,
                fontWeight: BRAND.fonts.navWeight,
                textTransform: BRAND.fonts.navTextTransform,
                letterSpacing: BRAND.fonts.navLetterSpacing,
                borderBottom: pathname === item.href ? `2px solid ${BRAND.colors.secondary}` : '2px solid transparent',
                paddingBottom: '4px',
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm transition-all duration-300 hover:opacity-90"
            style={{
              backgroundColor: BRAND.colors.secondary,
              color: BRAND.colors.textLight,
              fontFamily: BRAND.fonts.heading,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              padding: '10px 24px',
              borderRadius: BRAND.spacing.radiusButtons,
            }}
          >
            Book Consultation
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="block w-6 h-0.5 bg-white transition-transform" style={{ transform: mobileOpen ? 'rotate(45deg) translateY(4px)' : 'none' }} />
          <span className="block w-6 h-0.5 bg-white transition-opacity" style={{ opacity: mobileOpen ? 0 : 1 }} />
          <span className="block w-6 h-0.5 bg-white transition-transform" style={{ transform: mobileOpen ? 'rotate(-45deg) translateY(-4px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav
          className="md:hidden absolute top-full left-0 w-full shadow-lg"
          style={{ backgroundColor: BRAND.colors.primary }}
        >
          <div className="flex flex-col px-6 py-4 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm transition-colors"
                style={{
                  color: pathname === item.href ? BRAND.colors.secondary : BRAND.colors.textLight,
                  fontFamily: BRAND.fonts.heading,
                  fontWeight: BRAND.fonts.navWeight,
                  textTransform: BRAND.fonts.navTextTransform,
                  letterSpacing: BRAND.fonts.navLetterSpacing,
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-center transition-all hover:opacity-90"
              style={{
                backgroundColor: BRAND.colors.secondary,
                color: BRAND.colors.textLight,
                fontWeight: 600,
                textTransform: 'uppercase',
                padding: '12px 24px',
                borderRadius: BRAND.spacing.radiusButtons,
              }}
            >
              Book Consultation
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
