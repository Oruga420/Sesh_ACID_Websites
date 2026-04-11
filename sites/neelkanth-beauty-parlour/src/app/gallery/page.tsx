import { BRAND } from '@/lib/brand-tokens';
import { BlurFade } from '@/components/ui/blur-fade';
import Link from 'next/link';

const galleryImages = [
  { url: BRAND.images.hero, description: 'Professional beauty portrait — elegant hair and makeup styling', aspect: 'col-span-2 row-span-2' },
  { url: BRAND.images.gallery[0]?.url, description: 'Beauty treatment showcase', aspect: 'col-span-1 row-span-1' },
  { url: null, gradient: `linear-gradient(135deg, ${BRAND.colors.primary}33, ${BRAND.colors.gold}55)`, description: 'Threading & facial services', aspect: 'col-span-1 row-span-1', overlay: 'Threading\nExpertise' },
  { url: null, gradient: `linear-gradient(135deg, ${BRAND.colors.gold}44, ${BRAND.colors.warmCream})`, description: 'Bridal makeup artistry', aspect: 'col-span-1 row-span-2', overlay: 'Bridal\nMakeup' },
  { url: BRAND.images.hero, description: 'Salon atmosphere and styling', aspect: 'col-span-1 row-span-1' },
  { url: BRAND.images.gallery[0]?.url, description: 'Beauty results close-up', aspect: 'col-span-1 row-span-1' },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-20 md:py-28"
        style={{ backgroundColor: BRAND.colors.secondary }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <BlurFade delay={0.1}>
            <span
              className="block text-xs font-bold uppercase tracking-[0.3em] mb-3"
              style={{ color: BRAND.colors.gold, fontFamily: `${BRAND.fonts.nav}, ${BRAND.fonts.navFallback}` }}
            >
              Portfolio
            </span>
          </BlurFade>
          <BlurFade delay={0.2}>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
              style={{ fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`, color: BRAND.colors.textLight }}
            >
              Our Gallery
            </h1>
          </BlurFade>
          <BlurFade delay={0.3}>
            <p className="text-lg max-w-2xl text-white/70" style={{ fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}` }}>
              Every look we create tells a story. Browse our portfolio of threading, facials, bridal makeup and more.
              Follow us on Instagram for daily updates.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Gallery Grid — asymmetric masonry */}
      <section className="py-16 md:py-24" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
            {galleryImages.map((img, i) => (
              <BlurFade key={i} delay={0.1 + i * 0.08}>
                <div
                  className={`relative overflow-hidden rounded-lg group cursor-pointer h-full ${img.aspect}`}
                >
                  {img.url ? (
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${img.url})` }}
                    />
                  ) : (
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ background: img.gradient }}
                    >
                      {img.overlay && (
                        <span
                          className="text-2xl md:text-3xl font-bold text-center whitespace-pre-line"
                          style={{ color: BRAND.colors.primary, fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}` }}
                        >
                          {img.overlay}
                        </span>
                      )}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-white text-xs font-medium">{img.description}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 md:py-20" style={{ backgroundColor: BRAND.colors.warmCream }}>
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <BlurFade delay={0.1}>
            <span
              className="block text-xs font-bold uppercase tracking-[0.3em] mb-3"
              style={{ color: BRAND.colors.primary, fontFamily: `${BRAND.fonts.nav}, ${BRAND.fonts.navFallback}` }}
            >
              Follow Us
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`, color: BRAND.colors.textHeading }}
            >
              See More on Instagram
            </h2>
            <p className="text-base mb-8" style={{ color: BRAND.colors.textBody, fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}` }}>
              With 570+ posts showcasing our latest work, our Instagram is the best place to see what we do daily.
            </p>
            <a
              href={BRAND.business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-md text-white transition-all hover:shadow-lg"
              style={{ backgroundColor: BRAND.colors.primary, fontFamily: `${BRAND.fonts.nav}, ${BRAND.fonts.navFallback}` }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              @neelkanthbeautyparlour
            </a>
          </BlurFade>
        </div>
      </section>
    </>
  );
}
