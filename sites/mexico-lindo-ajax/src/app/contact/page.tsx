import { businessInfo, deliveryPartners } from '@/lib/brand-tokens'
import SectionDivider from '@/components/SectionDivider'

export const metadata = {
  title: 'Contact | México Lindo Ajax',
  description: 'Find México Lindo Ajax at 200 Harwood Ave S, Ajax, ON. Hours, phone, directions, and delivery options.',
}

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-[#2C3A1E] py-12 md:py-16">
        <div className="mx-auto max-w-[1200px] px-4 text-center">
          <p className="font-[var(--font-body-var)] text-xs uppercase tracking-[0.15em] text-[#D4A024] font-bold mb-2">
            Find Us
          </p>
          <h1 className="font-[var(--font-heading-var)] text-4xl md:text-5xl font-bold text-white mb-4">
            Contact &amp; Location
          </h1>
          <p className="text-white/70 text-base max-w-md mx-auto">
            We&apos;re at 200 Harwood Ave S in Ajax — easy parking, easy access, incredible food.
          </p>
        </div>
      </div>

      {/* Map + Info */}
      <section className="bg-[#FFFDF8] py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Map Embed */}
            <div className="rounded-[6px] overflow-hidden border border-[#E0D0B8] min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.9!2d-79.0204!3d43.8487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4dfc!2s200+Harwood+Ave+S%2C+Ajax%2C+ON+L1S+2H6!5e0!3m2!1sen!2sca!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="México Lindo Ajax location map"
              />
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Address */}
              <div className="bg-[#F7F0E6] rounded-[6px] p-6 border border-[#E0D0B8]">
                <h2 className="font-[var(--font-body-var)] text-xs uppercase tracking-[0.15em] text-[#D4A024] font-bold mb-3">
                  Address
                </h2>
                <address className="not-italic text-[#3A2A1A]">
                  <p className="font-[var(--font-heading-var)] text-lg font-bold text-[#1E1209] mb-1">
                    México Lindo Ajax
                  </p>
                  <p className="text-sm mb-0.5">200 Harwood Ave S</p>
                  <p className="text-sm mb-4">Ajax, ON L1S 2H6</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${businessInfo.coordinates.lat},${businessInfo.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-[#C0533A] hover:underline"
                  >
                    Open in Google Maps &rarr;
                  </a>
                </address>
              </div>

              {/* Phone & Email */}
              <div className="bg-[#F7F0E6] rounded-[6px] p-6 border border-[#E0D0B8]">
                <h2 className="font-[var(--font-body-var)] text-xs uppercase tracking-[0.15em] text-[#D4A024] font-bold mb-3">
                  Get in Touch
                </h2>
                <p className="text-sm text-[#3A2A1A] mb-2">
                  <span className="font-bold">Phone: </span>
                  <a href={businessInfo.phoneHref} className="hover:text-[#C0533A] transition-colors">
                    {businessInfo.phone}
                  </a>
                </p>
                <p className="text-sm text-[#3A2A1A] mb-4">
                  <span className="font-bold">Email: </span>
                  <a href={`mailto:${businessInfo.email}`} className="hover:text-[#C0533A] transition-colors">
                    {businessInfo.email}
                  </a>
                </p>
                <div className="flex gap-4">
                  <a
                    href={businessInfo.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-[#7A6A5A] hover:text-[#C0533A] transition-colors"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href={businessInfo.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="text-[#7A6A5A] hover:text-[#C0533A] transition-colors"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-[#F7F0E6] rounded-[6px] p-6 border border-[#E0D0B8]">
                <h2 className="font-[var(--font-body-var)] text-xs uppercase tracking-[0.15em] text-[#D4A024] font-bold mb-3">
                  Hours
                </h2>
                <ul className="space-y-2 text-sm text-[#3A2A1A]">
                  {Object.entries(businessInfo.hours).map(([day, time]) => (
                    <li key={day} className="flex justify-between">
                      <span className="capitalize font-semibold">{day}</span>
                      <span className={time === 'Closed' ? 'text-red-500 font-semibold' : 'text-[#7A6A5A]'}>
                        {time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Strip */}
      <section className="bg-[#F7F0E6] py-10">
        <div className="mx-auto max-w-[1200px] px-4 text-center">
          <p className="font-[var(--font-body-var)] text-xs uppercase tracking-[0.15em] text-[#D4A024] font-bold mb-2">
            Can&apos;t Make It In?
          </p>
          <h2 className="font-[var(--font-heading-var)] text-2xl font-bold text-[#1E1209] mb-3">
            Order Delivery Across Ajax
          </h2>
          <SectionDivider />
          <div className="flex justify-center gap-4 mt-4 flex-wrap">
            {deliveryPartners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#C0533A] text-white font-bold uppercase tracking-[0.08em] text-sm px-6 py-2.5 rounded-[4px] hover:bg-[#9E3D24] transition-colors"
              >
                {partner.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
