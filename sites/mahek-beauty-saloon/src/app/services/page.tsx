import Image from 'next/image';
import { BRAND } from '@/lib/brand-tokens';

const SERVICES = [
  {
    category: 'Hair Styling',
    description: 'From precision cuts to complete color transformations, our stylists bring out the best in your hair.',
    img: BRAND.images.atmosphere[0].url,
    items: [
      { name: "Women's Cut & Style", price: '$60+' },
      { name: 'Wash & Blow Dry', price: '$55+' },
      { name: 'Root Touch-up', price: '$60+' },
      { name: 'Global Color', price: '$100+' },
      { name: 'Partial Highlights', price: '$250+' },
      { name: 'Full Highlights', price: '$350+' },
      { name: 'Balayage', price: '$350+' },
      { name: 'Keratin Treatment', price: '$350+' },
      { name: 'Nanoplastia', price: '$350+' },
      { name: 'Hair Botox', price: '$350+' },
      { name: 'Henna Application', price: '$45+' },
      { name: 'Perm', price: '$250+' },
    ],
  },
  {
    category: "Men's Grooming",
    description: 'Sharp cuts, clean fades, and grooming treatments tailored for the modern gentleman.',
    img: BRAND.images.atmosphere[3].url,
    items: [
      { name: 'Regular Haircut', price: '$25' },
      { name: 'Skin Fade', price: '$30' },
      { name: 'Beard Fade', price: '$20' },
      { name: 'Senior Cut', price: '$22' },
      { name: 'Color', price: '$30' },
      { name: 'Highlights', price: '$150+' },
      { name: "Men's Keratin", price: '$120+' },
      { name: 'Head Massage (15 min)', price: '$20' },
      { name: 'Hair Spa', price: '$65+' },
      { name: 'Perm', price: '$120+' },
    ],
  },
  {
    category: 'Skin Care & Facials',
    description: 'Rejuvenating facials and body treatments to restore your natural glow.',
    img: BRAND.images.atmosphere[1].url,
    items: [
      { name: 'Cleansing Facial', price: '$50' },
      { name: 'Shahnaz Gold + Massage', price: '$65' },
      { name: 'Shahnaz Herbal + Massage', price: '$75' },
      { name: 'Lotus + Massage', price: '$75' },
      { name: 'Rosa Graf + Massage', price: '$90' },
      { name: 'Diamond Facial', price: '$120' },
      { name: 'Casmara Facial', price: '$85 - $170' },
      { name: 'Body Polishing', price: '$125' },
      { name: 'Body Massage (1 hr)', price: '$125' },
      { name: 'Hot Stone Massage', price: '$100' },
    ],
  },
  {
    category: 'Waxing & Threading',
    description: 'Precision threading and gentle waxing for smooth, flawless skin.',
    img: BRAND.images.atmosphere[4].url,
    items: [
      { name: 'Eyebrow Threading', price: '$7' },
      { name: 'Upper Lip / Chin', price: '$5' },
      { name: 'Full Face Threading', price: '$25' },
      { name: 'Underarm Wax', price: '$10' },
      { name: 'Full Arm Wax', price: '$25+' },
      { name: 'Full Leg Wax', price: '$40+' },
      { name: 'Brazilian (Regular)', price: '$40' },
      { name: 'Brazilian (NUFree)', price: '$45' },
      { name: 'Full Body (no face)', price: '$140' },
      { name: 'Face Bleach', price: '$25+' },
    ],
  },
  {
    category: 'Bridal & Makeup',
    description: 'Let us make your special day unforgettable. From traditional to contemporary looks, we perfect every detail.',
    img: BRAND.images.gallery[0].url,
    items: [
      { name: 'Bridal Makeup', price: 'Call for pricing' },
      { name: 'Party Makeup', price: 'Call for pricing' },
      { name: 'Airbrush Makeup', price: 'Call for pricing' },
      { name: 'Permanent Makeup', price: 'Call for pricing' },
      { name: 'At-Home Bridal Service', price: 'Call for pricing' },
    ],
  },
  {
    category: 'MB Hair System',
    description: 'A non-surgical solution for hair loss. Get a full head of hair without surgery or downtime.',
    img: BRAND.images.atmosphere[3].url,
    items: [
      { name: 'Free Consultation', price: 'Complimentary' },
      { name: 'Custom Hair System', price: 'Call for pricing' },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative flex items-center justify-center" style={{ minHeight: '40vh' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${BRAND.images.backgrounds.booking})` }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 text-center">
          <p
            className="mb-3 tracking-[0.3em] text-brand-secondary"
            style={{ fontFamily: 'var(--font-heading)', fontSize: '12px', textTransform: 'uppercase' }}
          >
            What We Offer
          </p>
          <h1
            className="text-white"
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 400 }}
          >
            Our Services
          </h1>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-brand-bg-main" style={{ padding: '80px 0' }}>
        <div className="mx-auto max-w-[1140px] px-6">
          {SERVICES.map((cat, idx) => (
            <div
              key={cat.category}
              className={`${idx > 0 ? 'mt-20' : ''} grid items-start gap-10 lg:grid-cols-5`}
            >
              {/* Image */}
              <div className={`relative lg:col-span-2 ${idx % 2 === 1 ? 'lg:order-2' : ''}`} style={{ minHeight: '320px' }}>
                <Image
                  src={cat.img}
                  alt={cat.category}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Content */}
              <div className="lg:col-span-3">
                <p
                  className="mb-2 tracking-[0.3em] text-brand-secondary"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: '11px', textTransform: 'uppercase' }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </p>
                <h2
                  style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 400, lineHeight: 1.2 }}
                >
                  {cat.category}
                </h2>
                <p className="mt-3 text-brand-text-body">{cat.description}</p>

                <div className="mt-6 divide-y divide-brand-text-muted/20">
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex items-center justify-between py-3">
                      <span className="text-sm text-brand-text-heading" style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                        {item.name}
                      </span>
                      <span className="text-sm text-brand-secondary" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-primary" style={{ padding: '60px 0' }}>
        <div className="mx-auto max-w-[700px] px-6 text-center">
          <h2 className="text-white" style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 400 }}>
            Ready to Book?
          </h2>
          <p className="mt-3 text-white/70">
            Call us or visit either of our locations. Walk-ins welcome.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href={`tel:${BRAND.business.locations[0].phone}`}
              className="bg-brand-secondary px-8 py-3.5 text-white transition-opacity hover:opacity-90"
              style={{ fontFamily: 'var(--font-heading)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}
            >
              Call Etobicoke
            </a>
            <a
              href={`tel:${BRAND.business.locations[1].phone}`}
              className="border border-white/30 px-8 py-3.5 text-white transition-colors hover:border-white hover:bg-white/10"
              style={{ fontFamily: 'var(--font-heading)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}
            >
              Call Brampton
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
