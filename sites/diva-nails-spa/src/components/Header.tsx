'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BRAND } from '@/lib/brand-tokens';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(255,255,255,0.95)' : '#FFFFFF',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'rgba(212,160,185,0.25)' : 'rgba(212,160,185,0.12)'}`,
        height: '72px',
      }}
    >
      <div className="max-w-content mx-auto h-full flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span
            className="font-heading text-2xl tracking-wide"
            style={{ color: BRAND.colors.textHeading, fontWeight: 600, letterSpacing: '0.06em' }}
          >
            DIVA NAILS
          </span>
          <span
            className="hidden sm:inline font-heading text-lg"
            style={{ color: BRAND.colors.primary, fontWeight: 400 }}
          >
            &amp; Head Spa
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors duration-200"
                style={{
                  fontFamily: `'Nunito Sans', system-ui, sans-serif`,
                  fontSize: '13px',
                  fontWeight: BRAND.fonts.navWeight,
                  textTransform: BRAND.fonts.navTextTransform,
                  letterSpacing: BRAND.fonts.navLetterSpacing,
                  color: active ? BRAND.colors.primary : BRAND.colors.textBody,
                  borderBottom: active ? `2px solid ${BRAND.colors.primary}` : '2px solid transparent',
                  paddingBottom: '4px',
                }}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={BRAND.business.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-200 hover:opacity-90"
            style={{
              backgroundColor: BRAND.colors.primary,
              color: '#FFFFFF',
              borderRadius: BRAND.spacing.radiusButtons,
              padding: '10px 24px',
              fontFamily: `'Nunito Sans', system-ui, sans-serif`,
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none',
              letterSpacing: '0.05em',
            }}
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 transition-transform duration-300"
            style={{
              backgroundColor: BRAND.colors.textHeading,
              transform: mobileOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
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
              transform: mobileOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden absolute top-[72px] left-0 right-0 border-t py-6 px-6 flex flex-col gap-4"
          style={{
            backgroundColor: 'rgba(255,255,255,0.98)',
            backdropFilter: 'blur(10px)',
            borderColor: 'rgba(212,160,185,0.2)',
          }}
        >
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="py-2"
                style={{
                  fontFamily: `'Nunito Sans', system-ui, sans-serif`,
                  fontSize: '15px',
                  fontWeight: active ? 600 : 400,
                  color: active ? BRAND.colors.primary : BRAND.colors.textBody,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={BRAND.business.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center mt-2"
            style={{
              backgroundColor: BRAND.colors.primary,
              color: '#FFFFFF',
              borderRadius: BRAND.spacing.radiusButtons,
              padding: '12px 24px',
              fontWeight: 600,
              fontSize: '14px',
              textDecoration: 'none',
            }}
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
