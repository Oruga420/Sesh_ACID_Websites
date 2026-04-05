import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';
import SocialIcons from './SocialIcons';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: BRAND.colors.bgDark, color: BRAND.colors.textLight }}>
      <div
        className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-10"
        style={{ maxWidth: BRAND.spacing.contentMaxWidth, padding: '64px 24px 40px' }}
      >
        {/* Col 1 — Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div
              className="flex items-center justify-center rounded"
              style={{ width: 36, height: 36, backgroundColor: BRAND.colors.primary }}
            >
              <span className="text-base font-bold" style={{ color: BRAND.colors.textLight }}>A</span>
            </div>
            <span className="text-lg font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>
              AIAC Mortgages
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: BRAND.colors.textMuted }}>
            Specializing in mortgage solutions for any income, any credit. Licensed Ontario brokerage helping people achieve homeownership.
          </p>
          <p className="text-xs mt-3" style={{ color: BRAND.colors.textMuted }}>{BRAND.business.license}</p>
          <p className="text-xs" style={{ color: BRAND.colors.textMuted }}>
            Regulated by FSRAO
          </p>
        </div>

        {/* Col 2 — Services */}
        <div>
          <h4 className="text-sm font-semibold mb-4 tracking-wide uppercase" style={{ color: BRAND.colors.accent }}>
            Services
          </h4>
          <ul className="space-y-2 text-sm" style={{ color: BRAND.colors.textMuted }}>
            {['Bad Credit Mortgages', 'Self-Employed Mortgages', 'New Immigrant Mortgages', 'Refinancing', 'Debt Consolidation', 'Private Lending'].map((s) => (
              <li key={s}>
                <Link href="/services" className="hover:text-white transition-colors">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Quick Links */}
        <div>
          <h4 className="text-sm font-semibold mb-4 tracking-wide uppercase" style={{ color: BRAND.colors.accent }}>
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm" style={{ color: BRAND.colors.textMuted }}>
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/resources" className="hover:text-white transition-colors">Resources &amp; FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Col 4 — Contact */}
        <div>
          <h4 className="text-sm font-semibold mb-4 tracking-wide uppercase" style={{ color: BRAND.colors.accent }}>
            Contact
          </h4>
          <div className="space-y-3 text-sm" style={{ color: BRAND.colors.textMuted }}>
            <a href="tel:3652319115" className="flex items-center gap-2 hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {BRAND.business.phone}
            </a>
            <a href={`mailto:${BRAND.business.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              {BRAND.business.email}
            </a>
            <p className="flex items-start gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {BRAND.business.address}
            </p>
          </div>

          <div className="mt-6">
            <SocialIcons />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
        <div
          className="mx-auto flex flex-col sm:flex-row items-center justify-between py-4 text-xs gap-2"
          style={{ maxWidth: BRAND.spacing.contentMaxWidth, padding: '16px 24px', color: BRAND.colors.textMuted }}
        >
          <p>&copy; {new Date().getFullYear()} Any Income Any Credit Mortgages. All rights reserved.</p>
          <p>{BRAND.business.license} &middot; Regulated by FSRAO</p>
        </div>
      </div>
    </footer>
  );
}
