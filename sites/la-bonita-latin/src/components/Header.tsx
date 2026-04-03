"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-offwhite/95 backdrop-blur-sm border-b border-brand-border">
      <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
        <Link
          href="/"
          className="font-[family-name:var(--font-heading)] text-brand-espresso text-2xl font-bold hover:text-brand-red transition-colors duration-300"
        >
          La Bonita
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-[family-name:var(--font-body)] text-brand-brown font-semibold uppercase tracking-wider text-sm hover:text-brand-red transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:9052320915"
            className="bg-brand-red text-white font-[family-name:var(--font-body)] font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-red-dark transition-colors duration-300"
          >
            Call Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-brand-espresso p-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-brand-offwhite border-t border-brand-border px-6 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="font-[family-name:var(--font-body)] text-brand-brown font-semibold uppercase tracking-wider text-sm hover:text-brand-red transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:9052320915"
            className="bg-brand-red text-white font-[family-name:var(--font-body)] font-semibold px-5 py-2.5 rounded-lg text-center hover:bg-brand-red-dark transition-colors duration-300"
          >
            Call Us
          </a>
        </nav>
      )}
    </header>
  );
}
