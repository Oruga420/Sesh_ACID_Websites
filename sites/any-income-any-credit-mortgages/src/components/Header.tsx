'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BRAND } from '@/lib/brand-tokens';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-40 border-b"
      style={{
        backgroundColor: BRAND.colors.bgCard,
        borderColor: BRAND.colors.border,
        height: '72px',
      }}
    >
      <div
        className="mx-auto flex items-center justify-between h-full"
        style={{ maxWidth: BRAND.spacing.contentMaxWidth, padding: '0 24px' }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div
            className="flex items-center justify-center rounded"
            style={{
              width: 40,
              height: 40,
              backgroundColor: BRAND.colors.primary,
            }}
          >
            <span className="text-lg font-bold" style={{ color: BRAND.colors.textLight }}>
              A
            </span>
          </div>
          <div className="hidden sm:block">
            <span
              className="text-lg font-semibold"
              style={{ color: BRAND.colors.primary, fontFamily: 'var(--font-heading)' }}
            >
              AIAC Mortgages
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm transition-colors duration-200"
                style={{
                  fontWeight: BRAND.fonts.navWeight,
                  letterSpacing: BRAND.fonts.navLetterSpacing,
                  color: isActive ? BRAND.colors.primary : BRAND.colors.textBody,
                  borderBottom: isActive ? `2px solid ${BRAND.colors.primary}` : '2px solid transparent',
                  paddingBottom: '4px',
                }}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href="tel:3652319115"
            className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded transition-all duration-200 hover:opacity-90"
            style={{
              backgroundColor: BRAND.colors.primary,
              color: BRAND.colors.textLight,
              borderRadius: BRAND.spacing.radiusButtons,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            {BRAND.business.phone}
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={BRAND.colors.textHeading} strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <>
                <path d="M3 6h18M3 12h18M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{ backgroundColor: BRAND.colors.bgCard, borderColor: BRAND.colors.border }}
        >
          <nav className="flex flex-col p-4 gap-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base py-2 px-3 rounded transition-colors"
                  style={{
                    fontWeight: isActive ? 700 : BRAND.fonts.navWeight,
                    color: isActive ? BRAND.colors.primary : BRAND.colors.textBody,
                    backgroundColor: isActive ? BRAND.colors.bgAlt : 'transparent',
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href="tel:3652319115"
              className="text-center py-3 px-5 rounded font-semibold mt-2"
              style={{
                backgroundColor: BRAND.colors.primary,
                color: BRAND.colors.textLight,
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
