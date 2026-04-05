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
    <header className="sticky top-10 z-40 bg-white/95 backdrop-blur-sm border-b border-brand-border transition-shadow duration-300 shadow-sm">
      <div className="max-w-content mx-auto px-6 flex items-center justify-between" style={{ height: '72px' }}>
        {/* Logo / Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-heading text-lg font-bold"
            style={{ backgroundColor: BRAND.colors.primary }}
          >
            RS
          </div>
          <div>
            <span className="font-heading text-xl font-semibold text-brand-textHeading tracking-tight">
              Randy Selzer
            </span>
            <span className="hidden sm:block text-xs text-brand-textMuted font-body tracking-wide uppercase">
              Sutton Group Summit Realty
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-body text-sm tracking-widest uppercase transition-colors duration-200 ${
                pathname === item.href
                  ? 'text-brand-primary font-bold border-b-2 border-brand-primary pb-1'
                  : 'text-brand-textBody hover:text-brand-primary'
              }`}
              style={{ fontWeight: BRAND.fonts.navWeight, letterSpacing: BRAND.fonts.navLetterSpacing }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`tel:${BRAND.business.phone}`}
            className="ml-2 px-5 py-2.5 rounded-btn text-white font-body text-sm font-semibold transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: BRAND.colors.primary }}
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
          <span className={`block w-6 h-0.5 bg-brand-textHeading transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-brand-textHeading transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-brand-textHeading transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-brand-border shadow-lg">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`py-3 font-body text-sm tracking-widest uppercase border-b border-brand-border/50 ${
                  pathname === item.href ? 'text-brand-primary font-bold' : 'text-brand-textBody'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${BRAND.business.phone}`}
              className="mt-3 text-center px-5 py-3 rounded-btn text-white font-body text-sm font-semibold"
              style={{ backgroundColor: BRAND.colors.primary }}
            >
              Call {BRAND.business.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
