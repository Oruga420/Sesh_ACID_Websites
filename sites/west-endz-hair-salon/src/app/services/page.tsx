import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';
import ScrollReveal from '@/components/ScrollReveal';

const services = [
  {
    category: 'Cuts & Styling',
    items: [
      { name: "Women's Haircut & Style", desc: 'Precision cut tailored to your face shape, lifestyle, and personal style. Includes wash, cut, and blow-dry.' },
      { name: "Men's Haircut", desc: 'Classic and contemporary cuts for every gentleman. Clean lines, proper technique.' },
      { name: "Children's Haircut", desc: 'Patient, friendly service for your little ones. Making haircuts fun since the 1960s.' },
      { name: 'Blow Dry & Styling', desc: 'Professional blow-out for any occasion. Volume, smoothness, and shine.' },
      { name: 'Special Event Hair', desc: 'Up-dos, French braids, and elegant styles for weddings, proms, and graduations.' },
    ],
  },
  {
    category: 'Colour & Highlights',
    items: [
      { name: 'Full Colour', desc: 'Rich, long-lasting colour using Mon Platin professional-grade products. From subtle enhancements to bold transformations.' },
      { name: 'Highlights & Lowlights', desc: 'Dimension and depth with expertly placed foils. Natural-looking or dramatic — your call.' },
      { name: 'Balayage', desc: 'Hand-painted colour for a sun-kissed, low-maintenance look that grows out beautifully.' },
      { name: 'Colour Correction', desc: 'Fix box dye disasters and previous salon work. Darlene specializes in restoring your hair to its best.' },
    ],
  },
  {
    category: 'Extensions & Treatments',
    items: [
      { name: 'Hair Extensions', desc: 'Certified Hair Treats application that adds volume and length without damaging your natural hair. Lucy is a certified specialist.' },
      { name: 'Keratin Treatment', desc: 'Smooth, frizz-free hair that lasts for months. Transform unmanageable texture into sleek, shiny locks.' },
      { name: 'Perms', desc: 'From loose waves to defined curls, our experienced stylists create volume and texture that lasts.' },
    ],
  },
  {
    category: 'Additional Services',
    items: [
      { name: 'Waxing & Hair Removal', desc: 'Professional waxing services by our trained aesthetician. All areas available.' },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section
        className="relative flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${BRAND.images.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '35vh',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.7)' }} />
        <div className="relative z-10 py-16 px-6">
          <p
            className="mb-3"
            style={{
              fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}`,
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: BRAND.colors.accent,
            }}
          >
            What We Offer
          </p>
          <h1
            style={{
              fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`,
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight: 400,
              color: '#FFFFFF',
            }}
          >
            Our Services
          </h1>
        </div>
      </section>

      {/* Services — Editorial list style */}
      <section style={{ backgroundColor: BRAND.colors.bgMain, padding: '5rem 0' }}>
        <div className="mx-auto" style={{ maxWidth: '900px', padding: '0 1.5rem' }}>
          {services.map((category, ci) => (
            <ScrollReveal key={category.category} delay={ci * 80}>
              <div className="mb-16 last:mb-0">
                {/* Category Header */}
                <p
                  className="mb-2"
                  style={{
                    fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}`,
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    color: BRAND.colors.primary,
                  }}
                >
                  {String(ci + 1).padStart(2, '0')}
                </p>
                <h2
                  className="mb-8"
                  style={{
                    fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`,
                    fontSize: '2rem',
                    fontWeight: 500,
                    color: BRAND.colors.textHeading,
                    lineHeight: 1.2,
                  }}
                >
                  {category.category}
                </h2>

                {/* Service Items — Editorial list with dividers */}
                <div className="flex flex-col">
                  {category.items.map((service, si) => (
                    <div
                      key={si}
                      className="py-6 border-t"
                      style={{ borderColor: BRAND.colors.bgAlt }}
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                        <h3
                          className="md:w-1/3 flex-shrink-0"
                          style={{
                            fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`,
                            fontSize: '1.25rem',
                            fontWeight: 600,
                            color: BRAND.colors.textHeading,
                          }}
                        >
                          {service.name}
                        </h3>
                        <p
                          className="md:w-2/3"
                          style={{
                            fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}`,
                            fontSize: '0.95rem',
                            lineHeight: 1.7,
                            color: BRAND.colors.textBody,
                          }}
                        >
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Senior Discount callout */}
          <ScrollReveal delay={200}>
            <div
              className="mt-8 p-8 text-center"
              style={{
                backgroundColor: BRAND.colors.bgAlt,
                borderRadius: BRAND.spacing.radiusCards,
                border: `2px solid ${BRAND.colors.accent}`,
              }}
            >
              <p
                className="mb-2"
                style={{
                  fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}`,
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  color: BRAND.colors.accent,
                }}
              >
                Community Perk
              </p>
              <h3
                className="mb-2"
                style={{
                  fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`,
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  color: BRAND.colors.textHeading,
                }}
              >
                20% Senior Discount
              </h3>
              <p style={{ color: BRAND.colors.textBody, fontSize: '0.95rem' }}>
                Clients 65+ enjoy 20% off all services on Tuesdays and Wednesdays.
                Because taking care of our community is what we do.
              </p>
            </div>
          </ScrollReveal>

          {/* Products Used */}
          <ScrollReveal delay={250}>
            <div className="mt-16 text-center">
              <p
                className="mb-4"
                style={{
                  fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}`,
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  color: BRAND.colors.textMuted,
                }}
              >
                Professional Products We Trust
              </p>
              <div className="flex items-center justify-center gap-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://westendzsalon.com/wp-content/uploads/2022/10/Mon_Platin_Banner.png"
                  alt="Mon Platin Professional hair color products"
                  className="h-24 w-auto object-contain"
                  style={{ borderRadius: BRAND.spacing.radiusImages }}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: BRAND.colors.primary, padding: '3.5rem 0' }}>
        <div className="mx-auto text-center" style={{ maxWidth: '600px', padding: '0 1.5rem' }}>
          <h2
            style={{
              fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`,
              fontSize: '2rem',
              fontWeight: 500,
              color: '#FFFFFF',
              marginBottom: '0.5rem',
            }}
          >
            Ready to Book?
          </h2>
          <p className="mb-6" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Call to schedule your appointment or walk in during business hours.
          </p>
          <a
            href="tel:4162552131"
            className="inline-flex items-center transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#FFFFFF',
              color: BRAND.colors.secondary,
              padding: '14px 36px',
              borderRadius: BRAND.spacing.radiusButtons,
              fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}`,
              fontWeight: 700,
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            Call 416-255-2131
          </a>
        </div>
      </section>
    </>
  );
}
