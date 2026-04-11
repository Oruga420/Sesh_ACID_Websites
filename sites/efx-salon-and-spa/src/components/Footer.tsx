import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: BRAND.colors.primary }} className="text-white">
      <div className="max-w-content mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Brand */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-white mb-4">
              EFX Salon &amp; Spa
            </h3>
            <p className="font-body text-white/80 text-base leading-relaxed mb-4">
              Where everyone is welcome. Premium beauty services with clean,
              sustainable products in the heart of Etobicoke.
            </p>
            <p className="font-body text-white/60 text-sm">
              Kerastase Partner &middot; Eufora &middot; Great Lengths
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading text-sm uppercase tracking-[0.12em] text-white/60 mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { href: '/services', label: 'Services' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/team', label: 'Our Team' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-white/80 hover:text-white transition-colors text-base"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact & Social */}
          <div>
            <h4 className="font-heading text-sm uppercase tracking-[0.12em] text-white/60 mb-4">
              Visit Us
            </h4>
            <address className="font-body not-italic text-white/80 text-base leading-relaxed mb-4">
              265 Wincott Dr.<br />
              Etobicoke, ON M9R 2R7<br />
              <a href="tel:+14162459333" className="hover:text-white transition-colors">
                (416) 245-9333
              </a>
              <br />
              <a href="mailto:Efxsalonandspa@gmail.com" className="hover:text-white transition-colors">
                Efxsalonandspa@gmail.com
              </a>
            </address>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/efxsalonandspa.ltd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/people/Efx-salon-and-spa/100072509013147/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-white/50 text-sm">
            &copy; {new Date().getFullYear()} EFX Salon and Spa Ltd. All rights reserved.
          </p>
          <p className="font-body text-white/40 text-xs">
            Preview built by Sesh ACID
          </p>
        </div>
      </div>
    </footer>
  );
}
