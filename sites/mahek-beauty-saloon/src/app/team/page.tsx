import Image from 'next/image';
import { BRAND } from '@/lib/brand-tokens';

function TeamMemberCard({
  person,
}: {
  person: (typeof BRAND.people)[number];
}) {
  const initials = person.name.charAt(0).toUpperCase();

  return (
    <div className="bg-brand-bg-card shadow-[0_2px_15px_rgba(0,0,0,0.08)]">
      {/* Profile Photo / Initials */}
      <div className="flex items-center justify-center bg-brand-bg-alt" style={{ height: '280px' }}>
        {person.profilePhotoUrl ? (
          <Image
            src={person.profilePhotoUrl}
            alt={person.name}
            fill
            className="object-cover"
            unoptimized
          />
        ) : (
          <div
            className="flex items-center justify-center"
            style={{
              width: '120px',
              height: '120px',
              backgroundColor: BRAND.colors.secondary,
              color: '#fff',
              fontFamily: 'var(--font-heading)',
              fontSize: '48px',
              fontWeight: 400,
            }}
          >
            {initials}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-6">
        <h3
          style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700, letterSpacing: '0.05em' }}
        >
          {person.name}
        </h3>
        <p
          className="mt-1 text-brand-secondary"
          style={{ fontFamily: 'var(--font-heading)', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase' }}
        >
          {person.role}
        </p>
        {person.bio && (
          <p className="mt-3 text-sm leading-relaxed text-brand-text-body">{person.bio}</p>
        )}
      </div>

      {/* Portfolio Photos */}
      {person.portfolioPhotos.length > 0 && (
        <div className="border-t border-brand-text-muted/10 p-6">
          <p
            className="mb-3 tracking-[0.2em] text-brand-text-muted"
            style={{ fontFamily: 'var(--font-heading)', fontSize: '10px', textTransform: 'uppercase' }}
          >
            Recent Work
          </p>
          <div className="grid grid-cols-2 gap-2">
            {person.portfolioPhotos.map((url, i) => (
              <div key={i} className="relative" style={{ height: '100px' }}>
                <Image src={url} alt={`${person.name}'s work`} fill className="object-cover" unoptimized />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function TeamPage() {
  const featured = BRAND.people.filter((p) => p.featured);
  const other = BRAND.people.filter((p) => !p.featured);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative flex items-center justify-center" style={{ minHeight: '40vh' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${BRAND.images.gallery[2].url})` }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 text-center">
          <p
            className="mb-3 tracking-[0.3em] text-brand-secondary"
            style={{ fontFamily: 'var(--font-heading)', fontSize: '12px', textTransform: 'uppercase' }}
          >
            The People Behind the Beauty
          </p>
          <h1
            className="text-white"
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 400 }}
          >
            Meet Our Team
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-brand-bg-alt" style={{ padding: '60px 0' }}>
        <div className="mx-auto max-w-[800px] px-6 text-center">
          <p className="text-lg text-brand-text-body">
            For 19 years, our team of expert stylists has been the heart of Mahek Beauty Saloon.
            From Mona, our founder and licensed hair stylist, to every member of our crew, we bring passion,
            skill, and genuine care to every appointment. Many of our clients have been coming back for
            over a decade — and that loyalty speaks louder than any award.
          </p>
        </div>
      </section>

      {/* Featured Team */}
      <section className="bg-brand-bg-main" style={{ padding: '80px 0' }}>
        <div className="mx-auto max-w-[1140px] px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((person) => (
              <TeamMemberCard key={person.name} person={person} />
            ))}
          </div>

          {other.length > 0 && (
            <div className="mt-16">
              <h2
                className="mb-8 text-center"
                style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 400 }}
              >
                Our Extended Team
              </h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {other.map((person) => (
                  <TeamMemberCard key={person.name} person={person} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials about team */}
      <section className="bg-brand-bg-dark" style={{ padding: '60px 0' }}>
        <div className="mx-auto max-w-[900px] px-6">
          <h2
            className="mb-10 text-center text-brand-text-on-dark"
            style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 400 }}
          >
            What Clients Say About Our Team
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                quote: 'Mona and her stylist Jenny were extremely professional. Top-notch customer experience.',
                name: 'Verified Client',
              },
              {
                quote: 'Amit took time to understand what I wanted and did a fantastic job. Got compliments all week.',
                name: 'Hiral Vaghela',
              },
              {
                quote: 'The talented Nikki kept me comfortable during a 4-hour process. Will definitely return.',
                name: 'Verified Client',
              },
              {
                quote: 'Zora is so patient and meticulous. Every strand was perfect.',
                name: 'Verified Client',
              },
            ].map((t, i) => (
              <div key={i} className="border-l-2 border-brand-secondary p-6">
                <p className="text-sm italic leading-relaxed text-white/80">&ldquo;{t.quote}&rdquo;</p>
                <p
                  className="mt-3 tracking-[0.15em] text-brand-text-muted"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: '11px', textTransform: 'uppercase' }}
                >
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
