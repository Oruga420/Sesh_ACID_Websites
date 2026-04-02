import type { Metadata } from 'next'
import SectionDivider from '@/components/SectionDivider'
import { businessInfo, deliveryPartners } from '@/lib/brand-tokens'

export const metadata: Metadata = {
  title: 'Contact | Mexico Lindo Express',
  description:
    'Visit us at 2586 Birchmount Rd, Scarborough. Call (647) 692-0938. Order via Uber Eats or SkipTheDishes.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#2A2A2A] py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4 text-center">
          <p className="font-[var(--font-heading-var)] text-xs uppercase tracking-[0.15em] text-[#D4A843] font-semibold mb-2">
            Mexico Lindo Express
          </p>
          <h1 className="font-[var(--font-heading-var)] text-4xl md:text-5xl font-bold text-white mb-4">
            Contact &amp; Location
          </h1>
          <div className="flex justify-center py-4">
            <div className="w-[50pt] border-b-2 border-white/30" />
          </div>
          <p className="text-white/70 max-w-xl mx-auto">
            Visit us on Birchmount Road, call ahead for pickup, or order delivery.
          </p>
        </div>
      </section>

      {/* Contact info + map */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Info column */}
            <div className="space-y-8">
              {/* Address */}
              <div>
                <p className="font-[var(--font-heading-var)] text-xs uppercase tracking-[0.15em] text-[#D4A843] font-semibold mb-2">
                  Address
                </p>
                <h2 className="font-[var(--font-heading-var)] text-xl font-bold text-[#212529] mb-2">
                  Visit Us
                </h2>
                <address className="not-italic text-[#333333] leading-relaxed">
                  <p>{businessInfo.address}</p>
                  <p className="text-sm text-[#666666] mt-1">Free parking available</p>
                </address>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${businessInfo.coordinates.lat},${businessInfo.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-[#5CB85C] text-sm font-semibold hover:underline"
                >
                  Get Directions &rarr;
                </a>
              </div>

              <SectionDivider />

              {/* Phone */}
              <div>
                <p className="font-[var(--font-heading-var)] text-xs uppercase tracking-[0.15em] text-[#D4A843] font-semibold mb-2">
                  Phone
                </p>
                <a
                  href={businessInfo.phoneHref}
                  className="font-[var(--font-heading-var)] text-2xl font-bold text-[#212529] hover:text-[#5CB85C] transition-colors"
                >
                  {businessInfo.phone}
                </a>
                <p className="text-sm text-[#666666] mt-1">
                  Call ahead for large orders and catering
                </p>
              </div>

              <SectionDivider />

              {/* Hours */}
              <div>
                <p className="font-[var(--font-heading-var)] text-xs uppercase tracking-[0.15em] text-[#D4A843] font-semibold mb-2">
                  Hours
                </p>
                <h3 className="font-[var(--font-heading-var)] text-xl font-bold text-[#212529] mb-3">
                  Opening Hours
                </h3>
                <ul className="space-y-2 text-sm text-[#333333]">
                  {Object.entries(businessInfo.hours).map(([day, time]) => (
                    <li key={day} className="flex justify-between max-w-xs">
                      <span className="capitalize font-medium">{day}</span>
                      <span className={time === 'Closed' ? 'text-red-500 font-medium' : 'text-[#666666]'}>
                        {time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <SectionDivider />

              {/* Delivery partners */}
              <div>
                <p className="font-[var(--font-heading-var)] text-xs uppercase tracking-[0.15em] text-[#D4A843] font-semibold mb-2">
                  Order Delivery
                </p>
                <h3 className="font-[var(--font-heading-var)] text-xl font-bold text-[#212529] mb-3">
                  Delivery Partners
                </h3>
                <div className="flex flex-wrap gap-4">
                  {deliveryPartners.map((partner) => (
                    <a
                      key={partner.name}
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block border border-[#2A2A2A] text-[#2A2A2A] font-semibold uppercase tracking-[0.05em] text-sm px-6 py-3 rounded-[4px] hover:bg-[#5CB85C] hover:text-white hover:border-[#5CB85C] transition-colors"
                    >
                      {partner.name}
                    </a>
                  ))}
                  <a
                    href="https://mexicolindoexpress.gotoeat.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#5CB85C] text-white font-semibold uppercase tracking-[0.05em] text-sm px-6 py-3 rounded-[4px] hover:bg-[#4a9a4a] transition-colors"
                  >
                    Order Online
                  </a>
                </div>
              </div>

              <SectionDivider />

              {/* Social */}
              <div>
                <p className="font-[var(--font-heading-var)] text-xs uppercase tracking-[0.15em] text-[#D4A843] font-semibold mb-2">
                  Follow Us
                </p>
                <div className="flex gap-4">
                  <a
                    href={businessInfo.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#212529] hover:text-[#5CB85C] transition-colors"
                  >
                    Instagram ({businessInfo.instagram})
                  </a>
                  <a
                    href={businessInfo.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#212529] hover:text-[#5CB85C] transition-colors"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Map column */}
            <div>
              <div className="bg-[#e8e0d4] rounded-[5pt] min-h-[500px] flex items-center justify-center sticky top-28">
                <div className="text-center p-8">
                  <div className="w-16 h-16 rounded-full bg-[#5CB85C]/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#5CB85C] text-2xl">&#9906;</span>
                  </div>
                  <p className="font-[var(--font-heading-var)] text-xl font-semibold text-[#212529] mb-2">
                    2586 Birchmount Rd
                  </p>
                  <p className="text-[#666666] text-sm mb-6">
                    Scarborough, ON M1T 2M5
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${businessInfo.coordinates.lat},${businessInfo.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#5CB85C] text-white font-semibold uppercase tracking-[0.05em] text-sm px-6 py-3 rounded-[4px] hover:bg-[#4a9a4a] transition-colors"
                  >
                    Open in Google Maps
                  </a>
                  <div className="mt-6 text-sm text-[#666666] space-y-1">
                    <p>Wheelchair accessible</p>
                    <p>Free parking</p>
                    <p>Limited dine-in (3 tables)</p>
                    <p>Credit/debit and mobile payments accepted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
