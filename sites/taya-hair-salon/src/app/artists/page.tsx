import { BRAND } from '@/lib/brand-tokens';
import { BlurFade } from '@/components/ui/blur-fade';
import { BorderBeam } from '@/components/ui/border-beam';

const sheppardStylists = BRAND.people.filter(p =>
  ['Lia', 'Anna', 'Jin', 'Ellie', 'Matthew'].includes(p.name)
);

const parkHomeStylists = [
  { name: 'Yuki', role: 'Master Stylist', bio: 'Master-level expertise in Korean hair techniques.' },
  { name: 'Tony', role: 'Master Stylist', bio: 'Precision and artistry in every service.' },
  { name: 'Richard', role: 'Master Stylist', bio: 'Years of experience in colour and perms.' },
  { name: 'Michelle', role: 'Stylist', bio: null },
  { name: 'Debbie', role: 'Stylist', bio: null },
  { name: 'Hera', role: 'Stylist', bio: null },
  { name: 'Maryann', role: 'Master Stylist', bio: null },
  { name: 'Jenny', role: 'Stylist', bio: null },
];

function StylistCard({ stylist, featured }: { stylist: { name: string; role: string; bio?: string | null }; featured?: boolean }) {
  const initials = stylist.name.charAt(0).toUpperCase();

  return (
    <div
      className="relative p-6 flex flex-col items-center text-center group"
      style={{
        backgroundColor: BRAND.colors.bgCard,
        borderRadius: BRAND.spacing.radiusCards,
        boxShadow: '0 4px 20px rgba(42,33,24,0.08)',
      }}
    >
      {featured && <BorderBeam size={200} duration={8} borderWidth={2} colorFrom={BRAND.colors.primary} colorTo={BRAND.colors.accent} />}

      {/* Initials Avatar */}
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mb-4 text-2xl font-medium"
        style={{
          backgroundColor: BRAND.colors.primary,
          color: BRAND.colors.bgDark,
          fontFamily: BRAND.fonts.heading,
        }}
      >
        {initials}
      </div>

      <h3
        className="text-xl mb-1"
        style={{ fontFamily: BRAND.fonts.heading, fontWeight: 600, color: BRAND.colors.textHeading }}
      >
        {stylist.name}
      </h3>
      <p
        className="text-[11px] tracking-[0.2em] uppercase mb-3"
        style={{ color: BRAND.colors.primary, fontWeight: 500 }}
      >
        {stylist.role}
      </p>
      {stylist.bio && (
        <p className="text-sm leading-relaxed" style={{ color: BRAND.colors.textMuted }}>
          {stylist.bio}
        </p>
      )}
    </div>
  );
}

export default function ArtistsPage() {
  return (
    <>
      {/* Hero — Different layout: centered dramatic type on dark bg */}
      <section
        className="py-32 text-center relative overflow-hidden"
        style={{ backgroundColor: BRAND.colors.bgDark }}
      >
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url(${BRAND.images.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
        <div className="relative z-10 max-w-[800px] mx-auto px-6">
          <BlurFade delay={0.1}>
            <p
              className="text-[11px] tracking-[0.3em] uppercase mb-4"
              style={{ color: BRAND.colors.primary }}
            >
              Our Team / 스타일리스트
            </p>
          </BlurFade>
          <BlurFade delay={0.2}>
            <h1
              className="text-5xl md:text-[6rem] leading-[0.9] mb-6"
              style={{
                fontFamily: BRAND.fonts.heading,
                fontWeight: 400,
                color: BRAND.colors.textLight,
                textShadow: '0 2px 12px rgba(0,0,0,0.6)',
              }}
            >
              Meet the <span style={{ color: BRAND.colors.primary }}>Artists</span>
            </h1>
          </BlurFade>
          <BlurFade delay={0.3}>
            <p className="text-base max-w-[500px] mx-auto" style={{ color: BRAND.colors.accentSoft, fontWeight: 300 }}>
              Senior and master stylists dedicated to creating personalized looks
              that enhance your unique beauty. Every stylist brings years of K-beauty expertise.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Sheppard Location Stylists */}
      <section className="py-20" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <BlurFade delay={0.1}>
            <p
              className="text-[11px] tracking-[0.3em] uppercase mb-3"
              style={{ color: BRAND.colors.primary, fontWeight: 500 }}
            >
              Sheppard Location
            </p>
            <h2
              className="text-3xl md:text-4xl mb-10"
              style={{ fontFamily: BRAND.fonts.heading, fontWeight: 500, color: BRAND.colors.textHeading }}
            >
              21 Spring Garden Ave
            </h2>
          </BlurFade>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sheppardStylists.map((s, i) => (
              <BlurFade key={s.name} delay={0.15 + i * 0.08}>
                <StylistCard stylist={s} featured={s.featured} />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed divider with atmosphere image */}
      <section
        className="h-[30vh] relative"
        style={{
          backgroundImage: `url(${BRAND.images.atmosphere[0].url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0" style={{ background: `linear-gradient(0deg, ${BRAND.colors.bgAlt} 0%, transparent 30%, transparent 70%, ${BRAND.colors.bgMain} 100%)` }} />
      </section>

      {/* Park Home Location Stylists */}
      <section className="py-20" style={{ backgroundColor: BRAND.colors.bgAlt }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <BlurFade delay={0.1}>
            <p
              className="text-[11px] tracking-[0.3em] uppercase mb-3"
              style={{ color: BRAND.colors.primary, fontWeight: 500 }}
            >
              Park Home Location
            </p>
            <h2
              className="text-3xl md:text-4xl mb-10"
              style={{ fontFamily: BRAND.fonts.heading, fontWeight: 500, color: BRAND.colors.textHeading }}
            >
              6 Park Home Ave
            </h2>
          </BlurFade>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {parkHomeStylists.map((s, i) => (
              <BlurFade key={s.name} delay={0.15 + i * 0.06}>
                <StylistCard stylist={s} />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12" style={{ background: `linear-gradient(135deg, ${BRAND.colors.primary}, ${BRAND.colors.accent})` }}>
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <BlurFade delay={0.1}>
            <h2
              className="text-3xl md:text-4xl mb-4"
              style={{ fontFamily: BRAND.fonts.heading, fontWeight: 400, color: BRAND.colors.bgDark }}
            >
              Ready to meet your stylist?
            </h2>
            <a
              href={BRAND.business.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 text-sm tracking-[0.1em] uppercase font-bold transition-all hover:scale-105"
              style={{
                backgroundColor: BRAND.colors.bgDark,
                color: BRAND.colors.primary,
                borderRadius: BRAND.spacing.radiusButtons,
              }}
            >
              Book Your Appointment
            </a>
          </BlurFade>
        </div>
      </section>
    </>
  );
}
