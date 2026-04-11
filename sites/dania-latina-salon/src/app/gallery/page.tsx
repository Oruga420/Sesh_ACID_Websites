import { BRAND } from '@/lib/brand-tokens';
import { BlurFade } from '@/components/ui/blur-fade';

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 text-center" style={{ backgroundColor: BRAND.colors.bgAlt }}>
        <div className="max-w-[800px] mx-auto px-6">
          <BlurFade delay={0.1}>
            <p className="text-[11px] tracking-[0.3em] uppercase mb-4" style={{ color: BRAND.colors.primary, fontWeight: 600 }}>Galeria / Gallery</p>
          </BlurFade>
          <BlurFade delay={0.2}>
            <h1 className="text-5xl md:text-[6rem] leading-[0.9] mb-6" style={{ fontFamily: BRAND.fonts.heading, fontWeight: 400, color: BRAND.colors.textHeading }}>
              Our Transformations
            </h1>
          </BlurFade>
          <BlurFade delay={0.3}>
            <p className="text-base" style={{ color: BRAND.colors.textMuted }}>
              Follow us on Instagram to see daily blowout reveals, extension transformations, and color magic.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Gallery Grid — CSS gradient fallbacks since no images available */}
      <section className="py-4" style={{ backgroundColor: BRAND.colors.bgDark }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 px-2">
          {[
            { label: 'Dominican Blowout', gradient: `135deg, ${BRAND.colors.primary}80, ${BRAND.colors.accent}60`, span: 'col-span-2 row-span-2' },
            { label: 'Keratin', gradient: `180deg, ${BRAND.colors.accent}70, ${BRAND.colors.primary}50`, span: '' },
            { label: 'Extensions', gradient: `225deg, ${BRAND.colors.secondary}90, ${BRAND.colors.primary}60`, span: '' },
            { label: 'Balayage', gradient: `90deg, ${BRAND.colors.accent}80, ${BRAND.colors.accentSoft}60`, span: '' },
            { label: 'Curly Hair', gradient: `160deg, ${BRAND.colors.primary}70, ${BRAND.colors.secondary}80`, span: '' },
            { label: 'Braiding', gradient: `200deg, ${BRAND.colors.secondary}80, ${BRAND.colors.accent}50`, span: 'col-span-2' },
            { label: 'Color', gradient: `135deg, ${BRAND.colors.accent}90, ${BRAND.colors.primary}70`, span: '' },
            { label: 'Makeup', gradient: `45deg, ${BRAND.colors.primary}60, ${BRAND.colors.accentSoft}80`, span: '' },
          ].map((item, i) => (
            <BlurFade key={i} delay={0.1 + i * 0.06}>
              <div
                className={`${item.span} overflow-hidden group cursor-pointer relative flex items-center justify-center`}
                style={{
                  background: `linear-gradient(${item.gradient})`,
                  borderRadius: '8px',
                  minHeight: item.span.includes('row-span-2') ? '350px' : '170px',
                }}
              >
                <div className="text-center">
                  <p className="text-xl font-bold text-white/90" style={{ fontFamily: BRAND.fonts.heading, textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>{item.label}</p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <BlurFade delay={0.1}>
          <h2 className="text-3xl md:text-5xl mb-4" style={{ fontFamily: BRAND.fonts.heading, fontWeight: 400, color: BRAND.colors.textHeading }}>
            See the Real Results
          </h2>
          <p className="text-sm mb-8" style={{ color: BRAND.colors.textMuted }}>
            345+ posts of transformations on our Instagram
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href={BRAND.business.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 text-sm tracking-[0.08em] uppercase font-bold text-white transition-all hover:scale-105" style={{ background: `linear-gradient(135deg, ${BRAND.colors.primary}, ${BRAND.colors.accent})`, borderRadius: BRAND.spacing.radiusButtons }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              @danialatinadominicansalon
            </a>
            <a href={BRAND.business.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 text-sm tracking-[0.08em] uppercase font-bold border-2 transition-all hover:scale-105" style={{ borderColor: BRAND.colors.primary, color: BRAND.colors.primary, borderRadius: BRAND.spacing.radiusButtons }}>
              Book Now
            </a>
          </div>
        </BlurFade>
      </section>
    </>
  );
}
