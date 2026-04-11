import { BRAND } from '@/lib/brand-tokens';
import { BlurFade } from '@/components/ui/blur-fade';
import Link from 'next/link';

const serviceCategories = [
  {
    title: 'Haircuts / 헤어컷',
    items: [
      { name: "Women's Cut", price: '$60', duration: '1 hr' },
      { name: "Men's Cut", price: '$45', duration: '30–45 min' },
      { name: "Girl's Haircut", price: '$45', duration: '45 min – 1 hr' },
      { name: "Boy's Haircut", price: '$35', duration: '30–45 min' },
      { name: 'Bang Cut', price: '$15', duration: '15 min' },
    ],
  },
  {
    title: 'Korean Perms / 펌',
    items: [
      { name: 'Straight Setting Perm', price: '$350', duration: '4 hrs' },
      { name: 'Digital / Setting Perm', price: '$300', duration: '3 hrs' },
      { name: 'Digital Hippie / Jelly Perm', price: '$320', duration: '3.5 hrs' },
      { name: 'Straightening', price: '$300', duration: '3 hrs' },
      { name: "Men's Perm", price: '$150', duration: '2 hrs' },
      { name: "Men's Down Perm", price: '$100', duration: '1.25 hrs' },
    ],
  },
  {
    title: 'Color / 컬러',
    items: [
      { name: 'Root Touch Up', price: '$100', duration: '1.5 hrs' },
      { name: 'Root Touch Up & Cut', price: '$160', duration: '2 hrs' },
      { name: 'Full Color', price: '$150', duration: '1.5 hrs' },
      { name: 'Full Color & Cut', price: '$200', duration: '2–2.5 hrs' },
      { name: 'Balayage', price: '$380', duration: '5–5.5 hrs' },
      { name: 'Full Highlights + Color', price: '$380', duration: '5 hrs' },
      { name: 'Partial Highlights + Color', price: '$250', duration: '3 hrs' },
      { name: 'Full Bleach & Toner', price: '$350', duration: '5 hrs' },
      { name: 'Toner Only', price: '$170', duration: '1.5 hrs' },
    ],
  },
  {
    title: 'Styling / 스타일링',
    items: [
      { name: "Women's Blow Dry", price: '$45', duration: '45 min' },
      { name: "Men's Styling", price: '$25', duration: '30 min' },
      { name: 'Blow Dry + Curling Iron', price: '$65', duration: '–' },
      { name: 'Blow Dry + Flat Iron', price: '$65', duration: '–' },
      { name: 'Updo', price: '$90', duration: '–' },
    ],
  },
  {
    title: 'Treatments / 트리트먼트',
    items: [
      { name: 'Milbon Treatment', price: '$150', duration: '1.5 hrs' },
      { name: 'Hair Botox', price: '$300', duration: '3 hrs' },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero — Split layout, 60/40 image+text */}
      <section className="grid grid-cols-1 lg:grid-cols-5 min-h-[50vh]">
        <div
          className="lg:col-span-3 relative"
          style={{
            backgroundImage: `url(${BRAND.images.gallery[1].url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '40vh',
          }}
        >
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(42,33,24,0.8) 0%, rgba(42,33,24,0.4) 100%)' }} />
          <div className="relative z-10 flex flex-col justify-center h-full p-12 lg:p-20">
            <BlurFade delay={0.1}>
              <p
                className="text-[11px] tracking-[0.3em] uppercase mb-4"
                style={{ color: BRAND.colors.primary, textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}
              >
                Our Services / 서비스
              </p>
            </BlurFade>
            <BlurFade delay={0.2}>
              <h1
                className="text-5xl md:text-[5rem] leading-[0.9]"
                style={{
                  fontFamily: BRAND.fonts.heading,
                  fontWeight: 400,
                  color: BRAND.colors.textLight,
                  textShadow: '0 2px 12px rgba(0,0,0,0.6)',
                }}
              >
                Expert Care,
                <br />
                <span style={{ color: BRAND.colors.primary }}>Every Detail</span>
              </h1>
            </BlurFade>
          </div>
        </div>
        <div
          className="lg:col-span-2 flex items-center justify-center p-12"
          style={{ backgroundColor: BRAND.colors.bgAlt }}
        >
          <BlurFade delay={0.3}>
            <p className="text-base leading-relaxed max-w-[360px]" style={{ color: BRAND.colors.textBody }}>
              From precision cuts to transformative Korean perms and luxurious Milbon treatments,
              our senior and master stylists bring years of expertise to every appointment. We take
              time to understand your vision and deliver results that make you feel confident.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Service Categories — Editorial list style */}
      <section className="py-32" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <div className="max-w-[900px] mx-auto px-6">
          {serviceCategories.map((cat, ci) => (
            <BlurFade key={cat.title} delay={0.1 + ci * 0.05}>
              <div className={ci > 0 ? 'mt-20' : ''}>
                <h2
                  className="text-3xl md:text-4xl mb-8 pb-4 border-b"
                  style={{
                    fontFamily: BRAND.fonts.heading,
                    fontWeight: 500,
                    color: BRAND.colors.textHeading,
                    borderColor: BRAND.colors.accentSoft,
                  }}
                >
                  {cat.title}
                </h2>
                <div className="space-y-0">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-baseline justify-between py-4 border-b"
                      style={{ borderColor: `${BRAND.colors.accentSoft}50` }}
                    >
                      <div className="flex-1">
                        <span className="text-base font-medium" style={{ color: BRAND.colors.textHeading }}>
                          {item.name}
                        </span>
                        <span className="text-sm ml-3" style={{ color: BRAND.colors.textMuted }}>
                          {item.duration}
                        </span>
                      </div>
                      <span
                        className="text-lg font-semibold ml-4 shrink-0"
                        style={{ color: BRAND.colors.primary, fontFamily: BRAND.fonts.body }}
                      >
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}

          <BlurFade delay={0.5}>
            <div className="mt-16 text-center">
              <p className="text-sm mb-6" style={{ color: BRAND.colors.textMuted }}>
                Prices shown are starting prices. Final pricing may vary based on hair length and condition.
              </p>
              <a
                href={BRAND.business.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 text-sm tracking-[0.1em] uppercase font-semibold transition-all hover:scale-105"
                style={{
                  backgroundColor: BRAND.colors.primary,
                  color: BRAND.colors.bgDark,
                  borderRadius: BRAND.spacing.radiusButtons,
                }}
              >
                Book a Service
              </a>
            </div>
          </BlurFade>
        </div>
      </section>
    </>
  );
}
