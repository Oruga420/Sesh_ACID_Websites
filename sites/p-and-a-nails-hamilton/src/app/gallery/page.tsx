import Image from 'next/image';
import { BRAND } from '@/lib/brand-tokens';

export const metadata = {
  title: 'Gallery — P & A Nails Hamilton Mountain',
  description: 'Browse our nail art gallery. From classic manicures to intricate custom designs — see what our Hamilton Mountain team can create for you.',
};

export default function GalleryPage() {
  const allImages = BRAND.images.gallery;

  return (
    <>
      {/* Page header */}
      <section className="bg-brand-bg-warm py-14">
        <div className="mx-auto max-w-[1240px] px-5">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-brand-primary">
            Our Portfolio
          </p>
          <h1
            className="text-4xl font-bold text-brand-text-heading md:text-5xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Nail Art Gallery
          </h1>
          <p className="mt-3 max-w-xl text-brand-text-muted">
            Every set tells a story. Browse hundreds of designs created by our team
            — from elegant classics to bold, one-of-a-kind nail art.
          </p>
        </div>
      </section>

      {/* Gallery grid — asymmetric masonry-like */}
      <section className="bg-brand-footer-bg py-12">
        <div className="mx-auto max-w-[1240px] px-5">
          <div className="columns-2 gap-3 md:columns-3 lg:columns-4">
            {allImages.map((img, i) => (
              <div
                key={i}
                className="mb-3 overflow-hidden rounded-[3px] break-inside-avoid"
              >
                <Image
                  src={img.url}
                  alt={img.description}
                  width={400}
                  height={500}
                  className="w-full object-cover transition-transform duration-300 hover:scale-105"
                  unoptimized
                />
              </div>
            ))}
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
            Love What You See?
          </h2>
          <p className="mx-auto mb-6 max-w-md text-white/90">
            Bring us any design inspiration, or let our artists create something
            custom just for you.
          </p>
          <a
            href={`tel:${BRAND.businessData.phone}`}
            className="inline-block rounded-[3px] border-2 border-white bg-white px-8 py-3 font-bold transition-colors hover:bg-transparent hover:text-white"
            style={{ color: BRAND.colors.primary }}
          >
            Call to Book &mdash; {BRAND.businessData.phone}
          </a>
        </div>
      </section>
    </>
  );
}
