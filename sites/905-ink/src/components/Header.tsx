"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/artists", label: "Artists" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-dark-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span className="font-heading text-4xl text-burnt-red tracking-wider">
              905 INK
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-burnt-red transition-colors font-medium tracking-wide uppercase text-sm"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://905ink.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-burnt-red hover:bg-burnt-red-dark text-white px-6 py-2.5 rounded font-semibold text-sm tracking-wide transition-colors uppercase"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-300 hover:text-burnt-red"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-300 hover:text-burnt-red transition-colors font-medium tracking-wide uppercase text-sm py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://905ink.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-burnt-red hover:bg-burnt-red-dark text-white px-6 py-2.5 rounded font-semibold text-sm tracking-wide transition-colors uppercase text-center"
            >
              Book Now
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
