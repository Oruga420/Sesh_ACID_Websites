import Image from 'next/image';
import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

export const metadata = {
  title: 'Services & Pricing — P & A Nails Hamilton Mountain',
  description: 'View our full service menu with transparent pricing. Manicures, pedicures, gel nails, waxing, and more at P & A Nails on Hamilton Mountain.',
};

const serviceCategories = [
  {
    name: 'Manicure',
    image: BRAND.images.services[0].url,
    items: [
      { name: 'Regular Manicure', price: '$18' },
      { name: 'French Manicure', price: '$22' },
      { name: 'Deluxe Manicure', price: '$28' },
      { name: 'Gel Manicure', price: '$35' },
      { name: 'Shellac Manicure', price: '$35' },
    ],
  },
  {
    name: 'Pedicure',
    image: BRAND.images.services[1].url,
    items: [
      { name: 'Regular Pedicure', price: '$28' },
      { name: 'French Pedicure', price: '$33' },
      { name: 'Deluxe Pedicure', price: '$38' },
      { name: 'Spa Pedicure', price: '$45' },
      { name: 'Gel Pedicure', price: '$45' },
    ],
  },
  {
    name: 'Nail Enhancements',
    image: BRAND.images.gallery[2].url,
    items: [
      { name: 'Acrylic Full Set', price: '$45' },
      { name: 'Acrylic Fill', price: '$30' },
      { name: 'Gel Full Set', price: '$55' },
      { name: 'Gel Fill', price: '$35' },
      { name: 'Nail Repair (per nail)', price: '$5' },
    ],
  },
  {
    name: 'Nail Art & Extras',
    image: BRAND.images.gallery[3].url,
    items: [
      { name: 'Simple Nail Art (per nail)', price: '$5+' },
      { name: 'Complex Design (per nail)', price: '$10+' },
      { name: 'Gems & Rhinestones', price: '$3+' },
      { name: 'Polish Change (Hands)', price: '$12' },
      { name: 'Polish Change (Feet)', price: '$15' },
    ],
  },
  {
    name: 'Waxing',
    image: null,
    items: [
      { name: 'Eyebrow Wax', price: '$10' },
      { name: 'Upper Lip', price: '$6' },
      { name: 'Full Face', price: '$25' },
      { name: 'Half Arm', price: '$20' },
      { name: 'Full Arm', price: '$30' },
      { name: 'Half Leg', price: '$25' },
      { name: 'Full Leg', price: '$45' },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-brand-bg-warm py-14">
        <div className="mx-auto max-w-[1240px] px-5">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-brand-primary">
            Our Menu
          </p>
          <h1
            className="text-4xl font-bold text-brand-text-heading md:text-5xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Services &amp; Pricing
          </h1>
          <p className="mt-3 max-w-xl text-brand-text-muted">
            Transparent pricing, no surprises. All services performed by our certified
            team with high-quality products.
          </p>
        </div>
      </section>

      {/* Service categories */}
      <section className="py-14">
        <div className="mx-auto max-w-[1240px] px-5">
          {serviceCategories.map((cat, ci) => (
            <div
              key={cat.name}
              className={`mb-12 ${ci % 2 === 1 ? 'md:flex-row-reverse' : ''} flex flex-col gap-8 md:flex-row md:items-start`}
            >
              {/* Image side */}
              {cat.image && (
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[3px] md:w-1/3">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              )}

              {/* Content side */}
              <div className={cat.image ? 'flex-1' : 'w-full'}>
                <h2
                  className="mb-4 text-2xl font-bold text-brand-text-heading"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {cat.name}
                </h2>
                <div className="divide-y divide-brand-secondary">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between py-3"
                    >
                      <span className="text-brand-text-body">{item.name}</span>
                      <span className="font-bold text-brand-text-heading">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="mt-4 rounded-[3px] bg-brand-bg-warm p-6 text-center">
            <p className="text-sm text-brand-text-muted">
              Prices may vary based on nail length and complexity. Combo deals available
              &mdash; ask us about our packages!
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-14 text-center text-white"
        style={{ backgroundColor: BRAND.colors.primary }}
      >
        <div className="mx-auto max-w-[1240px] px-5">
          <h2
            className="mb-3 text-3xl font-bold"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Ready to Treat Yourself?
          </h2>
          <p className="mx-auto mb-6 max-w-md text-white/90">
            Walk-ins are always welcome, or call ahead to secure your spot.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-[3px] border-2 border-white bg-white px-8 py-3 font-bold transition-colors hover:bg-transparent hover:text-white"
            style={{ color: BRAND.colors.primary }}
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
