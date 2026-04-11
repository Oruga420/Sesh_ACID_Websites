import Image from 'next/image';
import { BRAND } from '@/lib/brand-tokens';

const ALL_IMAGES = [
  ...BRAND.images.gallery.map((img) => ({ ...img, category: 'Bridal & Makeup' })),
  ...BRAND.images.atmosphere.map((img) => ({ ...img, category: 'Salon & Spa' })),
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative flex items-center justify-center" style={{ minHeight: '40vh' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${BRAND.images.gallery[3].url})` }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 text-center">
          <p
            className="mb-3 tracking-[0.3em] text-brand-secondary"
            style={{ fontFamily: 'var(--font-heading)', fontSize: '12px', textTransform: 'uppercase' }}
          >
            Our Portfolio
          </p>
          <h1
            className="text-white"
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 400 }}
          >
            Gallery
          </h1>
        </div>
      </section>

      {/* Bridal Gallery */}
      <section className="bg-brand-primary" style={{ padding: '80px 0' }}>
        <div className="mx-auto max-w-[1140px] px-6">
          <p
            className="mb-3 text-center tracking-[0.3em] text-brand-secondary"
            style={{ fontFamily: 'var(--font-heading)', fontSize: '12px', textTransform: 'uppercase' }}
          >
            Bridal & Makeup
          </p>
          <h2
            className="mb-10 text-center text-brand-text-on-dark"
            style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: 400 }}
          >
            Every Bride, A Masterpiece
          </h2>

          {/* Asymmetric masonry-style grid */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {BRAND.images.gallery.map((img, i) => {
              const isLarge = i === 0 || i === 4;
              return (
                <div
                  key={i}
                  className={`group relative overflow-hidden ${isLarge ? 'sm:col-span-2 lg:col-span-1 lg:row-span-2' : ''}`}
                  style={{ minHeight: isLarge ? '420px' : '200px' }}
                >
                  <Image
                    src={img.url}
                    alt={img.description}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/30" />
                  <div className="absolute right-0 bottom-0 left-0 translate-y-full p-4 transition-transform group-hover:translate-y-0">
                    <p className="text-sm text-white" style={{ fontFamily: 'var(--font-body)' }}>
                      {img.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Salon & Spa Gallery */}
      <section className="bg-brand-bg-alt" style={{ padding: '80px 0' }}>
        <div className="mx-auto max-w-[1140px] px-6">
          <p
            className="mb-3 text-center tracking-[0.3em] text-brand-secondary"
            style={{ fontFamily: 'var(--font-heading)', fontSize: '12px', textTransform: 'uppercase' }}
          >
            The Experience
          </p>
          <h2
            className="mb-10 text-center"
            style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: 400 }}
          >
            Salon &amp; Spa
          </h2>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {BRAND.images.atmosphere.map((img, i) => (
              <div
                key={i}
                className="group relative overflow-hidden"
                style={{ minHeight: '260px' }}
              >
                <Image
                  src={img.url}
                  alt={img.description}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/60 p-4">
                  <p className="text-sm text-white">{img.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative"
        style={{ padding: '60px 0' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${BRAND.images.backgrounds.booking})` }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 mx-auto max-w-[700px] px-6 text-center">
          <h2
            className="text-white"
            style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 400 }}
          >
            Love What You See?
          </h2>
          <p className="mt-3 text-white/70">
            Book your appointment and let us create something beautiful for you.
          </p>
          <a
            href={`tel:${BRAND.business.locations[0].phone}`}
            className="mt-6 inline-block bg-brand-secondary px-8 py-3.5 text-white transition-opacity hover:opacity-90"
            style={{ fontFamily: 'var(--font-heading)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}
          >
            Book Now
          </a>
        </div>
      </section>
    </>
  );
}
