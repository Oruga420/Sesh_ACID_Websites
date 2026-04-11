import { BRAND } from '@/lib/brand-tokens';
import ScrollReveal from '@/components/ScrollReveal';

const stylists = BRAND.people;

const testimonials: Record<string, { text: string; author: string }[]> = {
  'Lucy Zollerano': [
    { text: 'Highlights, colour and cut is exactly what I want, and she gets it right all the time!!', author: 'Biagina C.' },
  ],
  'Mary Taffuri': [
    { text: 'Mary is my stylist and she is AMAZING! She always cuts exactly how I want it.', author: 'Filomena P.' },
    { text: 'Mary did an awesome job on cutting my hair — going to support local business in the area.', author: 'Silvana C.' },
  ],
  'Darlene': [
    { text: 'Darlene is the heart and soul in that place... She definitely knows how to cut hair well. My hair has never felt or looked as good.', author: 'Stella H.' },
    { text: 'I must take a moment to shout out to Darlene — she\'s a wonderful hair stylist, kind, caring, and truly amazing at her job.', author: 'Colette G.' },
  ],
};

export default function TeamPage() {
  return (
    <>
      {/* Page Header */}
      <section
        className="relative flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${BRAND.images.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '40vh',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.7)' }} />
        <div className="relative z-10 py-20 px-6">
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
            Our Stylists
          </p>
          <h1
            style={{
              fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`,
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight: 400,
              color: '#FFFFFF',
              lineHeight: 1.1,
            }}
          >
            Meet the Team Behind<br />
            <span style={{ color: BRAND.colors.accent }}>Every Great Style</span>
          </h1>
        </div>
      </section>

      {/* Team Members */}
      <section style={{ backgroundColor: BRAND.colors.bgMain, padding: '5rem 0' }}>
        <div className="mx-auto" style={{ maxWidth: BRAND.spacing.contentMaxWidth, padding: '0 1.5rem' }}>
          <div className="flex flex-col gap-20">
            {stylists.map((person, index) => {
              const isReversed = index % 2 === 1;
              const initials = person.name
                .split(' ')
                .map((n) => n[0])
                .join('');

              return (
                <ScrollReveal key={person.name} delay={index * 100}>
                  <div
                    className={`grid grid-cols-1 md:grid-cols-5 gap-10 items-start ${
                      isReversed ? 'md:direction-rtl' : ''
                    }`}
                  >
                    {/* Photo / Initials */}
                    <div className={`md:col-span-2 ${isReversed ? 'md:order-2' : ''}`}>
                      <div
                        className="w-full aspect-square flex items-center justify-center"
                        style={{
                          backgroundColor: BRAND.colors.bgAlt,
                          borderRadius: BRAND.spacing.radiusCards,
                          border: `2px solid ${BRAND.colors.accent}`,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`,
                            fontSize: '5rem',
                            fontWeight: 400,
                            color: BRAND.colors.accent,
                            opacity: 0.6,
                          }}
                        >
                          {initials}
                        </span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className={`md:col-span-3 ${isReversed ? 'md:order-1' : ''}`}>
                      <p
                        className="mb-1"
                        style={{
                          fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}`,
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.2em',
                          color: BRAND.colors.primary,
                        }}
                      >
                        {person.role}
                      </p>
                      <h2
                        className="mb-4"
                        style={{
                          fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`,
                          fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                          fontWeight: 500,
                          color: BRAND.colors.textHeading,
                          lineHeight: 1.2,
                        }}
                      >
                        {person.name}
                      </h2>

                      <p
                        className="mb-6"
                        style={{
                          fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}`,
                          fontSize: '1rem',
                          lineHeight: 1.7,
                          color: BRAND.colors.textBody,
                          maxWidth: '540px',
                        }}
                      >
                        {person.bio}
                      </p>

                      {/* Testimonials for this stylist */}
                      {testimonials[person.name] && (
                        <div className="flex flex-col gap-4 mt-4">
                          {testimonials[person.name].map((review, ri) => (
                            <div
                              key={ri}
                              className="border-l-2 pl-4"
                              style={{ borderColor: BRAND.colors.accent }}
                            >
                              <p
                                className="text-sm italic"
                                style={{ color: BRAND.colors.textBody, lineHeight: 1.6 }}
                              >
                                &ldquo;{review.text}&rdquo;
                              </p>
                              <p
                                className="mt-1 text-xs"
                                style={{ color: BRAND.colors.textMuted }}
                              >
                                &mdash; {review.author}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
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
              marginBottom: '1rem',
            }}
          >
            Book With Your Favourite Stylist
          </h2>
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
