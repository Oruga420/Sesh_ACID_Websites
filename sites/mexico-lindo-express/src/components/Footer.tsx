import Link from 'next/link'
import { businessInfo, deliveryPartners } from '@/lib/brand-tokens'

export default function Footer() {
  return (
    <footer className="bg-[#2A2A2A] text-white">
      <div className="mx-auto max-w-[1200px] px-4 py-12">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-[var(--font-heading-var)] text-lg font-bold text-white mb-3">
              Mexico Lindo Express
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Authentic Mexican street food made by a Mexican chef, bringing the real flavors of Mexico to Scarborough.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[var(--font-heading-var)] text-sm font-semibold uppercase tracking-[0.05em] text-white mb-3">
              Contact
            </h4>
            <address className="not-italic text-white/70 text-sm space-y-1.5">
              <p>{businessInfo.address}</p>
              <p>
                <a
                  href={businessInfo.phoneHref}
                  className="hover:text-[#5CB85C] transition-colors"
                >
                  {businessInfo.phone}
                </a>
              </p>
            </address>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-[var(--font-heading-var)] text-sm font-semibold uppercase tracking-[0.05em] text-white mb-3">
              Hours
            </h4>
            <ul className="text-white/70 text-sm space-y-1">
              <li>Sun: {businessInfo.hours.sunday}</li>
              <li>Mon: {businessInfo.hours.monday}</li>
              <li>Tue - Fri: {businessInfo.hours.tuesday}</li>
              <li>Sat: {businessInfo.hours.saturday}</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Social + Delivery */}
            <div className="flex items-center gap-4 text-sm">
              <a
                href={businessInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#5CB85C] transition-colors"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href={businessInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#5CB85C] transition-colors"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <span className="text-white/30">|</span>
              {deliveryPartners.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#5CB85C] transition-colors"
                >
                  {partner.name}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-white/40 text-xs">
              &copy; {new Date().getFullYear()} Mexico Lindo Express. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
