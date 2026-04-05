import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: BRAND.colors.bgDark, color: BRAND.colors.textLight }}>
      <div className="mx-auto py-16 px-6" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: BRAND.colors.textLight, fontFamily: 'var(--font-heading)' }}>
              MorCan Financial
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#94A3B8' }}>
              Since 1997, helping Ontario families navigate the mortgage landscape with access to {BRAND.business.lenders} lending institutions.
            </p>
            <p className="text-xs" style={{ color: '#64748B' }}>FSRA License #{BRAND.business.fsra}</p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: BRAND.colors.accent }}>Services</h4>
            <ul className="space-y-2">
              {['Pre-Approval', 'First Time Buyers', 'Refinancing', 'Commercial Mortgages', 'Private Lending', 'Debt Consolidation'].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-sm transition-colors hover:underline" style={{ color: '#94A3B8' }}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: BRAND.colors.accent }}>Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Resources', href: '/resources' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors hover:underline" style={{ color: '#94A3B8' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: BRAND.colors.accent }}>Contact</h4>
            <div className="space-y-3 text-sm" style={{ color: '#94A3B8' }}>
              <p>{BRAND.business.address}</p>
              <p>
                <a href={`tel:${BRAND.business.phone}`} className="hover:underline">{BRAND.business.phone}</a>
              </p>
              <p>
                <a href={`mailto:${BRAND.business.email}`} className="hover:underline">{BRAND.business.email}</a>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-5">
              <a href={BRAND.business.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#94A3B8" className="hover:fill-white transition-colors">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href={BRAND.business.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#94A3B8" className="hover:fill-white transition-colors">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href={BRAND.business.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#94A3B8" className="hover:fill-white transition-colors">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href={BRAND.business.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#94A3B8" className="hover:fill-white transition-colors">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-xs" style={{ borderColor: '#1E3A5F', color: '#64748B' }}>
          <p>&copy; {new Date().getFullYear()} MorCan Financial Inc. All rights reserved. FSRA License #{BRAND.business.fsra}</p>
        </div>
      </div>
    </footer>
  );
}
