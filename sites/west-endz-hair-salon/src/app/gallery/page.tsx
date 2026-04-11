import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';
import ScrollReveal from '@/components/ScrollReveal';

const galleryImages = [
  { url: BRAND.images.gallery[0].url, description: 'Professional men styling', span: 'md:col-span-2 md:row-span-2', minH: '480px' },
  { url: BRAND.images.gallery[1].url, description: 'Beautiful hair coloring result', span: '', minH: '280px' },
  { url: BRAND.images.gallery[3].url, description: 'Mon Platin professional products', span: '', minH: '280px' },
  { url: BRAND.images.gallery[2].url, description: 'Salon styling tools', span: 'md:col-span-2', minH: '320px' },
  { url: BRAND.images.gallery[1].url, description: 'Hair coloring showcase', span: '', minH: '320px' },
];

export default function GalleryPage() {
  return (
    <>
      {/* Page Header */}
      <section
        className="relative flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${BRAND.images.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '35vh',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.7)' }} />
        <div className="relative z-10 py-16 px-6">
          <p
            className="mb-3"
            style={{
              fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}`,
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: BRAND.colors.accent,
            }}
          >
            Portfolio
          </p>
          <h1
            style={{
              fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`,
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight: 400,
              color: '#FFFFFF',
            }}
          >
            Our Gallery
          </h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section style={{ backgroundColor: BRAND.colors.footerBg, padding: '4rem 0' }}>
        <div className="mx-auto" style={{ maxWidth: BRAND.spacing.contentMaxWidth, padding: '0 1.5rem' }}>
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden group ${img.span}`}
                  style={{ borderRadius: BRAND.spacing.radiusImages }}
                >
                  <div
                    className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${img.url})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundColor: '#2a2a2a',
                      minHeight: img.minH,
                    }}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                    }}
                  >
                    <p className="text-sm text-white">{img.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <div className="mt-10 text-center">
            <p className="text-sm mb-6" style={{ color: BRAND.colors.footerText }}>
              Follow us on Instagram for more of our latest work
            </p>
            <a
              href="https://www.instagram.com/salonwestendz/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-all duration-300 hover:scale-105"
              style={{
                border: `2px solid ${BRAND.colors.accent}`,
                color: BRAND.colors.accent,
                padding: '12px 28px',
                borderRadius: BRAND.spacing.radiusButtons,
                fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}`,
                fontWeight: 600,
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              @salonwestendz
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: BRAND.colors.primary, padding: '3.5rem 0' }}>
        <div className="mx-auto text-center" style={{ maxWidth: '600px', padding: '0 1.5rem' }}>
          <h2
            style={{
              fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`,
              fontSize: '2rem',
              fontWeight: 500,
              color: '#FFFFFF',
              marginBottom: '0.5rem',
            }}
          >
            Like What You See?
          </h2>
          <p className="mb-6" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Book your next appointment and let our stylists work their magic.
          </p>
          <a
            href="tel:4162552131"
            className="inline-flex items-center transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#FFFFFF',
              color: BRAND.colors.secondary,
              padding: '14px 36px',
              borderRadius: BRAND.spacing.radiusButtons,
              fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}`,
              fontWeight: 700,
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            Call 416-255-2131
          </a>
        </div>
      </section>
    </>
  );
}
