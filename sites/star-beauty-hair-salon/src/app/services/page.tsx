import type { Metadata } from 'next';
import { BRAND } from '@/lib/brand-tokens';
import SectionWrapper from '@/components/SectionWrapper';

export const metadata: Metadata = {
  title: `Services — ${BRAND.business.name}`,
  description: 'Hair cuts, color transformations, keratin treatments, extensions, braiding, threading, facials, and waxing at Star Beauty & Hair Salon in Scarborough.',
};

/* Category metadata for editorial styling */
const CATEGORIES: {
  key: keyof typeof BRAND.services;
  label: string;
  overline: string;
  description: string;
}[] = [
  {
    key: 'hair',
    label: 'Hair Cuts & Styling',
    overline: 'Cuts & Style',
    description: 'Precision cuts for women, men, and children. Blow-dry styling and curly hair expertise.',
  },
  {
    key: 'color',
    label: 'Color & Highlights',
    overline: 'Color Studio',
    description: 'Rachel\'s specialty. Balayage, ombre, highlights, and full color — transformations that turn heads.',
  },
  {
    key: 'treatment',
    label: 'Treatments',
    overline: 'Repair & Smooth',
    description: 'Keratin smoothing, permanent straightening, and perms for lasting texture change.',
  },
  {
    key: 'extensions',
    label: 'Extensions & Protective Styles',
    overline: 'Length & Protection',
    description: 'Extensions, weaves, braiding, locs, and wig installs for every texture and style.',
  },
  {
    key: 'beauty',
    label: 'Beauty Services',
    overline: 'Face & Body',
    description: 'Eyebrow and face threading, facials, and waxing for a complete beauty experience.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="py-16 md:py-20 text-center"
        style={{ backgroundColor: BRAND.colors.bgAlt }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
          <span
            className="font-body text-xs font-medium tracking-[0.2em] uppercase block mb-3"
            style={{ color: BRAND.colors.primary }}
          >
            What We Do
          </span>
          <h1
            className="font-heading font-semibold leading-tight"
            style={{ color: BRAND.colors.textHeading, fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Our Services
          </h1>
          <p
            className="font-body mt-4 max-w-lg mx-auto"
            style={{ color: BRAND.colors.textBody }}
          >
            Full-service beauty salon specializing in hair color transformations.
            Walk-ins welcome — appointments recommended for color services.
          </p>
        </div>
      </section>

      {/* Service categories — editorial list style */}
      <section className="py-16 md:py-20" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <div className="mx-auto px-6 space-y-0" style={{ maxWidth: '900px' }}>
          {CATEGORIES.map((cat, i) => (
            <SectionWrapper key={cat.key} delay={i * 80}>
              <div
                className="py-10 border-b"
                style={{ borderBottomColor: BRAND.colors.bgAlt }}
              >
                {/* Overline */}
                <span
                  className="font-body text-[11px] font-medium tracking-[0.25em] uppercase block mb-2"
                  style={{ color: BRAND.colors.primary }}
                >
                  {cat.overline}
                </span>

                {/* Category heading */}
                <h2
                  className="font-heading text-2xl md:text-3xl font-semibold mb-3"
                  style={{ color: BRAND.colors.textHeading }}
                >
                  {cat.label}
                </h2>

                {/* Description */}
                <p
                  className="font-body text-base mb-6 max-w-xl"
                  style={{ color: BRAND.colors.textMuted }}
                >
                  {cat.description}
                </p>

                {/* Service line items */}
                <div className="space-y-3">
                  {BRAND.services[cat.key].map((service) => (
                    <div
                      key={service.name}
                      className="flex items-center justify-between py-2"
                    >
                      <span
                        className="font-body font-medium"
                        style={{ color: BRAND.colors.textBody }}
                      >
                        {service.name}
                      </span>
                      <span
                        className="font-body text-sm"
                        style={{ color: BRAND.colors.textMuted }}
                      >
                        Call for pricing
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </section>

      {/* CTA */}
      <SectionWrapper
        className="text-center"
        style={{ backgroundColor: BRAND.colors.primary, padding: '4rem 1.5rem' }}
      >
        <h2 className="font-heading text-3xl font-semibold text-white mb-4">
          Book Your Color Transformation
        </h2>
        <p className="font-body text-white/80 mb-8 max-w-md mx-auto">
          Call Rachel to discuss your color goals and book your appointment.
        </p>
        <a
          href={`tel:${BRAND.business.phone}`}
          className="inline-flex font-body font-bold px-10 py-4 rounded-lg hover:shadow-xl transition-all"
          style={{
            backgroundColor: '#FFFFFF',
            color: BRAND.colors.primary,
            borderRadius: BRAND.spacing.radiusButtons,
          }}
        >
          Call {BRAND.business.phone}
        </a>
      </SectionWrapper>
    </>
  );
}
