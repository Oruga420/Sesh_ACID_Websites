import Image from 'next/image';
import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

export const metadata = {
  title: 'Listings — Randy Selzer Real Estate',
  description: 'View current and featured real estate listings in Mississauga, Oakville, and the GTA. Homes, condos, townhomes, and investment properties.',
};

export default function ListingsPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: BRAND.colors.bgAlt }}>
        <div className="max-w-content mx-auto px-6">
          <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-brand-textMuted">Listings</span>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-brand-textHeading mt-3 mb-6">
            Your Next Home<br />Is Waiting
          </h1>
          <p className="font-body text-lg text-brand-textBody leading-relaxed max-w-2xl">
            Explore properties across Mississauga, Oakville, and the Greater Toronto Area. From starter condos to luxury estates, I help you find the perfect fit.
          </p>
        </div>
      </section>

      {/* ===== MISSISSAUGA SHOWCASE ===== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-14">
            <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-brand-textMuted">Featured Areas</span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-textHeading mt-3">
              Neighborhoods I Know Best
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {[
              {
                name: 'Downtown Mississauga',
                image: BRAND.images.gallery[1].url,
                desc: 'Modern condos and urban living near Square One. Walking distance to transit, dining, and entertainment.',
                type: 'Condos, Townhomes',
              },
              {
                name: 'Erin Mills',
                image: BRAND.images.gallery[3].url,
                desc: 'Established family neighborhood with excellent schools, parks, and community amenities.',
                type: 'Detached, Semi-detached',
              },
              {
                name: 'Lorne Park',
                image: BRAND.images.atmosphere[0].url,
                desc: 'One of Mississauga\'s most prestigious neighborhoods with mature trees and spacious lots near the lake.',
                type: 'Luxury, Detached',
              },
            ].map((area, i) => (
              <div key={i} className="group rounded-card overflow-hidden border border-brand-border shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-heading text-xl font-semibold text-white">{area.name}</h3>
                    <span className="font-body text-xs text-white/80">{area.type}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-body text-sm text-brand-textBody leading-relaxed">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MLS SEARCH PROMPT ===== */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: BRAND.colors.bgDark }}>
        <div className="max-w-content mx-auto px-6 text-center">
          <span className="font-body text-xs font-bold uppercase tracking-[0.3em]" style={{ color: BRAND.colors.secondary }}>
            Property Search
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mt-3 mb-6">
            Looking for Something Specific?
          </h2>
          <p className="font-body text-lg text-gray-300 leading-relaxed max-w-xl mx-auto mb-8">
            Tell me what you&apos;re looking for — price range, neighborhood, property type — and I&apos;ll send you curated listings that match your criteria, before they hit the public market.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-btn font-body font-bold text-base transition-opacity hover:opacity-90"
              style={{ backgroundColor: BRAND.colors.secondary, color: BRAND.colors.bgDark }}
            >
              Start Your Search
            </Link>
            <a
              href={`tel:${BRAND.business.phone}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-btn font-body font-bold text-base border-2 text-white transition-colors hover:bg-white/10"
              style={{ borderColor: BRAND.colors.accent }}
            >
              Call {BRAND.business.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ===== BUYER TIPS ===== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-14">
            <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-brand-textMuted">From the Podcast</span>
            <h2 className="font-heading text-3xl font-semibold text-brand-textHeading mt-3">
              Market Insights
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              { title: 'The Truth About Staging', desc: 'How professional staging can dramatically impact your sale price and time on market.', date: 'Feb 2025' },
              { title: 'Investing in Land', desc: 'Discover the surprising benefits and strategies for vacant land investment in the GTA.', date: 'Feb 2025' },
              { title: 'Mortgage Secrets', desc: 'Three things most buyers don\'t know about recent Canadian mortgage rule changes.', date: 'Jan 2025' },
            ].map((ep, i) => (
              <a
                key={i}
                href="https://randyselzer.podbean.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-card border border-brand-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <span className="font-body text-xs text-brand-textMuted">{ep.date}</span>
                <h3 className="font-heading text-lg font-semibold text-brand-textHeading mt-2 mb-3 group-hover:text-brand-primary transition-colors">
                  {ep.title}
                </h3>
                <p className="font-body text-sm text-brand-textBody leading-relaxed">{ep.desc}</p>
                <span className="inline-block mt-3 font-body text-sm font-semibold text-brand-primary">Listen Now &rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
