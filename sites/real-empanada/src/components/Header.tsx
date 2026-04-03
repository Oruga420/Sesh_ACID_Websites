"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Our Story", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream border-b border-muted/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="https://realempanada.com/wp-content/uploads/2020/06/real-empanda-log.png"
            alt="Real Empanada logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <span className="font-heading text-xl font-bold text-heading hidden sm:block">
            Real Empanada
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-body hover:text-primary font-body font-semibold transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://www.ubereats.com/store/real-empanada-company/-WODgvr7Wa6qSJErIfRq3A"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary-dark text-white font-bold py-2.5 px-6 rounded-lg transition-colors duration-200 uppercase text-sm tracking-wide"
          >
            Order Now
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-heading"
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

      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-muted/30 px-4 pb-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-3 text-body hover:text-primary font-semibold border-b border-muted/20"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://www.ubereats.com/store/real-empanada-company/-WODgvr7Wa6qSJErIfRq3A"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-center bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg uppercase text-sm"
          >
            Order Now
          </a>
        </div>
      )}
    </header>
  );
}
