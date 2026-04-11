"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BRAND } from "@/lib/brand-tokens";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/artists", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(255,249,247,0.97)" : "transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(212,160,160,0.12)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        marginTop: "36px",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <Link href="/" className="flex flex-col leading-none">
          <span
            className="font-heading text-2xl md:text-3xl tracking-wide"
            style={{
              color: scrolled ? BRAND.colors.textHeading : BRAND.colors.textLight,
              fontWeight: 500,
              textShadow: scrolled ? "none" : "0 1px 8px rgba(0,0,0,0.4)",
            }}
          >
            Nail Decor
          </span>
          <span
            className="text-[10px] tracking-[0.3em] uppercase"
            style={{
              color: scrolled ? BRAND.colors.primary : BRAND.colors.accent,
              fontWeight: 600,
            }}
          >
            Beaute & Spa
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] tracking-[0.12em] uppercase transition-colors duration-200 hover:opacity-80"
              style={{
                color: scrolled ? BRAND.colors.textBody : BRAND.colors.textLight,
                fontWeight: 600,
                textShadow: scrolled ? "none" : "0 1px 6px rgba(0,0,0,0.3)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={BRAND.business.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] tracking-[0.08em] uppercase transition-all duration-200"
            style={{
              backgroundColor: BRAND.colors.primary,
              color: BRAND.colors.textLight,
              padding: "10px 24px",
              borderRadius: BRAND.spacing.radiusButtons,
              fontWeight: 600,
            }}
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-0.5 transition-all duration-200"
              style={{
                backgroundColor: scrolled ? BRAND.colors.textHeading : BRAND.colors.textLight,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ backgroundColor: "rgba(255,249,247,0.98)" }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] tracking-[0.1em] uppercase py-2 border-b"
              style={{
                color: BRAND.colors.textBody,
                fontWeight: 600,
                borderColor: BRAND.colors.accent,
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={BRAND.business.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-[14px] tracking-[0.08em] uppercase py-3 mt-2"
            style={{
              backgroundColor: BRAND.colors.primary,
              color: BRAND.colors.textLight,
              borderRadius: BRAND.spacing.radiusButtons,
              fontWeight: 600,
            }}
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
