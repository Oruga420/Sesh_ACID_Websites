'use client'

import { useState } from 'react'
import Link from 'next/link'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-8 z-40 bg-white border-b border-[#F5F5F5]">
      <div className="mx-auto max-w-[1200px] px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span
            className="font-[var(--font-heading-var)] text-xl md:text-2xl font-bold text-[#212529] tracking-tight"
          >
            Mexico Lindo Express
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-[var(--font-heading-var)] text-xs font-semibold uppercase tracking-[0.05em] text-[#212529] hover:text-[#5CB85C] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://mexicolindoexpress.gotoeat.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#5CB85C] text-white text-xs font-semibold uppercase tracking-[0.05em] px-5 py-2.5 rounded-[4px] hover:bg-[#4a9a4a] transition-colors"
          >
            Order Online
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle navigation menu"
        >
          <span className={`block w-6 h-0.5 bg-[#212529] transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#212529] transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#212529] transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-[#F5F5F5] px-4 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-[var(--font-heading-var)] text-sm font-semibold uppercase tracking-[0.05em] text-[#212529] hover:text-[#5CB85C] transition-colors border-b border-[#F5F5F5]"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://mexicolindoexpress.gotoeat.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 text-center bg-[#5CB85C] text-white text-sm font-semibold uppercase tracking-[0.05em] px-5 py-3 rounded-[4px] hover:bg-[#4a9a4a] transition-colors"
          >
            Order Online
          </a>
        </nav>
      )}
    </header>
  )
}
