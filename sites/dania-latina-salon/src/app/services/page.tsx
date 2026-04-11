import { BRAND } from '@/lib/brand-tokens';
import { BlurFade } from '@/components/ui/blur-fade';

const serviceCategories = [
  { title: 'Blowouts & Styling / Alisados', items: [
    { name: 'Dominican Blowout', desc: 'Traditional smooth, bouncy blowout for all hair types' },
    { name: 'Wash & Blow Dry', desc: 'Shampoo, condition, and professional blow dry' },
    { name: 'Flat Iron Press', desc: 'Silk press for sleek, straight finish' },
    { name: 'Roller Set', desc: 'Classic Dominican roller set for volume and bounce' },
    { name: 'Updo / Special Occasion', desc: 'Elegant styling for events and celebrations' },
  ]},
  { title: 'Color & Highlights / Color', items: [
    { name: 'Full Color', desc: 'Complete color transformation with premium products' },
    { name: 'Root Touch Up', desc: 'Seamless color maintenance for grown-out roots' },
    { name: 'Balayage', desc: 'Hand-painted highlights for natural, sun-kissed dimension' },
    { name: 'Highlights (Full)', desc: 'Full head foil highlights for dramatic transformation' },
    { name: 'Highlights (Partial)', desc: 'Face-framing or partial highlights for subtle change' },
    { name: 'Color Correction', desc: 'Expert correction for damaged or uneven color (3-day cancellation notice)' },
  ]},
  { title: 'Treatments / Tratamientos', items: [
    { name: 'Keratin Treatment', desc: 'Long-lasting smoothing and frizz control. 3-6 months of manageable hair' },
    { name: 'Permanent Straightening', desc: 'Chemical straightening for lasting results' },
    { name: 'Deep Conditioning', desc: 'Intensive moisture and repair for damaged or dry hair' },
    { name: 'Protein Treatment', desc: 'Strength-building treatment for weak or over-processed hair' },
  ]},
  { title: 'Extensions & Braiding / Extensiones', items: [
    { name: 'Hair Extensions', desc: 'Clip-in, sew-in, or fusion extensions for length and volume' },
    { name: 'Hair Weaves', desc: 'Full or partial weave installations' },
    { name: 'Braiding', desc: 'Box braids, cornrows, and protective styles' },
    { name: 'Crochet', desc: 'Crochet braids with natural-looking textures' },
  ]},
  { title: 'Cuts & More / Cortes', items: [
    { name: "Women's Haircut", desc: 'Precision cut tailored to your face shape and texture' },
    { name: "Men's Haircut", desc: 'Clean cuts and fades' },
    { name: "Kids Haircut", desc: 'Gentle, patient service for the little ones' },
    { name: 'Makeup Services', desc: 'Professional makeup for events, photoshoots, and everyday glam' },
  ]},
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero — asymmetric 60/40 split */}
      <section className="grid grid-cols-1 lg:grid-cols-5 min-h-[45vh]">
        <div className="lg:col-span-3 flex items-center p-12 lg:p-20" style={{ background: `linear-gradient(160deg, ${BRAND.colors.bgDark} 0%, #4A2848 100%)` }}>
          <div>
            <BlurFade delay={0.1}>
              <p className="text-[11px] tracking-[0.3em] uppercase mb-4" style={{ color: BRAND.colors.primary, textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}>Nuestros Servicios / Our Services</p>
            </BlurFade>
            <BlurFade delay={0.2}>
              <h1 className="text-5xl md:text-[5rem] leading-[0.9]" style={{ fontFamily: BRAND.fonts.heading, fontWeight: 400, color: BRAND.colors.textLight, textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}>
                93 Services,<br /><span style={{ color: BRAND.colors.primary }}>One Passion</span>
              </h1>
            </BlurFade>
          </div>
        </div>
        <div className="lg:col-span-2 flex items-center justify-center p-12" style={{ backgroundColor: BRAND.colors.bgAlt }}>
          <BlurFade delay={0.3}>
            <p className="text-base leading-relaxed max-w-[360px]" style={{ color: BRAND.colors.textBody }}>
              From Dominican blowouts to keratin treatments, balayage to braiding — our stylists
              specialize in every texture and technique. Walk-ins welcome, or book online for
              guaranteed availability.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Service Categories — Editorial list */}
      <section className="py-32" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <div className="max-w-[900px] mx-auto px-6">
          {serviceCategories.map((cat, ci) => (
            <BlurFade key={cat.title} delay={0.1 + ci * 0.05}>
              <div className={ci > 0 ? 'mt-20' : ''}>
                <h2 className="text-3xl md:text-4xl mb-8 pb-4 border-b" style={{ fontFamily: BRAND.fonts.heading, fontWeight: 700, color: BRAND.colors.textHeading, borderColor: BRAND.colors.accentSoft }}>
                  {cat.title}
                </h2>
                <div className="space-y-0">
                  {cat.items.map((item) => (
                    <div key={item.name} className="py-5 border-b" style={{ borderColor: `${BRAND.colors.accentSoft}60` }}>
                      <h3 className="text-base font-semibold mb-1" style={{ color: BRAND.colors.textHeading }}>{item.name}</h3>
                      <p className="text-sm" style={{ color: BRAND.colors.textMuted }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}
          <BlurFade delay={0.5}>
            <div className="mt-16 text-center">
              <p className="text-sm mb-6" style={{ color: BRAND.colors.textMuted }}>Pricing available on Vagaro. Walk-ins welcome.</p>
              <a href={BRAND.business.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 text-sm tracking-[0.08em] uppercase font-bold text-white transition-all hover:scale-105" style={{ background: `linear-gradient(135deg, ${BRAND.colors.primary}, ${BRAND.colors.accent})`, borderRadius: BRAND.spacing.radiusButtons }}>
                Book a Service
              </a>
            </div>
          </BlurFade>
        </div>
      </section>
    </>
  );
}
