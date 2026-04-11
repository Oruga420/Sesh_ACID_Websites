'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BRAND } from '@/lib/brand-tokens';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-40 bg-white border-b"
      style={{ borderBottomColor: BRAND.colors.bgAlt }}
    >
      <div className="mx-auto flex items-center justify-between px-6 py-4" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
        {/* Logo — text-based */}
        <Link href="/" className="flex flex-col leading-tight">
          <span
            className="font-heading text-2xl font-semibold tracking-tight"
            style={{ color: BRAND.colors.primary }}
          >
            Star Beauty
          </span>
          <span
            className="text-[10px] font-body tracking-[0.25em] uppercase"
            style={{ color: BRAND.colors.textMuted }}
          >
            Hair Salon
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body transition-colors duration-200"
              style={{
                fontWeight: BRAND.fonts.navWeight,
                textTransform: BRAND.fonts.navTextTransform,
                letterSpacing: BRAND.fonts.navLetterSpacing,
                fontSize: '13px',
                color: pathname === link.href ? BRAND.colors.primary : BRAND.colors.textBody,
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${BRAND.business.phone}`}
            className="font-body font-semibold px-5 py-2 rounded-lg transition-all duration-200 hover:shadow-lg"
            style={{
              backgroundColor: BRAND.colors.primary,
              color: '#FFFFFF',
              borderRadius: BRAND.spacing.radiusButtons,
              boxShadow: '0 2px 12px rgba(194,24,91,0.25)',
            }}
          >
            Call Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 transition-transform duration-300"
            style={{
              backgroundColor: BRAND.colors.textHeading,
              transform: mobileOpen ? 'rotate(45deg) translateY(4px)' : 'none',
            }}
          />
          <span
            className="block w-6 h-0.5 transition-opacity duration-300"
            style={{
              backgroundColor: BRAND.colors.textHeading,
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-transform duration-300"
            style={{
              backgroundColor: BRAND.colors.textHeading,
              transform: mobileOpen ? 'rotate(-45deg) translateY(-4px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile slide-in menu */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 top-[72px] z-50 animate-fade-in"
          style={{ backgroundColor: 'rgba(45,27,48,0.4)' }}
          onClick={() => setMobileOpen(false)}
        >
          <nav
            className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl p-8 flex flex-col gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-body text-lg"
                style={{
                  fontWeight: pathname === link.href ? 700 : 400,
                  color: pathname === link.href ? BRAND.colors.primary : BRAND.colors.textBody,
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${BRAND.business.phone}`}
              className="mt-4 text-center font-body font-semibold px-5 py-3 rounded-lg"
              style={{
                backgroundColor: BRAND.colors.primary,
                color: '#FFFFFF',
                borderRadius: BRAND.spacing.radiusButtons,
              }}
            >
              Call {BRAND.business.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
