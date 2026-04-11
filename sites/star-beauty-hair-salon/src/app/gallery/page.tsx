import type { Metadata } from 'next';
import { BRAND } from '@/lib/brand-tokens';
import SectionWrapper from '@/components/SectionWrapper';

export const metadata: Metadata = {
  title: `Gallery — ${BRAND.business.name}`,
  description: 'Hair color transformations by Rachel Chu — balayage, ash blonde, rosegold, silver metallic, ombre, and more at Star Beauty in Scarborough.',
};

/* Portfolio items representing Rachel's transformation work */
const PORTFOLIO_ITEMS = [
  {
    title: 'Brassy to Ash Blonde',
    category: 'Color Correction',
    gradient: `linear-gradient(135deg, #D4A574 0%, #C4B5A0 40%, #B8B0A8 70%, #A89F96 100%)`,
  },
  {
    title: 'Dark Brown to Rosegold',
    category: 'Balayage',
    gradient: `linear-gradient(180deg, #3D2B1F 0%, #6B4D3A 30%, #C27D6E 60%, #D4A08A 100%)`,
  },
  {
    title: 'Silver Metallic',
    category: 'Fashion Color',
    gradient: `linear-gradient(135deg, #6B6B6B 0%, #A0A0A8 40%, #C0C0C8 70%, #D8D8E0 100%)`,
  },
  {
    title: 'Warm Caramel Highlights',
    category: 'Highlights',
    gradient: `linear-gradient(225deg, #2D1B10 0%, #5A3A20 30%, #C4884A 60%, #D4A860 100%)`,
  },
  {
    title: 'Platinum Blonde',
    category: 'Full Color',
    gradient: `linear-gradient(135deg, #B8A070 0%, #D4C4A0 40%, #E8DCC0 70%, #F0E8D8 100%)`,
  },
  {
    title: 'Burgundy Deep Red',
    category: 'Fashion Color',
    gradient: `linear-gradient(180deg, #2D1520 0%, #5A1A30 30%, #8B2240 60%, #A83050 100%)`,
  },
  {
    title: 'Honey Blonde Ombre',
    category: 'Ombre',
    gradient: `linear-gradient(180deg, #3D2B1F 0%, #6B4D3A 25%, #B8884A 55%, #D4A860 80%, #E8C880 100%)`,
  },
  {
    title: 'Ash Grey Transformation',
    category: 'Color Correction',
    gradient: `linear-gradient(135deg, #4A4548 0%, #7A7580 40%, #9A95A0 70%, #B8B0B8 100%)`,
  },
  {
    title: 'Copper Balayage',
    category: 'Balayage',
    gradient: `linear-gradient(225deg, #2D1B10 0%, #5A3020 30%, #B86830 60%, #D48040 100%)`,
  },
  {
    title: 'Natural Black to Chocolate',
    category: 'Color',
    gradient: `linear-gradient(135deg, #1A1018 0%, #2D2028 30%, #4A3038 60%, #6B4848 100%)`,
  },
  {
    title: 'Pastel Pink',
    category: 'Fashion Color',
    gradient: `linear-gradient(180deg, #E8C0C8 0%, #F0D0D8 40%, #F8E0E4 70%, #FDE8EF 100%)`,
  },
  {
    title: 'Caramel Dimension',
    category: 'Highlights',
    gradient: `linear-gradient(315deg, #3D2B1F 0%, #6B4D3A 30%, #A87840 60%, #C49050 100%)`,
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="py-16 md:py-20 text-center"
        style={{ backgroundColor: BRAND.colors.footerBg }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
          <span
            className="font-body text-xs font-medium tracking-[0.2em] uppercase block mb-3"
            style={{ color: BRAND.colors.primary }}
          >
            Our Work
          </span>
          <h1
            className="font-heading font-semibold leading-tight"
            style={{ color: '#FFFFFF', fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Color Transformations
          </h1>
          <p className="font-body mt-4 max-w-lg mx-auto" style={{ color: BRAND.colors.secondary }}>
            Every transformation tells a story. From brassy to ash, dark to rosegold — Rachel brings your color vision to life.
          </p>
        </div>
      </section>

      {/* Asymmetric portfolio grid on dark bg */}
      <section style={{ backgroundColor: BRAND.colors.footerBg, padding: '0 0 5rem' }}>
        <div className="mx-auto px-6" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
          {/* Row 1 — 1 large + 2 small */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <SectionWrapper className="md:col-span-2 md:row-span-2">
              <div
                className="relative overflow-hidden rounded-xl aspect-[4/3] md:aspect-auto md:h-full group"
                style={{ borderRadius: BRAND.spacing.radiusImages, minHeight: '400px' }}
              >
                <div className="absolute inset-0" style={{ background: PORTFOLIO_ITEMS[0].gradient }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="font-body text-xs uppercase tracking-[0.2em] text-white/60">{PORTFOLIO_ITEMS[0].category}</span>
                  <h3 className="font-heading text-xl font-semibold text-white mt-1">{PORTFOLIO_ITEMS[0].title}</h3>
                </div>
              </div>
            </SectionWrapper>
            {PORTFOLIO_ITEMS.slice(1, 3).map((item, i) => (
              <SectionWrapper key={i} delay={i * 100}>
                <div
                  className="relative overflow-hidden rounded-xl aspect-[4/3] group"
                  style={{ borderRadius: BRAND.spacing.radiusImages }}
                >
                  <div className="absolute inset-0" style={{ background: item.gradient }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="font-body text-[10px] uppercase tracking-[0.2em] text-white/60">{item.category}</span>
                    <h3 className="font-heading text-base font-semibold text-white mt-0.5">{item.title}</h3>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>

          {/* Row 2 — 3 equal */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {PORTFOLIO_ITEMS.slice(3, 6).map((item, i) => (
              <SectionWrapper key={i} delay={i * 100}>
                <div
                  className="relative overflow-hidden rounded-xl aspect-[3/4] group"
                  style={{ borderRadius: BRAND.spacing.radiusImages }}
                >
                  <div className="absolute inset-0" style={{ background: item.gradient }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="font-body text-[10px] uppercase tracking-[0.2em] text-white/60">{item.category}</span>
                    <h3 className="font-heading text-base font-semibold text-white mt-0.5">{item.title}</h3>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>

          {/* Row 3 — 2 small + 1 large */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {PORTFOLIO_ITEMS.slice(6, 8).map((item, i) => (
              <SectionWrapper key={i} delay={i * 100}>
                <div
                  className="relative overflow-hidden rounded-xl aspect-[4/3] group"
                  style={{ borderRadius: BRAND.spacing.radiusImages }}
                >
                  <div className="absolute inset-0" style={{ background: item.gradient }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="font-body text-[10px] uppercase tracking-[0.2em] text-white/60">{item.category}</span>
                    <h3 className="font-heading text-base font-semibold text-white mt-0.5">{item.title}</h3>
                  </div>
                </div>
              </SectionWrapper>
            ))}
            <SectionWrapper className="md:col-span-1">
              <div
                className="relative overflow-hidden rounded-xl aspect-[4/3] group"
                style={{ borderRadius: BRAND.spacing.radiusImages }}
              >
                <div className="absolute inset-0" style={{ background: PORTFOLIO_ITEMS[8].gradient }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="font-body text-[10px] uppercase tracking-[0.2em] text-white/60">{PORTFOLIO_ITEMS[8].category}</span>
                  <h3 className="font-heading text-base font-semibold text-white mt-0.5">{PORTFOLIO_ITEMS[8].title}</h3>
                </div>
              </div>
            </SectionWrapper>
          </div>

          {/* Row 4 — 3 equal */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {PORTFOLIO_ITEMS.slice(9, 12).map((item, i) => (
              <SectionWrapper key={i} delay={i * 100}>
                <div
                  className="relative overflow-hidden rounded-xl aspect-square group"
                  style={{ borderRadius: BRAND.spacing.radiusImages }}
                >
                  <div className="absolute inset-0" style={{ background: item.gradient }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="font-body text-[10px] uppercase tracking-[0.2em] text-white/60">{item.category}</span>
                    <h3 className="font-heading text-base font-semibold text-white mt-0.5">{item.title}</h3>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <SectionWrapper
        className="text-center"
        style={{ backgroundColor: BRAND.colors.primary, padding: '4rem 1.5rem' }}
      >
        <h2 className="font-heading text-3xl font-semibold text-white mb-4">
          Love What You See?
        </h2>
        <p className="font-body text-white/80 mb-8 max-w-md mx-auto">
          Your transformation is one call away. Let Rachel know your color goals.
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
          Book Your Transformation
        </a>
      </SectionWrapper>
    </>
  );
}
