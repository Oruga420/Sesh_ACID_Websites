import { BRAND } from '@/lib/brand-tokens';
import Link from 'next/link';

export const metadata = {
  title: 'Listings — Condos & Castles Realty Inc.',
  description: 'Browse featured properties in downtown Toronto. Condos, houses, and waterfront properties from King West to Georgian Bay.',
};

export default function ListingsPage() {
  const featuredListings = [
    {
      address: '9 Osprey Way',
      type: 'Detached Home',
      area: 'Georgian Bay',
      status: 'Active',
      features: 'Waterfront property with stunning views',
    },
    {
      address: '1557 Calumet Pl',
      type: 'Residential',
      area: 'Toronto',
      status: 'Active',
      features: 'Modern living in a prime location',
    },
  ];

  const recentSales = [
    { address: '36 Rusholme Park Cres, Unit 29', area: 'Downtown Toronto' },
    { address: '570 Wellington St W, 3A', area: 'King West Village' },
    { address: '5229 Dundas St W, #601', area: 'Etobicoke' },
    { address: '123 Armadale Ave', area: 'High Park' },
    { address: '600 Queens Quay W, SPH5', area: 'Waterfront' },
    { address: '600 Fleet St, Suite 2508', area: 'Bathurst Quay' },
    { address: '363 Sorauren Ave, #111', area: 'Roncesvalles' },
    { address: '24 Grand Ave', area: 'Parkdale' },
    { address: '215 Fort York, #2706', area: 'CityPlace' },
    { address: '139 Niagara St', area: 'King West Village' },
    { address: '180 University Ave, #4301', area: 'Financial District' },
    { address: '801 King St W, #423', area: 'King West Village' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${BRAND.images.hero})` }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(27,58,92,0.8) 0%, rgba(13,37,63,0.65) 100%)' }} />
        <div className="relative z-10 max-w-content mx-auto px-6">
          <p className="font-body text-xs uppercase tracking-[0.3em] mb-4" style={{ color: BRAND.colors.secondary }}>
            Property Listings
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-semibold text-white max-w-2xl leading-tight">
            Find Your Place in Toronto
          </h1>
        </div>
      </section>

      {/* Active Listings */}
      <section className="py-24" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <div className="max-w-content mx-auto px-6">
          <p className="font-body text-xs uppercase tracking-[0.3em] mb-3" style={{ color: BRAND.colors.secondary }}>
            Currently Available
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4" style={{ color: BRAND.colors.textHeading }}>
            Featured Properties
          </h2>
          <p className="font-body mb-12" style={{ color: BRAND.colors.textMuted }}>
            Explore our current listings with virtual tour availability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredListings.map((listing, i) => (
              <div
                key={i}
                className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{
                  backgroundColor: BRAND.colors.bgCard,
                  borderRadius: BRAND.spacing.radiusCards,
                  border: `1px solid ${BRAND.colors.border}`,
                }}
              >
                <div
                  className="h-52 flex items-center justify-center"
                  style={{ backgroundColor: BRAND.colors.bgAlt }}
                >
                  <div className="text-center">
                    <span className="font-heading text-2xl font-semibold" style={{ color: BRAND.colors.primary }}>
                      Virtual Tour Available
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-heading text-xl font-semibold" style={{ color: BRAND.colors.textHeading }}>
                      {listing.address}
                    </h3>
                    <span
                      className="font-body text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: BRAND.colors.accent,
                        color: '#FFFFFF',
                      }}
                    >
                      {listing.status}
                    </span>
                  </div>
                  <p className="font-body text-sm mb-1" style={{ color: BRAND.colors.textMuted }}>
                    {listing.type} &middot; {listing.area}
                  </p>
                  <p className="font-body text-sm" style={{ color: BRAND.colors.textBody }}>
                    {listing.features}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block mt-4 font-body text-sm font-semibold transition-colors hover:underline"
                    style={{ color: BRAND.colors.primary }}
                  >
                    Inquire About This Property &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Sales — editorial list */}
      <section className="py-24" style={{ backgroundColor: BRAND.colors.bgAlt }}>
        <div className="max-w-content mx-auto px-6">
          <p className="font-body text-xs uppercase tracking-[0.3em] mb-3" style={{ color: BRAND.colors.secondary }}>
            Track Record
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-12" style={{ color: BRAND.colors.textHeading }}>
            Recently Sold &amp; Leased
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentSales.map((sale, i) => (
              <div
                key={i}
                className="p-5 flex items-start gap-3"
                style={{
                  backgroundColor: BRAND.colors.bgCard,
                  borderRadius: BRAND.spacing.radiusCards,
                  border: `1px solid ${BRAND.colors.border}`,
                }}
              >
                <span
                  className="font-body text-xs font-bold uppercase px-2 py-1 rounded mt-0.5"
                  style={{
                    backgroundColor: '#FEE2E2',
                    color: '#B91C1C',
                  }}
                >
                  SOLD
                </span>
                <div>
                  <p className="font-body text-sm font-semibold" style={{ color: BRAND.colors.textHeading }}>
                    {sale.address}
                  </p>
                  <p className="font-body text-xs" style={{ color: BRAND.colors.textMuted }}>
                    {sale.area}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MLS Search CTA */}
      <section className="py-20" style={{ backgroundColor: BRAND.colors.primary }}>
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-4">
            Looking for Something Specific?
          </h2>
          <p className="font-body text-white/70 max-w-lg mx-auto mb-8">
            With access to thousands of properties through the MLS, we can find exactly what you&apos;re looking for. Tell us your requirements and we&apos;ll do the searching.
          </p>
          <Link
            href="/contact"
            className="inline-block font-body text-sm font-semibold px-8 py-4 transition-all hover:opacity-90"
            style={{
              backgroundColor: BRAND.colors.secondary,
              color: BRAND.colors.textHeading,
              borderRadius: BRAND.spacing.radiusButtons,
            }}
          >
            Start Your Property Search &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
