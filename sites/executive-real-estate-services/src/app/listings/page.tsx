import { BRAND } from '@/lib/brand-tokens';
import Link from 'next/link';

const sampleListings = [
  {
    address: '72 Melmar Street',
    city: 'Brampton',
    price: '$599,000',
    beds: 3,
    baths: 2,
    type: 'Detached',
    status: 'For Sale',
  },
  {
    address: '21 Stalybridge Drive',
    city: 'Oakville',
    price: '$999,999',
    beds: 4,
    baths: 3,
    type: 'Detached',
    status: 'For Sale',
  },
  {
    address: '145 Shawnmarr Road',
    city: 'Mississauga',
    price: '$799,750',
    beds: 3,
    baths: 2,
    type: 'Condo',
    status: 'For Sale',
  },
  {
    address: '294 Newman Drive',
    city: 'Cambridge',
    price: '$2,900/mo',
    beds: 3,
    baths: 2,
    type: 'Townhouse',
    status: 'For Rent',
  },
  {
    address: '180 Second Road East',
    city: 'Hamilton',
    price: '$2,799,999',
    beds: 6,
    baths: 5,
    type: 'Detached',
    status: 'For Sale',
  },
  {
    address: '8 Stephensen Court',
    city: 'Brampton',
    price: '$793,000',
    beds: 3,
    baths: 3,
    type: 'Semi-Detached',
    status: 'For Sale',
  },
];

export default function ListingsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-heroBg to-brand-primary py-20">
        <div className="max-w-content mx-auto px-6 text-center">
          <p className="font-heading text-xs uppercase tracking-[0.3em] text-white/60 mb-4">Featured Listings</p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-4">
            Properties Across the GTA
          </h1>
          <p className="text-white/80 font-body max-w-2xl mx-auto text-lg">
            Browse our curated selection of residential, commercial, and rental properties. For the full MLS listing database, contact our team directly.
          </p>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleListings.map((listing, i) => (
              <div key={i} className="rounded-card border border-brand-border overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                {/* Property Image Placeholder — brand-colored with property type icon */}
                <div className="h-52 bg-gradient-to-br from-brand-primary/10 to-brand-bgAlt flex items-center justify-center relative">
                  <svg className="w-16 h-16 text-brand-primary/30" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                  </svg>
                  <span className={`absolute top-3 right-3 text-xs font-heading font-bold uppercase px-3 py-1 rounded-full ${
                    listing.status === 'For Rent'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {listing.status}
                  </span>
                </div>

                {/* Details */}
                <div className="p-6">
                  <p className="font-heading text-2xl font-bold text-brand-primary mb-1">{listing.price}</p>
                  <h3 className="font-heading text-base font-semibold text-brand-textHeading mb-1">{listing.address}</h3>
                  <p className="text-brand-textMuted text-sm font-body mb-4">{listing.city}, Ontario</p>
                  <div className="flex items-center gap-4 text-sm text-brand-textBody font-body">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-brand-textMuted" fill="currentColor" viewBox="0 0 20 20"><path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z"/></svg>
                      {listing.beds} Beds
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-brand-textMuted" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                      {listing.baths} Baths
                    </span>
                    <span className="text-brand-textMuted">
                      {listing.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-brand-bgAlt rounded-card px-10 py-8 border border-brand-border">
              <h3 className="font-heading text-xl font-bold text-brand-textHeading mb-2">
                Looking for Something Specific?
              </h3>
              <p className="text-brand-textBody font-body mb-6 max-w-lg">
                These are sample featured listings. Contact our team for access to the full MLS database and personalized property recommendations.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-brand-primary text-white font-heading font-semibold text-sm rounded-btn hover:bg-brand-heroBg transition-all"
                >
                  Contact Team Executive
                </Link>
                <a
                  href={BRAND.business.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-brand-primary text-brand-primary font-heading font-semibold text-sm rounded-btn hover:bg-brand-primary hover:text-white transition-all"
                >
                  Browse Full Listings
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-brand-bgAlt">
        <div className="max-w-content mx-auto px-6">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-textHeading text-center mb-10">
            We Cover the Entire GTA
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {BRAND.business.serviceAreas.map((area) => (
              <div key={area} className="bg-white rounded-card p-6 text-center border border-brand-border hover:shadow-md transition-all">
                <svg className="w-8 h-8 text-brand-primary mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <p className="font-heading font-semibold text-sm text-brand-textHeading">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
