import { BRAND } from '@/lib/brand-tokens';
import { BlurFade } from '@/components/ui/blur-fade';
import { TextAnimate } from '@/components/ui/text-animate';

const galleryImages = [
  ...BRAND.images.gallery,
  ...BRAND.images.atmosphere,
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero — Minimal, then straight to gallery */}
      <section className="py-20 text-center" style={{ backgroundColor: BRAND.colors.bgAlt }}>
        <div className="max-w-[800px] mx-auto px-6">
          <BlurFade delay={0.1}>
            <p
              className="text-[11px] tracking-[0.3em] uppercase mb-4"
              style={{ color: BRAND.colors.primary, fontWeight: 500 }}
            >
              Portfolio / 갤러리
            </p>
          </BlurFade>
          <BlurFade delay={0.2}>
            <h1
              className="text-5xl md:text-[6rem] leading-[0.9] mb-6"
              style={{
                fontFamily: BRAND.fonts.heading,
                fontWeight: 400,
                color: BRAND.colors.textHeading,
              }}
            >
              Our Work
            </h1>
          </BlurFade>
          <BlurFade delay={0.3}>
            <p className="text-base" style={{ color: BRAND.colors.textMuted }}>
              From Korean perms to balayage transformations — see what our stylists create every day.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Gallery Grid — Edge-to-edge, asymmetric masonry */}
      <section style={{ backgroundColor: BRAND.colors.bgDark }} className="py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 px-2">
          {galleryImages.map((img, i) => {
            // Asymmetric sizes
            const sizes = ['col-span-2 row-span-2', 'col-span-1 row-span-1', 'col-span-1 row-span-2', 'col-span-1 row-span-1'];
            const sizeClass = sizes[i % sizes.length];

            return (
              <BlurFade key={i} delay={0.1 + i * 0.08}>
                <div
                  className={`${sizeClass} overflow-hidden group cursor-pointer relative`}
                  style={{ borderRadius: '4px' }}
                >
                  <img
                    src={img.url}
                    alt={img.description}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ minHeight: sizeClass.includes('row-span-2') ? '400px' : '200px' }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end">
                    <p className="text-white text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      {img.description}
                    </p>
                  </div>
                </div>
              </BlurFade>
            );
          })}

          {/* Additional cells with gradient fallbacks to fill the grid */}
          {[0, 1, 2, 3].map((i) => (
            <BlurFade key={`extra-${i}`} delay={0.3 + i * 0.08}>
              <div
                className="aspect-square overflow-hidden"
                style={{
                  borderRadius: '4px',
                  background: `linear-gradient(${135 + i * 45}deg, ${BRAND.colors.primary}40, ${BRAND.colors.accent}30)`,
                }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-sm" style={{ color: BRAND.colors.accentSoft, fontFamily: BRAND.fonts.heading }}>
                    {['K-Perm', 'Balayage', 'Color', 'Styling'][i]}
                  </p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <BlurFade delay={0.1}>
          <h2
            className="text-3xl md:text-5xl mb-6"
            style={{ fontFamily: BRAND.fonts.heading, fontWeight: 400, color: BRAND.colors.textHeading }}
          >
            Ready for your transformation?
          </h2>
          <p className="text-sm mb-8" style={{ color: BRAND.colors.textMuted }}>
            Follow us on Instagram for daily inspiration
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href={BRAND.business.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-sm tracking-[0.1em] uppercase font-semibold transition-all hover:scale-105"
              style={{
                backgroundColor: BRAND.colors.primary,
                color: BRAND.colors.bgDark,
                borderRadius: BRAND.spacing.radiusButtons,
              }}
            >
              Book Now
            </a>
            <a
              href={BRAND.business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm tracking-[0.1em] uppercase font-semibold border transition-all hover:scale-105"
              style={{
                borderColor: BRAND.colors.primary,
                color: BRAND.colors.primary,
                borderRadius: BRAND.spacing.radiusButtons,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              @tayasalon
            </a>
          </div>
        </BlurFade>
      </section>
    </>
  );
}
