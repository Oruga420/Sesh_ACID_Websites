{/*
  DESIGN PERSONALITY ANSWERS — P & A Nails Hamilton Mountain
  1. Dominant emotion: WARMTH — family-run, welcoming, feels like coming home
  2. Work vs trust: WORK IS THE PRODUCT — 1800+ IG posts of nail art
  3. Established: 10+ YEARS — heritage weight, community roots
  4. Customer feelings: Safe, welcomed, no judgement, genuine care, like family
  5. What would NEVER fit: Dark moody design, luxury language, sharp angular minimalism, corporate CTAs

  LAYOUT PERSONALITY: B) GALLERY-FORWARD + D) NEIGHBORHOOD hybrid
  — Gallery is prominent (nail art IS the product)
  — Neighbourhood identity: hours, address, local language
  — Warm backgrounds, tactile feel, booking CTA above fold

  THE ONE THING: Asymmetric gallery teaser immediately after hero with warm linen background,
  showing real nail art from their 1800+ post Instagram archive — feels local, warm, and craft-first.
*/}

import Link from 'next/link';
import Image from 'next/image';
import { BRAND } from '@/lib/brand-tokens';

export default function HomePage() {
  const galleryTeaser = BRAND.images.gallery.slice(0, 5);

  return (
    <>
      {/* HERO — storefront image with warm overlay */}
      <section className="relative flex min-h-[520px] items-center justify-center overflow-hidden">
        <Image
          src={BRAND.images.hero}
          alt="P & A Nails storefront on Upper Sherman Ave"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 mx-auto max-w-[1240px] px-5 text-center text-white">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-brand-accent">
            Hamilton Mountain&apos;s Neighbourhood Nail Salon
          </p>
          <h1
            className="mb-4 text-4xl font-bold leading-tight md:text-5xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Where Every Visit Feels
            <br />
            Like Coming Home
          </h1>
          <p className="mx-auto mb-6 max-w-lg text-lg text-white/85">
            10+ years of making Hamilton beautiful — one set of nails at a time.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-block rounded-[3px] px-7 py-3 text-base font-bold text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: BRAND.colors.primary }}
            >
              Book Your Appointment
            </Link>
            <Link
              href="/services"
              className="inline-block rounded-[3px] border-2 border-white/40 px-7 py-3 text-base font-bold text-white transition-colors hover:border-white"
            >
              View Our Services
            </Link>
          </div>
          {/* Hours quick info */}
          <p className="mt-6 text-sm text-white/70">
            Open Mon-Sat 8:30 AM &ndash; 9:00 PM &bull; Sun 9:00 AM &ndash; 8:00 PM
          </p>
        </div>
      </section>

      {/* GALLERY TEASER — asymmetric grid on warm linen */}
      <section className="bg-brand-bg-warm py-16">
        <div className="mx-auto max-w-[1240px] px-5">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-brand-primary">
            Our Work
          </p>
          <div className="mb-8 flex items-end justify-between">
            <h2
              className="text-3xl font-bold text-brand-text-heading md:text-4xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Nail Art Gallery
            </h2>
            <Link
              href="/gallery"
              className="text-sm font-bold text-brand-primary hover:underline"
            >
              View All &rarr;
            </Link>
          </div>
          {/* Asymmetric grid: 1 large + 4 small */}
          <div className="grid gap-3 md:grid-cols-3 md:grid-rows-2">
            <div className="relative aspect-square overflow-hidden rounded-[3px] md:col-span-2 md:row-span-2">
              <Image
                src={galleryTeaser[0].url}
                alt={galleryTeaser[0].description}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                unoptimized
              />
            </div>
            {galleryTeaser.slice(1).map((img, i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden rounded-[3px]"
              >
                <Image
                  src={img.url}
                  alt={img.description}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="bg-brand-bg-main py-16">
        <div className="mx-auto max-w-[1240px] px-5">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-brand-primary">
            What We Do
          </p>
          <div className="mb-8 flex items-end justify-between">
            <h2
              className="text-3xl font-bold text-brand-text-heading"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Services
            </h2>
            <Link
              href="/services"
              className="text-sm font-bold text-brand-primary hover:underline"
            >
              Full Menu &rarr;
            </Link>
          </div>
          {/* Editorial list layout */}
          <div className="divide-y divide-brand-secondary">
            {[
              { name: 'Manicure', desc: 'Classic to deluxe — perfectly shaped and polished nails', from: '$18' },
              { name: 'Pedicure', desc: 'Relax and refresh with our spa-quality foot care', from: '$28' },
              { name: 'Gel & Shellac', desc: 'Long-lasting shine that stays chip-free for weeks', from: '$35' },
              { name: 'Nail Art', desc: 'Custom designs from simple accents to intricate works of art', from: '$5+' },
            ].map((svc) => (
              <div key={svc.name} className="flex items-center justify-between py-5">
                <div>
                  <h3
                    className="text-lg font-bold text-brand-text-heading"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {svc.name}
                  </h3>
                  <p className="text-sm text-brand-text-muted">{svc.desc}</p>
                </div>
                <span className="text-lg font-bold text-brand-primary">
                  from {svc.from}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS TEASER — contrast inversion */}
      <section className="bg-brand-footer-bg py-16">
        <div className="mx-auto max-w-[1240px] px-5">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-brand-primary">
            What Our Clients Say
          </p>
          <h2
            className="mb-8 text-3xl font-bold text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            15+ Years of Loyalty
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "I've been going to P&A Nails for 15 years. The staff are amazing — warm, welcoming, and always make me feel at home.",
                name: 'Long-time Client',
              },
              {
                quote:
                  "Janet and her team are incredibly accommodating. They always take the time to get every detail right. My nails have never looked better.",
                name: 'Regular Customer',
              },
              {
                quote:
                  "The atmosphere is so warm and friendly. Even when they're busy, they make you feel like the only person in the room.",
                name: 'Hamilton Mountain Local',
              },
            ].map((t, i) => (
              <div
                key={i}
                className="rounded-[3px] border-l-4 border-brand-primary bg-white/5 p-6"
              >
                <p className="mb-4 text-sm leading-relaxed text-gray-300 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-xs font-bold text-brand-accent">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — full-width coral */}
      <section
        className="py-16 text-center text-white"
        style={{ backgroundColor: BRAND.colors.primary }}
      >
        <div className="mx-auto max-w-[1240px] px-5">
          <h2
            className="mb-4 text-3xl font-bold md:text-4xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Ready for Beautiful Nails?
          </h2>
          <p className="mx-auto mb-6 max-w-md text-lg text-white/90">
            Walk-ins welcome, or call ahead to book your appointment. We&apos;re
            here 7 days a week.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-[3px] border-2 border-white bg-white px-8 py-3 text-base font-bold transition-colors hover:bg-transparent hover:text-white"
            style={{ color: BRAND.colors.primary }}
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
