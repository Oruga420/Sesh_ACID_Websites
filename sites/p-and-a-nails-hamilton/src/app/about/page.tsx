import Image from 'next/image';
import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

export const metadata = {
  title: 'About Us — P & A Nails Hamilton Mountain',
  description: 'Meet Janet, Paul, Sally, and the P & A Nails team. Family-run since day one, serving Hamilton Mountain with warmth and skill.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[360px] items-center overflow-hidden">
        <Image
          src={BRAND.images.atmosphere[1].url}
          alt="Inside P & A Nails salon"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-[1240px] px-5">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-brand-accent">
            Our Story
          </p>
          <h1
            className="text-4xl font-bold text-white md:text-5xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            More Than a Salon.
            <br />
            A Second Home.
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="bg-brand-bg-warm py-16">
        <div className="mx-auto max-w-[1240px] px-5">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-brand-primary">
                Est. 10+ Years
              </p>
              <h2
                className="mb-4 text-3xl font-bold text-brand-text-heading"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Your Neighbourhood Nail Salon
              </h2>
              <p className="mb-4 leading-relaxed text-brand-text-body">
                P &amp; A Nails has been a staple on Upper Sherman Avenue for over a
                decade. What started as a passion for beautiful nails has grown into
                one of Hamilton Mountain&apos;s most beloved neighbourhood salons.
              </p>
              <p className="mb-4 leading-relaxed text-brand-text-body">
                Our clients don&apos;t just come back for the nails — they come back
                because it feels like home. Some have been with us for 15 years.
                They trust us with their special occasions, their everyday pampering,
                and everything in between.
              </p>
              <p className="leading-relaxed text-brand-text-body">
                We&apos;re passionate about our craft, and it shows in every set we do.
                Whether you&apos;re here for a quick polish change or an elaborate
                custom design, we put the same care and attention into every client.
              </p>
            </div>
            <div className="space-y-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[3px]">
                <Image
                  src={BRAND.images.atmosphere[0].url}
                  alt="P & A Nails storefront"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[3px]">
                <Image
                  src={BRAND.images.atmosphere[3].url}
                  alt="P & A Nails interior"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="mx-auto max-w-[1240px] px-5">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-brand-primary">
            The Team
          </p>
          <h2
            className="mb-10 text-3xl font-bold text-brand-text-heading"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Meet the People Behind the Polish
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {BRAND.people.map((person) => (
              <div
                key={person.name}
                className="rounded-[3px] bg-brand-bg-card p-6 text-center"
                style={{ boxShadow: BRAND.shadows.card }}
              >
                {/* Initials on brand color — no profilePhotoUrl available */}
                <div
                  className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full text-3xl font-bold text-white"
                  style={{ backgroundColor: BRAND.colors.primary }}
                >
                  {person.name.charAt(0)}
                </div>
                <h3
                  className="text-xl font-bold text-brand-text-heading"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {person.name}
                </h3>
                <p className="mb-3 text-sm font-bold uppercase tracking-wider text-brand-primary">
                  {person.role}
                </p>
                <p className="text-sm leading-relaxed text-brand-text-muted">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why clients stay */}
      <section className="bg-brand-footer-bg py-16">
        <div className="mx-auto max-w-[1240px] px-5">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-brand-primary">
            Why Clients Stay
          </p>
          <h2
            className="mb-10 text-3xl font-bold text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            What Makes Us Different
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: '🤝', title: 'Warm & Welcoming', desc: 'From the moment you walk in, you feel at home. No judgement, just genuine care.' },
              { icon: '💅', title: 'Skilled Artistry', desc: '1,800+ Instagram posts of nail art. Our work speaks for itself.' },
              { icon: '💰', title: 'Honest Pricing', desc: 'Transparent pricing, no hidden fees. Quality nail care that respects your budget.' },
              { icon: '🕐', title: 'Open 7 Days', desc: 'Monday to Sunday, we are here when you need us. Walk-ins always welcome.' },
            ].map((item) => (
              <div key={item.title} className="rounded-[3px] border-l-4 border-brand-primary bg-white/5 p-5">
                <span className="mb-2 block text-2xl">{item.icon}</span>
                <h3 className="mb-2 font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Salon photos */}
      <section className="py-16">
        <div className="mx-auto max-w-[1240px] px-5">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-brand-primary">
            Our Space
          </p>
          <h2
            className="mb-8 text-3xl font-bold text-brand-text-heading"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Step Inside
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {BRAND.images.atmosphere.map((img, i) => (
              <div key={i} className="relative aspect-video overflow-hidden rounded-[3px]">
                <Image
                  src={img.url}
                  alt={img.description}
                  fill
                  className="object-cover"
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
            Come See Us
          </h2>
          <p className="mx-auto mb-6 max-w-md text-white/90">
            598 Upper Sherman Ave — right in the heart of Hamilton Mountain.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-[3px] border-2 border-white bg-white px-8 py-3 font-bold transition-colors hover:bg-transparent hover:text-white"
            style={{ color: BRAND.colors.primary }}
          >
            Get Directions &amp; Contact
          </Link>
        </div>
      </section>
    </>
  );
}
