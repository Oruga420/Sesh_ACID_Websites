"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-8 z-40 bg-brand-black/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images-prod-1.getsquire.com/7a5acb58-19e8-4ed8-b12d-8dacb7f0a3c6_untitled-design-5.png"
              alt="Scarborough Fades logo"
              className="h-9 w-auto"
            />
            <span className="font-display text-lg font-bold text-white uppercase tracking-wider">
              Scarborough Fades
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-silver hover:text-white transition-colors uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://getsquire.com/discover/barbershop/scarborough-fades-scarborough"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-brand-white text-black text-sm font-bold px-5 py-2.5 rounded transition-colors uppercase tracking-wider"
            >
              Book Now
            </a>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-white/5 bg-brand-black">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-base font-medium text-brand-silver hover:text-white transition-colors uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://getsquire.com/discover/barbershop/scarborough-fades-scarborough"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-white text-black font-bold px-5 py-3 rounded transition-colors uppercase tracking-wider"
            >
              Book Now
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
