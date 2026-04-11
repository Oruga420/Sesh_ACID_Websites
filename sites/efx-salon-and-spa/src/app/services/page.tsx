import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

const serviceCategories = [
  {
    title: 'Hair Styling',
    description:
      'From precision cuts to elaborate bridal updos, our stylists bring decades of expertise to every chair.',
    items: [
      { name: 'Hair Shaping', note: 'Precision cuts for women and men' },
      { name: 'Blow Dry & Styling', note: 'Sleek finishes and volume' },
      { name: 'Up Do\'s & Braiding', note: 'Special occasion and everyday' },
      { name: 'Bridal & Special Styles', note: 'Your most important day, perfected' },
    ],
  },
  {
    title: 'Color Services',
    description:
      'Whether you want a subtle refresh or a bold transformation, our color artists make it happen with premium products.',
    items: [
      { name: 'Artistic Coloring', note: 'Full creative color design' },
      { name: 'Corrective Coloring', note: 'Fix and restore previous color work' },
      { name: 'Highlights & Lowlights', note: 'Natural dimension and depth' },
    ],
  },
  {
    title: 'Treatments & Extensions',
    description:
      'Nourish, strengthen, and transform with Kerastase treatments and premium extension systems.',
    items: [
      { name: 'Kerastase Hair Treatments', note: 'Deep conditioning and repair' },
      { name: 'Scalp Treatments', note: 'Targeted scalp health' },
      { name: 'Smoothing Treatments', note: 'Cezanne keratin smoothing' },
      { name: 'Permanent Waving', note: 'Classic body and texture' },
      { name: 'Hair Extensions', note: 'Hairdreams & Great Lengths systems' },
    ],
  },
  {
    title: 'Spa & Esthetics',
    description:
      'Complete renewal from head to toe. Relax, refresh, and leave feeling your absolute best.',
    items: [
      { name: 'Facials', note: 'Customized for your skin type' },
      { name: 'Massage', note: 'Tension relief and relaxation' },
      { name: 'Waxing', note: 'Full body waxing services' },
      { name: 'Body Treatments', note: 'Wraps, scrubs, and hydration' },
      { name: 'Manicures', note: 'Classic and gel options' },
      { name: 'Pedicures', note: 'Luxury foot care' },
    ],
  },
  {
    title: 'Makeup',
    description:
      'Professional makeup application for any occasion, from everyday polish to full bridal beauty.',
    items: [
      { name: 'Makeup Application', note: 'Day, evening, and special event' },
      { name: 'Bridal Makeup', note: 'Trial + day-of application' },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section
        className="py-20 text-center"
        style={{
          background: `linear-gradient(135deg, ${BRAND.colors.primary} 0%, #6b1a6b 100%)`,
        }}
      >
        <div className="max-w-content mx-auto px-6">
          <p className="font-heading text-xs uppercase tracking-[0.2em] text-white/60 mb-3">
            What We Offer
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="font-body text-lg text-white/80 max-w-xl mx-auto">
            Every service is delivered with premium products and decades of expertise.
            Your satisfaction is our standard.
          </p>
        </div>
      </section>

      {/* Product Partners Strip */}
      <section className="py-8 bg-brand-bgAlt">
        <div className="max-w-content mx-auto px-6 flex flex-wrap justify-center items-center gap-8">
          {['Kerastase', 'Eufora', 'Great Lengths', 'Cezanne'].map((brand, i) => (
            <span
              key={i}
              className="font-heading text-sm uppercase tracking-[0.15em] text-brand-textMuted"
            >
              {brand}
            </span>
          ))}
        </div>
      </section>

      {/* Service Categories — Editorial List */}
      <section className="py-20">
        <div className="max-w-content mx-auto px-6 space-y-20">
          {serviceCategories.map((category, i) => (
            <div key={i}>
              <div className="mb-8">
                <p className="font-heading text-xs uppercase tracking-[0.2em] text-brand-secondary mb-2">
                  0{i + 1}
                </p>
                <h2 className="font-heading text-3xl font-semibold text-brand-textHeading mb-3">
                  {category.title}
                </h2>
                <p className="font-body text-base text-brand-textBody max-w-2xl leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="space-y-0">
                {category.items.map((item, j) => (
                  <div
                    key={j}
                    className="flex flex-col md:flex-row md:items-baseline justify-between py-5 border-b border-brand-textMuted/15"
                  >
                    <h3 className="font-heading text-lg font-semibold text-brand-textHeading">
                      {item.name}
                    </h3>
                    <p className="font-body text-sm text-brand-textMuted mt-1 md:mt-0">
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 text-center"
        style={{ backgroundColor: BRAND.colors.bgWarm }}
      >
        <div className="max-w-content mx-auto px-6">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-brand-textHeading mb-4">
            Ready to Experience the EFX Difference?
          </h2>
          <p className="font-body text-base text-brand-textBody mb-8 max-w-lg mx-auto">
            Contact us to book your appointment or ask about any of our services.
          </p>
          <Link
            href="/contact"
            className="inline-block font-heading text-sm uppercase tracking-wide px-8 py-4 font-semibold text-white transition-all hover:opacity-90"
            style={{
              backgroundColor: BRAND.colors.primary,
              borderRadius: BRAND.spacing.radiusButtons,
            }}
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
