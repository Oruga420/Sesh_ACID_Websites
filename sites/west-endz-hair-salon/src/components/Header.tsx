'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BRAND } from '@/lib/brand-tokens';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Team', href: '/team' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40"
      style={{
        backgroundColor: BRAND.colors.bgCard,
        borderBottom: `1px solid ${BRAND.colors.bgAlt}`,
        height: '72px',
      }}
    >
      <div
        className="mx-auto flex items-center justify-between h-full"
        style={{ maxWidth: BRAND.spacing.contentMaxWidth, padding: '0 1.5rem' }}
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src={BRAND.images.logo}
            alt="West Endz Hair Salon"
            width={220}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm transition-colors duration-200 hover:opacity-80"
              style={{
                fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}`,
                fontWeight: BRAND.fonts.navWeight,
                textTransform: BRAND.fonts.navTextTransform,
                letterSpacing: BRAND.fonts.navLetterSpacing,
                color: BRAND.colors.textHeading,
              }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:4162552131"
            className="text-sm transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: BRAND.colors.primary,
              color: '#FFFFFF',
              padding: '10px 22px',
              borderRadius: BRAND.spacing.radiusButtons,
              fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}`,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontSize: '0.8rem',
            }}
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            {mobileOpen ? (
              <path d="M8 8L20 20M8 20L20 8" stroke={BRAND.colors.textHeading} strokeWidth="2" strokeLinecap="round" />
            ) : (
              <>
                <path d="M4 8h20M4 14h20M4 20h20" stroke={BRAND.colors.textHeading} strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav
          className="md:hidden border-t"
          style={{
            backgroundColor: BRAND.colors.bgCard,
            borderColor: BRAND.colors.bgAlt,
          }}
        >
          <div className="flex flex-col py-4 px-6 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-sm transition-colors"
                style={{
                  fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}`,
                  fontWeight: BRAND.fonts.navWeight,
                  textTransform: BRAND.fonts.navTextTransform,
                  letterSpacing: BRAND.fonts.navLetterSpacing,
                  color: BRAND.colors.textHeading,
                }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:4162552131"
              className="mt-2 text-center text-sm transition-all"
              style={{
                backgroundColor: BRAND.colors.primary,
                color: '#FFFFFF',
                padding: '12px 22px',
                borderRadius: BRAND.spacing.radiusButtons,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Book Now
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
