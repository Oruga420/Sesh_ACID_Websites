import { BRAND } from '@/lib/brand-tokens';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: BRAND.colors.bgDark }}>
      {/* Top CTA Bar */}
      <div
        className="py-12 text-center"
        style={{ background: `linear-gradient(135deg, ${BRAND.colors.primary} 0%, ${BRAND.colors.accent} 100%)` }}
      >
        <p
          className="text-[11px] tracking-[0.3em] uppercase mb-3"
          style={{ color: BRAND.colors.bgDark, fontFamily: BRAND.fonts.body, fontWeight: 500 }}
        >
          Ready for your transformation?
        </p>
        <a
          href={BRAND.business.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 text-sm tracking-[0.1em] uppercase font-semibold transition-all hover:scale-105"
          style={{
            backgroundColor: BRAND.colors.bgDark,
            color: BRAND.colors.primary,
            borderRadius: BRAND.spacing.radiusButtons,
          }}
        >
          Book Your Appointment
        </a>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3
              className="text-3xl tracking-[0.1em] mb-4"
              style={{ color: BRAND.colors.textLight, fontFamily: BRAND.fonts.heading, fontWeight: 400 }}
            >
              TAYA
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: BRAND.colors.accentSoft }}>
              Professional and trendy Toronto hair salon specializing in K-beauty.
              Expert stylists delivering personalized looks that enhance your unique beauty.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href={BRAND.business.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: BRAND.colors.primary }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href={BRAND.business.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: BRAND.colors.primary }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-[11px] tracking-[0.3em] uppercase mb-6"
              style={{ color: BRAND.colors.primary, fontFamily: BRAND.fonts.body, fontWeight: 500 }}
            >
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: 'Services / 서비스', href: '/services' },
                { label: 'Our Stylists / 스타일리스트', href: '/artists' },
                { label: 'Gallery / 갤러리', href: '/gallery' },
                { label: 'Contact / 연락처', href: '/contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:opacity-70 transition-opacity"
                  style={{ color: BRAND.colors.accentSoft }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Locations */}
          <div>
            <h4
              className="text-[11px] tracking-[0.3em] uppercase mb-6"
              style={{ color: BRAND.colors.primary, fontFamily: BRAND.fonts.body, fontWeight: 500 }}
            >
              Our Locations
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium" style={{ color: BRAND.colors.textLight }}>Sheppard Location</p>
                <p className="text-sm" style={{ color: BRAND.colors.accentSoft }}>21 Spring Garden Ave, North York</p>
                <p className="text-sm" style={{ color: BRAND.colors.accentSoft }}>{BRAND.business.phone}</p>
              </div>
              <div>
                <p className="text-sm font-medium" style={{ color: BRAND.colors.textLight }}>Park Home Location</p>
                <p className="text-sm" style={{ color: BRAND.colors.accentSoft }}>6 Park Home Ave, North York</p>
                <p className="text-sm" style={{ color: BRAND.colors.accentSoft }}>{BRAND.business.phone2}</p>
              </div>
              <div>
                <p className="text-sm" style={{ color: BRAND.colors.textMuted }}>Mon–Sat: 10 AM – 7 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: 'rgba(200,168,124,0.2)' }}>
          <p className="text-xs" style={{ color: BRAND.colors.textMuted }}>
            &copy; {new Date().getFullYear()} TAYA Hair Salon. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: BRAND.colors.textMuted }}>
            We serve our community in English and Korean / 영어와 한국어로 서비스합니다
          </p>
        </div>
      </div>
    </footer>
  );
}
