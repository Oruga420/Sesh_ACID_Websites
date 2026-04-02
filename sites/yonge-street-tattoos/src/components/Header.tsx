'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/artists', label: 'Artists' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-brand-black/95 backdrop-blur-sm border-b border-brand-charcoal">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5f69731f8fbe6f65c610e1e4/1600898091086-KY2W9SWXQHUW5OMXCNYY/yst_websiteheader.png"
            alt="Yonge Street Tattoos"
            width={220}
            height={50}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-brand-white/80 hover:text-brand-gold uppercase text-sm tracking-widest font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.instagram.com/yongestreettattoos/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-xs"
          >
            Book via Instagram
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-brand-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-dark border-t border-brand-charcoal">
          <nav className="flex flex-col py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-6 py-3 text-brand-white/80 hover:text-brand-gold uppercase text-sm tracking-widest"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/yongestreettattoos/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-6 mt-3 btn-gold text-xs text-center"
            >
              Book via Instagram
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
