"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-dark-900 border-b border-dark-700 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://chameleonstudio.ca/wp-content/uploads/2025/11/our-logo-233x71.png"
              alt="Chameleon Studio Logo"
              width={160}
              height={49}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-gold-500 transition-colors text-sm uppercase tracking-wider font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://chameleonstudiosv.as.me"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-500 text-dark-900 px-5 py-2 rounded font-bold text-sm uppercase tracking-wider hover:bg-gold-600 transition-colors"
            >
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-gold-500"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-dark-700 mt-2 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-300 hover:text-gold-500 text-sm uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://chameleonstudiosv.as.me"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 bg-gold-500 text-dark-900 px-5 py-2 rounded font-bold text-sm uppercase tracking-wider text-center hover:bg-gold-600 transition-colors"
            >
              Book Now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
