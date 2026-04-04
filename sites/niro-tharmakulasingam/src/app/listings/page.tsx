import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

const stagingShowcase = [
  { url: BRAND.images.staging[0].url, title: 'Scarborough Bungalow', type: 'Detached', area: 'Scarborough' },
  { url: BRAND.images.staging[1].url, title: 'Modern Renovation', type: 'Detached', area: 'Markham' },
  { url: BRAND.images.staging[2].url, title: 'Family Townhome', type: 'Townhouse', area: 'Ajax' },
  { url: BRAND.images.staging[3].url, title: 'Executive Home', type: 'Detached', area: 'Vaughan' },
  { url: BRAND.images.staging[4].url, title: 'Starter Home', type: 'Semi-Detached', area: 'Pickering' },
  { url: BRAND.images.staging[5].url, title: 'Investment Property', type: 'Condo', area: 'Toronto' },
];

export default function ListingsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative py-24" style={{ backgroundColor: BRAND.colors.bgHero }}>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${BRAND.images.gallery[0].url})` }}
        />
        <div className="relative z-10 mx-auto px-6" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
          <span
            className="inline-block text-xs mb-3 tracking-widest"
            style={{ color: BRAND.colors.secondary, fontFamily: BRAND.fonts.heading, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em' }}
          >
            Properties
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: BRAND.fonts.heading, fontWeight: 700, color: BRAND.colors.textLight }}>
            Featured Listings &amp; Portfolio
          </h1>
          <p className="mt-4 max-w-xl" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Browse properties across the Greater Toronto Area. From starter homes to investment opportunities, discover your next move.
          </p>
        </div>
      </section>

      {/* Areas Served */}
      <section style={{ backgroundColor: BRAND.colors.bgMain, padding: `${BRAND.spacing.sectionPadding} 0` }}>
        <div className="mx-auto px-6" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs mb-3 tracking-widest"
              style={{ color: BRAND.colors.accent, fontFamily: BRAND.fonts.heading, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em' }}
            >
              Neighborhoods
            </span>
            <h2 style={{ fontSize: '2.25rem', fontFamily: BRAND.fonts.heading, fontWeight: 700, color: BRAND.colors.textHeading }}>
              Areas We Serve
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRAND.images.neighborhoods.map((area) => (
              <div
                key={area.name}
                className="group relative h-56 rounded-lg overflow-hidden cursor-pointer"
                style={{ borderRadius: BRAND.spacing.radiusCards }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={area.url}
                  alt={area.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <h3 className="text-lg font-bold" style={{ color: BRAND.colors.textLight, fontFamily: BRAND.fonts.heading }}>
                    {area.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staging Portfolio */}
      <section style={{ backgroundColor: BRAND.colors.bgAlt, padding: `${BRAND.spacing.sectionPadding} 0` }}>
        <div className="mx-auto px-6" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs mb-3 tracking-widest"
              style={{ color: BRAND.colors.accent, fontFamily: BRAND.fonts.heading, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em' }}
            >
              Portfolio
            </span>
            <h2 className="mb-4" style={{ fontSize: '2.25rem', fontFamily: BRAND.fonts.heading, fontWeight: 700, color: BRAND.colors.textHeading }}>
              Recently Staged Properties
            </h2>
            <p className="max-w-xl mx-auto" style={{ color: BRAND.colors.textBody }}>
              Professional home staging showcasing properties at their best. Every listing gets the attention it deserves.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stagingShowcase.map((property, i) => (
              <div
                key={i}
                className="group rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: BRAND.colors.bgCard,
                  border: `1px solid ${BRAND.colors.border}`,
                  borderRadius: BRAND.spacing.radiusCards,
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="h-52 overflow-hidden" style={{ backgroundColor: BRAND.colors.bgAlt }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={property.url}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg mb-1" style={{ fontFamily: BRAND.fonts.heading, fontWeight: 600, color: BRAND.colors.textHeading }}>
                    {property.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm" style={{ color: BRAND.colors.textMuted }}>
                    <span className="px-2 py-0.5 rounded text-xs" style={{ backgroundColor: `${BRAND.colors.accent}15`, color: BRAND.colors.accent }}>
                      {property.type}
                    </span>
                    <span>{property.area}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center" style={{ background: `linear-gradient(135deg, ${BRAND.colors.primary} 0%, ${BRAND.colors.bgHero} 100%)`, padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: '600px' }}>
          <h2 className="mb-4" style={{ fontSize: '2rem', fontFamily: BRAND.fonts.heading, fontWeight: 700, color: BRAND.colors.textLight }}>
            Looking for a Specific Property?
          </h2>
          <p className="mb-8" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
            Niro has access to the full MLS database and off-market opportunities. Share your criteria for a personalized property search.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block text-sm transition-all hover:opacity-90"
              style={{ backgroundColor: BRAND.colors.secondary, color: BRAND.colors.textLight, fontFamily: BRAND.fonts.heading, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', padding: '14px 32px', borderRadius: BRAND.spacing.radiusButtons }}
            >
              Request a Property Search
            </Link>
            <a
              href={`tel:${BRAND.contact.phone}`}
              className="inline-block text-sm transition-all hover:opacity-90"
              style={{ backgroundColor: 'transparent', color: BRAND.colors.textLight, fontFamily: BRAND.fonts.heading, fontWeight: 600, textTransform: 'uppercase', padding: '14px 32px', borderRadius: BRAND.spacing.radiusButtons, border: '2px solid rgba(255,255,255,0.4)' }}
            >
              Call {BRAND.contact.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
