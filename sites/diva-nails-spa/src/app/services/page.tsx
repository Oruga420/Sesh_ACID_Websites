import { BRAND } from '@/lib/brand-tokens';

interface ServiceItem {
  name: string;
  price: string;
  duration?: string;
}

interface ServiceCategory {
  title: string;
  description: string;
  items: ServiceItem[];
  featured?: boolean;
}

const SERVICES: ServiceCategory[] = [
  {
    title: 'Head Spa',
    description:
      'The viral relaxation experience everyone is talking about. Includes scalp treatment, hot herbal compress, acupoint stimulation with essential oils, relaxing facial treatment, and face mask. Walk in stressed, walk out renewed.',
    featured: true,
    items: [
      { name: '60 Minute Head Spa', price: '$60', duration: '60 min' },
      { name: '90 Minute Head Spa', price: '$80', duration: '90 min' },
    ],
  },
  {
    title: 'Natural Nails',
    description:
      'Classic manicures and pedicures with meticulous attention to detail. We also offer services tailored for men.',
    items: [
      { name: 'Manicure', price: '$25', duration: '30 min' },
      { name: 'Pedicure', price: '$35', duration: '30 min' },
      { name: 'Manicure & Pedicure Combo', price: '$50', duration: '60 min' },
      { name: 'Pedicure For Men', price: '$40', duration: '45 min' },
      { name: 'Manicure & Pedicure For Men', price: '$55', duration: '60 min' },
    ],
  },
  {
    title: 'Shellac',
    description:
      'Long-lasting shellac polish that stays flawless for weeks. Mirror-like finish with zero chipping.',
    items: [
      { name: 'Shellac Manicure', price: '$35' },
      { name: 'Shellac Pedicure', price: '$45' },
      { name: 'Shellac Manicure & Pedicure', price: '$70' },
    ],
  },
  {
    title: 'Gel Nails',
    description:
      'Premium gel nail sets including Bio Seaweed Gel and UV Powder options. Strong, flexible, and beautifully glossy.',
    items: [
      { name: 'Bio Seaweed Gel Full Set', price: '$60', duration: '45 min' },
      { name: 'Bio Seaweed Gel Refill', price: '$50', duration: '45 min' },
      { name: 'UV Powder Full Set', price: '$50' },
      { name: 'UV Powder Refill', price: '$45' },
    ],
  },
  {
    title: 'Ombre & Dipping Powder',
    description:
      'Trendy ombre gradients and durable dipping powder manicures. Lightweight feel with salon-quality results.',
    items: [
      { name: 'Ombre / Dipping Powder Full Set', price: '$50' },
    ],
  },
  {
    title: 'Acrylic Nails',
    description:
      'Classic acrylic nail extensions. Strong foundation for any length or shape you desire.',
    items: [
      { name: 'Full Set With Colour', price: '$50', duration: '30 min' },
      { name: 'Fill With Colour', price: '$45', duration: '30 min' },
    ],
  },
  {
    title: 'Eyelash Extensions',
    description:
      'Classic and volume lash extensions applied with precision. Fuller, longer lashes that frame your eyes beautifully.',
    items: [
      { name: 'Full Set', price: '$100', duration: '90 min' },
      { name: 'Refill', price: '$80', duration: '60 min' },
    ],
  },
  {
    title: 'Waxing',
    description:
      'Gentle, efficient waxing for face and body. Clean results with minimal discomfort.',
    items: [
      { name: 'Eyebrows', price: '$10' },
      { name: 'Upper Lip', price: '$7' },
      { name: 'Chin', price: '$7' },
      { name: 'Full Face', price: '$25' },
      { name: 'Full Arm', price: '$30' },
      { name: 'Full Legs', price: '$45' },
      { name: 'Brazilian', price: '$40' },
      { name: 'Back', price: '$40' },
    ],
  },
  {
    title: 'Facials',
    description:
      'Revitalizing facial treatments to cleanse, hydrate, and refresh your skin.',
    items: [
      { name: 'Basic Facial', price: '$50', duration: '45 min' },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section
        style={{
          backgroundColor: BRAND.colors.bgAlt,
          padding: 'clamp(48px, 6vw, 80px) 0 clamp(40px, 4vw, 60px)',
        }}
      >
        <div className="max-w-content mx-auto px-6">
          <p className="section-label mb-3" style={{ color: BRAND.colors.primary }}>
            Our Services
          </p>
          <h1
            className="font-heading"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 600,
              color: BRAND.colors.textHeading,
              lineHeight: 1.1,
            }}
          >
            Expert Care for Every Detail
          </h1>
          <p className="mt-4 max-w-2xl text-lg" style={{ color: BRAND.colors.textBody }}>
            From the viral head spa to precision nail artistry, we offer a full range of
            beauty services under one roof. All prices include HST.
          </p>
        </div>
      </section>

      {/* Services List — Editorial Style */}
      <section
        style={{
          backgroundColor: BRAND.colors.bgMain,
          padding: `${BRAND.spacing.sectionPadding} 0`,
        }}
      >
        <div className="max-w-content mx-auto px-6 space-y-16">
          {SERVICES.map((category) => (
            <div
              key={category.title}
              className={category.featured ? 'relative' : ''}
            >
              {category.featured && (
                <span
                  className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
                  style={{
                    backgroundColor: BRAND.colors.accent,
                    color: BRAND.colors.textHeading,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  Most Popular
                </span>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Category Info */}
                <div className="lg:col-span-1">
                  <h2
                    className="font-heading mb-3"
                    style={{
                      fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                      fontWeight: 600,
                      color: BRAND.colors.textHeading,
                    }}
                  >
                    {category.title}
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: BRAND.colors.textMuted }}>
                    {category.description}
                  </p>
                </div>

                {/* Service Items — Editorial List */}
                <div className="lg:col-span-2">
                  <div
                    className="divide-y"
                    style={{ borderColor: `${BRAND.colors.accent}33` }}
                  >
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between py-4 group"
                      >
                        <div className="flex-1">
                          <h3
                            className="font-body text-base"
                            style={{ color: BRAND.colors.textHeading, fontWeight: 600 }}
                          >
                            {item.name}
                          </h3>
                          {item.duration && (
                            <p className="text-xs mt-0.5" style={{ color: BRAND.colors.textMuted }}>
                              {item.duration}
                            </p>
                          )}
                        </div>
                        <span
                          className="text-lg font-heading ml-4"
                          style={{ color: BRAND.colors.primary, fontWeight: 600 }}
                        >
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <hr
                className="mt-12"
                style={{ border: 'none', borderTop: `1px solid ${BRAND.colors.accent}22` }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <section
        className="text-center"
        style={{
          backgroundColor: BRAND.colors.primary,
          padding: 'clamp(48px, 6vw, 80px) 0',
        }}
      >
        <div className="max-w-content mx-auto px-6">
          <h2
            className="font-heading mb-4"
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
              fontWeight: 500,
              color: '#FFFFFF',
            }}
          >
            Ready to Book?
          </h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto">
            Birthday special: 10% off all nail services $50 and up. Mention it when you book.
          </p>
          <a
            href={BRAND.business.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-all duration-200 hover:opacity-90"
            style={{
              backgroundColor: '#FFFFFF',
              color: BRAND.colors.primary,
              borderRadius: BRAND.spacing.radiusButtons,
              padding: '16px 40px',
              fontWeight: 700,
              fontSize: '16px',
              textDecoration: 'none',
            }}
          >
            Book Your Appointment
          </a>
        </div>
      </section>
    </>
  );
}
