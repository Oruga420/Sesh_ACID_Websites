{/*
  Dania Latina Dominican Hair Salon — Homepage
  1. Dominant emotion: Joy + empowerment — Dominican warmth, princess treatment, singing and smiling
  2. Work = product: Yes, transformations are the product (Dominican blowouts, extensions)
  3. Established: Growing salon, very active IG (345 posts), loyal clients (5+ years)
  4. Customer feel: "Like a princess", "constantly singing and smiling", "hard not to feel welcome"
  5. Would NEVER fit: Cold/minimal, corporate, dark/moody, restrained

  Layout: GALLERY-FORWARD + NEIGHBORHOOD (B+D)
  ONE unique thing: Vibrant coral-to-amber gradient energy with rounded shapes — feels Dominican, not generic
*/}

import { BRAND } from '@/lib/brand-tokens';
import Link from 'next/link';
import { BlurFade } from '@/components/ui/blur-fade';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { Marquee } from '@/components/ui/marquee';

const testimonials = [
  { text: "They treat you like a princess when you go there", author: "Client" },
  { text: "Dania has been doing my hair for over 5 years. It's by far my favourite salon!", author: "Client" },
  { text: "Constantly singing and smiling, it's really hard not to feel welcome", author: "Client" },
  { text: "Best salon ever!!! Very professional and accommodating!!!", author: "Client" },
  { text: "Completely focused on the health of my hair", author: "Client" },
  { text: "Excelente; profesionalidad, un personal maravilloso", author: "Cliente" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO — Gradient background (no images available), dramatic typography */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ background: `linear-gradient(160deg, ${BRAND.colors.bgDark} 0%, #4A2848 40%, ${BRAND.colors.primary}30 100%)` }}>
        {/* Decorative circles */}
        <div className="absolute top-20 right-[-100px] w-[400px] h-[400px] rounded-full opacity-20" style={{ background: `radial-gradient(circle, ${BRAND.colors.primary}, transparent)` }} />
        <div className="absolute bottom-[-50px] left-[-100px] w-[300px] h-[300px] rounded-full opacity-15" style={{ background: `radial-gradient(circle, ${BRAND.colors.accent}, transparent)` }} />

        {/* Salon-specific SVG divider — flowing hair wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60C200 20 400 80 600 50C800 20 1000 80 1200 50C1300 35 1400 45 1440 40V100H0V60Z" fill={BRAND.colors.bgMain} />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-20 text-center">
          <BlurFade delay={0.1}>
            <p className="text-[11px] tracking-[0.3em] uppercase mb-6" style={{ color: BRAND.colors.primary, textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}>
              Dominican Hair Salon &middot; Burlington, ON
            </p>
          </BlurFade>
          <BlurFade delay={0.2}>
            <h1 className="text-6xl md:text-[7rem] leading-[0.9] mb-8 max-w-[900px] mx-auto" style={{ fontFamily: BRAND.fonts.heading, fontWeight: 400, color: BRAND.colors.textLight, textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}>
              Where Every
              <br />
              <span style={{ background: `linear-gradient(135deg, ${BRAND.colors.primary}, ${BRAND.colors.accent})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Curl</span> Is Celebrated
            </h1>
          </BlurFade>
          <BlurFade delay={0.35}>
            <p className="text-lg md:text-xl max-w-[550px] mx-auto mb-10 leading-relaxed" style={{ color: BRAND.colors.accentSoft, fontWeight: 300, textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}>
              Dominican blowouts, keratin treatments, extensions, and coloring for every texture.
              Walk-ins welcome. Se habla espanol.
            </p>
          </BlurFade>
          <BlurFade delay={0.5}>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={BRAND.business.bookingUrl} target="_blank" rel="noopener noreferrer">
                <ShimmerButton className="px-8 py-4 text-sm tracking-[0.08em] uppercase font-bold" background={BRAND.colors.primary} shimmerColor="rgba(244,162,89,0.4)">
                  <span className="text-white">Book Your Glow-Up</span>
                </ShimmerButton>
              </a>
              <Link href="/services" className="px-8 py-4 text-sm tracking-[0.08em] uppercase font-bold border-2 transition-all hover:bg-white/10" style={{ borderColor: BRAND.colors.primary, color: BRAND.colors.primary, borderRadius: BRAND.spacing.radiusButtons }}>
                Nuestros Servicios
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* SERVICES TEASER — Varied padding, different from hero */}
      <section className="py-28" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <BlurFade delay={0.1}>
            <p className="text-[11px] tracking-[0.3em] uppercase mb-3 text-center" style={{ color: BRAND.colors.primary, fontWeight: 600 }}>
              Servicios / Services
            </p>
            <h2 className="text-4xl md:text-5xl text-center mb-16" style={{ fontFamily: BRAND.fonts.heading, fontWeight: 400, color: BRAND.colors.textHeading }}>
              Hair Magic for Every Texture
            </h2>
          </BlurFade>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Dominican Blowout', desc: 'Signature smooth, bouncy blowout using traditional Dominican techniques. All hair types.' },
              { name: 'Keratin Treatment', desc: 'Long-lasting smoothing and frizz control. Healthier, more manageable hair for months.' },
              { name: 'Hair Extensions', desc: 'Seamless extensions for length, volume, and versatility. Multiple methods available.' },
              { name: 'Balayage & Color', desc: 'Hand-painted highlights and full color services. Sun-kissed to bold transformations.' },
              { name: 'Curly Hair Styling', desc: 'Embrace your natural texture. Cuts, styling, and treatments designed for curls.' },
              { name: 'Braiding & Weaves', desc: 'Protective styling including braids, weaves, and crochet. Expert tension-free techniques.' },
            ].map((s, i) => (
              <BlurFade key={s.name} delay={0.15 + i * 0.08}>
                <div className="p-6 h-full transition-all hover:translate-y-[-4px]" style={{ backgroundColor: BRAND.colors.bgCard, borderRadius: BRAND.spacing.radiusCards, boxShadow: '0 4px 24px rgba(45,27,46,0.08)' }}>
                  <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${BRAND.colors.primary}20, ${BRAND.colors.accent}20)` }}>
                    <span style={{ color: BRAND.colors.primary, fontSize: '20px' }}>✦</span>
                  </div>
                  <h3 className="text-lg mb-2" style={{ fontFamily: BRAND.fonts.heading, fontWeight: 700, color: BRAND.colors.textHeading }}>{s.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: BRAND.colors.textMuted }}>{s.desc}</p>
                </div>
              </BlurFade>
            ))}
          </div>
          <BlurFade delay={0.6}>
            <div className="text-center mt-12">
              <Link href="/services" className="inline-block text-sm tracking-[0.1em] uppercase font-medium border-b-2 pb-1" style={{ color: BRAND.colors.primary, borderColor: BRAND.colors.primary }}>
                View All 93 Services &rarr;
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* TESTIMONIALS — Full-bleed dark section with Marquee */}
      <section className="py-20 overflow-hidden" style={{ backgroundColor: BRAND.colors.bgDark }}>
        <BlurFade delay={0.1}>
          <p className="text-[11px] tracking-[0.3em] uppercase mb-3 text-center" style={{ color: BRAND.colors.primary }}>What Our Clients Say</p>
          <h2 className="text-3xl md:text-4xl text-center mb-12" style={{ fontFamily: BRAND.fonts.heading, fontWeight: 400, color: BRAND.colors.textLight }}>The Princess Treatment</h2>
        </BlurFade>
        <Marquee pauseOnHover className="[--duration:40s]">
          {testimonials.map((t, i) => (
            <div key={i} className="mx-4 px-6 py-4 max-w-[350px]" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: BRAND.spacing.radiusCards, border: `1px solid rgba(232,93,117,0.2)` }}>
              <p className="text-sm italic mb-2" style={{ color: BRAND.colors.accentSoft }}>&ldquo;{t.text}&rdquo;</p>
              <p className="text-xs" style={{ color: BRAND.colors.textMuted }}>— {t.author}</p>
            </div>
          ))}
        </Marquee>
      </section>

      {/* FULL-BLEED CTA */}
      <section className="py-32 text-center" style={{ background: `linear-gradient(135deg, ${BRAND.colors.primary}, ${BRAND.colors.accent})` }}>
        <div className="max-w-[700px] mx-auto px-6">
          <BlurFade delay={0.1}>
            <h2 className="text-4xl md:text-6xl mb-6" style={{ fontFamily: BRAND.fonts.heading, fontWeight: 400, color: '#fff' }}>
              Tu Pelo Merece<br />Lo Mejor
            </h2>
            <p className="text-base mb-10 text-white/80">Your hair deserves the best. Book online or walk in — we&apos;re ready for you.</p>
            <a href={BRAND.business.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 text-sm tracking-[0.08em] uppercase font-bold transition-all hover:scale-105" style={{ backgroundColor: BRAND.colors.bgDark, color: BRAND.colors.primary, borderRadius: BRAND.spacing.radiusButtons }}>
              Reserve Your Chair
            </a>
          </BlurFade>
        </div>
      </section>
    </>
  );
}
