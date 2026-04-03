"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Menu", href: "/menu" },
  { label: "Our Story", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-[family-name:var(--font-heading)] text-xl font-bold text-brand-heading tracking-tight"
        >
          Esto es Colombia
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-[family-name:var(--font-montserrat)] text-sm font-medium uppercase tracking-widest text-brand-heading hover:text-brand-blue transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://wa.me/19054613895"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-yellow text-brand-black font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wider px-6 py-3 hover:bg-brand-yellow-hover transition-colors"
          >
            Reserve
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-brand-heading transition-transform ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-brand-heading transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-brand-heading transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-white border-t border-brand-border px-6 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-[family-name:var(--font-montserrat)] text-sm font-medium uppercase tracking-widest text-brand-heading"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://wa.me/19054613895"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center bg-brand-yellow text-brand-black font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wider px-6 py-3"
          >
            Reserve
          </a>
        </nav>
      )}
    </header>
  );
}
