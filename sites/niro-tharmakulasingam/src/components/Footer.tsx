import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';
import { InstagramIcon, FacebookIcon, YoutubeIcon, PhoneIcon, EmailIcon, MapPinIcon } from './SocialIcons';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: BRAND.colors.bgHero, color: BRAND.colors.textLight }}>
      <div className="mx-auto px-6 py-16" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={BRAND.images.logo} alt="Niro Tharmakulasingam" className="h-8 mb-4" />
            <p className="text-sm leading-relaxed" style={{ color: BRAND.colors.textMuted }}>
              Your trusted RE/MAX broker in Scarborough. Client focused, results driven — serving the Greater Toronto Area with integrity and expertise.
            </p>
            <div className="flex gap-4 mt-6">
              <a href={BRAND.contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
                <InstagramIcon color={BRAND.colors.textMuted} />
              </a>
              <a href={BRAND.contact.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
                <FacebookIcon color={BRAND.colors.textMuted} />
              </a>
              <a href="https://www.youtube.com/embed/kl6K2e_c4vc" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:opacity-80 transition-opacity">
                <YoutubeIcon color={BRAND.colors.textMuted} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: BRAND.fonts.heading, color: BRAND.colors.textLight }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Niro', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Listings', href: '/listings' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:underline transition-colors" style={{ color: BRAND.colors.textMuted }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: BRAND.fonts.heading, color: BRAND.colors.textLight }}>
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <PhoneIcon color={BRAND.colors.accent} size={16} />
                <a href={`tel:${BRAND.contact.phone}`} className="text-sm hover:underline" style={{ color: BRAND.colors.textMuted }}>
                  {BRAND.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <EmailIcon color={BRAND.colors.accent} size={16} />
                <a href={`mailto:${BRAND.contact.email}`} className="text-sm hover:underline" style={{ color: BRAND.colors.textMuted }}>
                  {BRAND.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPinIcon color={BRAND.colors.accent} size={16} />
                <span className="text-sm" style={{ color: BRAND.colors.textMuted }}>
                  {BRAND.contact.address}
                </span>
              </li>
            </ul>
          </div>

          {/* Areas Served */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: BRAND.fonts.heading, color: BRAND.colors.textLight }}>
              Areas Served
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Toronto', 'Scarborough', 'Markham', 'Vaughan', 'Ajax', 'Pickering', 'Brampton', 'Mississauga'].map((area) => (
                <span
                  key={area}
                  className="text-xs px-3 py-1 rounded-full"
                  style={{ backgroundColor: 'rgba(26, 107, 181, 0.15)', color: BRAND.colors.accent }}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: `1px solid rgba(255,255,255,0.1)` }}>
          <p className="text-xs" style={{ color: BRAND.colors.textMuted }}>
            &copy; {new Date().getFullYear()} Niro Tharmakulasingam, RE/MAX Community Realty Inc. Brokerage. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: BRAND.colors.textMuted }}>
            1265 Morningside Ave, Suite 203, Scarborough, ON M1B 3V9
          </p>
        </div>
      </div>
    </footer>
  );
}
