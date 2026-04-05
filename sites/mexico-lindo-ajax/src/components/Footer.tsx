import Link from 'next/link'
import { businessInfo, deliveryPartners } from '@/lib/brand-tokens'

export default function Footer() {
  return (
    <footer className="bg-[#2C3A1E] text-white">
      <div className="mx-auto max-w-[1200px] px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-[var(--font-heading-var)] text-lg font-bold text-white mb-3">
              México Lindo Ajax
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Authentic Mexican cuisine in the heart of Ajax. Family-made, community-loved — serving Durham Region with real flavours since day one.
            </p>
            <div className="flex gap-4">
              <a
                href={businessInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/60 hover:text-[#D4A024] transition-colors"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={businessInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/60 hover:text-[#D4A024] transition-colors"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[var(--font-body-var)] text-sm font-bold uppercase tracking-[0.08em] text-white mb-3">
              Contact Us
            </h4>
            <address className="not-italic text-white/70 text-sm space-y-1.5">
              <p>{businessInfo.address}</p>
              <p>
                <a href={businessInfo.phoneHref} className="hover:text-[#D4A024] transition-colors">
                  {businessInfo.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${businessInfo.email}`} className="hover:text-[#D4A024] transition-colors">
                  {businessInfo.email}
                </a>
              </p>
            </address>
            <div className="mt-4">
              <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Order Online</p>
              <div className="flex flex-wrap gap-3">
                {deliveryPartners.map((partner) => (
                  <a
                    key={partner.name}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-white/70 hover:text-[#D4A024] transition-colors"
                  >
                    {partner.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-[var(--font-body-var)] text-sm font-bold uppercase tracking-[0.08em] text-white mb-3">
              Hours
            </h4>
            <ul className="text-white/70 text-sm space-y-1.5">
              <li className="flex justify-between">
                <span>Monday</span>
                <span className="text-red-400">Closed</span>
              </li>
              <li className="flex justify-between">
                <span>Tue – Fri</span>
                <span>11:30 AM – 8:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>12:00 PM – 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>12:00 PM – 6:30 PM</span>
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/menu"
                className="text-xs font-bold uppercase tracking-wider text-white/70 hover:text-[#D4A024] transition-colors"
              >
                Menu
              </Link>
              <Link
                href="/about"
                className="text-xs font-bold uppercase tracking-wider text-white/70 hover:text-[#D4A024] transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-xs font-bold uppercase tracking-wider text-white/70 hover:text-[#D4A024] transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} México Lindo Ajax. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            200 Harwood Ave S, Ajax, ON L1S 2H6
          </p>
        </div>
      </div>
    </footer>
  )
}
