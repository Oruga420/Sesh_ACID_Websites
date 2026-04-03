"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-[72px]">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5ff4c4650debdf5d1feff481/3c4ef3fa-6386-423b-973c-618e6e64c801/SUPER+FINAL+LOGO+CIRCLE.png"
            alt="Latinito Empanadas logo"
            width={56}
            height={56}
            className="rounded-full"
          />
          <span className="font-heading text-brand-red text-xl font-bold hidden sm:inline">
            LATINITO
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body font-semibold text-brand-dark uppercase tracking-wide text-sm hover:text-brand-red transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://linktr.ee/latinito.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-red text-white font-bold py-2.5 px-6 rounded-lg uppercase text-sm hover:bg-brand-red-dark transition-colors"
          >
            Order Now
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-brand-dark"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
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

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-body font-semibold text-brand-dark uppercase tracking-wide text-sm hover:text-brand-red"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://linktr.ee/latinito.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 bg-brand-red text-white font-bold py-2.5 px-6 rounded-lg uppercase text-sm text-center hover:bg-brand-red-dark transition-colors"
          >
            Order Now
          </a>
        </div>
      )}
    </header>
  );
}
