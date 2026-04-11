import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

export default function GalleryPage() {
  const galleryImages = BRAND.images.gallery;

  return (
    <>
      {/* Page Header */}
      <section
        style={{
          backgroundColor: BRAND.colors.bgDark,
          padding: 'clamp(48px, 6vw, 80px) 0 clamp(40px, 4vw, 60px)',
        }}
      >
        <div className="max-w-content mx-auto px-6">
          <p className="section-label mb-3" style={{ color: BRAND.colors.accent }}>
            Our Work
          </p>
          <h1
            className="font-heading"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 600,
              color: BRAND.colors.textLight,
              lineHeight: 1.1,
            }}
          >
            Nail Art Gallery
          </h1>
          <p className="mt-4 max-w-2xl text-lg" style={{ color: BRAND.colors.textMuted }}>
            Every set is a canvas. Browse our latest creations — from classic French tips
            to bold custom designs and everything in between.
          </p>
        </div>
      </section>

      {/* Gallery Grid — Dark Background */}
      <section
        style={{
          backgroundColor: BRAND.colors.bgDark,
          padding: `0 0 ${BRAND.spacing.sectionPadding}`,
        }}
      >
        <div className="max-w-content mx-auto px-6">
          {/* Asymmetric Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {/* Large featured image */}
            <div
              className="col-span-2 row-span-2 img-hover-zoom overflow-hidden"
              style={{ borderRadius: BRAND.spacing.radiusImages }}
            >
              <div
                className="aspect-square md:aspect-auto md:h-full bg-cover bg-center min-h-[300px] md:min-h-[500px]"
                style={{ backgroundImage: `url(${galleryImages[0].url})` }}
              />
            </div>

            {/* Smaller images */}
            {galleryImages.slice(1).map((img, i) => (
              <div
                key={i}
                className="img-hover-zoom overflow-hidden"
                style={{ borderRadius: BRAND.spacing.radiusImages }}
              >
                <div
                  className="aspect-square bg-cover bg-center"
                  style={{ backgroundImage: `url(${img.url})` }}
                />
              </div>
            ))}

            {/* Repeat images for a fuller grid */}
            {galleryImages.map((img, i) => (
              <div
                key={`repeat-${i}`}
                className="img-hover-zoom overflow-hidden"
                style={{ borderRadius: BRAND.spacing.radiusImages }}
              >
                <div
                  className="aspect-square bg-cover bg-center"
                  style={{ backgroundImage: `url(${img.url})` }}
                />
              </div>
            ))}
          </div>

          {/* Follow on Instagram CTA */}
          <div
            className="mt-12 text-center p-8"
            style={{
              backgroundColor: 'rgba(212,160,185,0.1)',
              borderRadius: BRAND.spacing.radiusCards,
              border: `1px solid rgba(212,160,185,0.2)`,
            }}
          >
            <p
              className="font-heading text-xl mb-2"
              style={{ color: BRAND.colors.textLight, fontWeight: 500 }}
            >
              See more on Instagram
            </p>
            <p className="text-sm mb-6" style={{ color: BRAND.colors.textMuted }}>
              Follow us for daily nail art inspiration and head spa vibes.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={BRAND.business.instagram[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
                style={{
                  backgroundColor: BRAND.colors.primary,
                  color: '#FFFFFF',
                  borderRadius: BRAND.spacing.radiusButtons,
                  padding: '12px 24px',
                  fontWeight: 600,
                  fontSize: '14px',
                  textDecoration: 'none',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                @divanailltd
              </a>
              <a
                href={BRAND.business.instagram[1]}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
                style={{
                  border: `2px solid ${BRAND.colors.primary}`,
                  color: BRAND.colors.primary,
                  borderRadius: BRAND.spacing.radiusButtons,
                  padding: '10px 22px',
                  fontWeight: 600,
                  fontSize: '14px',
                  textDecoration: 'none',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                @divanails_headspa
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section
        className="text-center"
        style={{
          backgroundColor: BRAND.colors.primary,
          padding: 'clamp(48px, 6vw, 72px) 0',
        }}
      >
        <div className="max-w-content mx-auto px-6">
          <h2
            className="font-heading mb-4"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 500, color: '#FFFFFF' }}
          >
            Love What You See?
          </h2>
          <p className="text-white/80 mb-6 max-w-md mx-auto">
            Book your appointment and let our artists create something beautiful for you.
          </p>
          <a
            href={BRAND.business.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-all duration-200 hover:opacity-90"
            style={{
              backgroundColor: '#FFFFFF',
              color: BRAND.colors.primary,
              borderRadius: BRAND.spacing.radiusButtons,
              padding: '14px 36px',
              fontWeight: 700,
              fontSize: '15px',
              textDecoration: 'none',
            }}
          >
            Book Now
          </a>
        </div>
      </section>
    </>
  );
}
