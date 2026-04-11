import { BRAND } from "@/lib/brand-tokens";
import { BlurFade } from "@/components/ui/blur-fade";
import BrandImage from "@/components/BrandImage";

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-end min-h-[40vh] px-6 pb-12"
        style={{
          background: `linear-gradient(135deg, ${BRAND.colors.bgDark} 0%, ${BRAND.colors.secondary} 100%)`,
          paddingTop: "140px",
        }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <BlurFade delay={0.1}>
            <p
              className="text-[11px] tracking-[0.3em] uppercase mb-3"
              style={{ color: BRAND.colors.primary, fontWeight: 600 }}
            >
              The People Behind the Art
            </p>
            <h1
              className="font-heading text-5xl md:text-[5.5rem] leading-[0.92]"
              style={{
                color: BRAND.colors.textLight,
                fontWeight: 400,
                textShadow: "0 2px 12px rgba(0,0,0,0.3)",
              }}
            >
              Our Team
            </h1>
          </BlurFade>
        </div>
      </section>

      {/* About the Team */}
      <section className="py-20 md:py-28 px-6" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <div className="max-w-5xl mx-auto">
          {/* Split layout — text left, visual right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <BlurFade delay={0.1}>
              <div>
                <p
                  className="text-[11px] tracking-[0.3em] uppercase mb-4"
                  style={{ color: BRAND.colors.primary, fontWeight: 600 }}
                >
                  Our Story
                </p>
                <h2
                  className="font-heading text-3xl md:text-4xl mb-6"
                  style={{ color: BRAND.colors.textHeading, fontWeight: 500 }}
                >
                  Dedicated to Your Beauty
                </h2>
                <p
                  className="text-base leading-relaxed mb-4"
                  style={{ color: BRAND.colors.textBody }}
                >
                  At Nail Decor Beaute & Spa, our team of skilled technicians
                  brings years of experience and a genuine passion for nail
                  artistry. We believe every client deserves personalized
                  attention and a relaxing experience.
                </p>
                <p
                  className="text-base leading-relaxed mb-4"
                  style={{ color: BRAND.colors.textBody }}
                >
                  Our technicians stay current with the latest trends in nail
                  art, gel techniques, and lash extensions through ongoing
                  training and education. Whether you want a classic French
                  manicure or bold statement nails, we have the skills to
                  bring your vision to life.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: BRAND.colors.textBody }}
                >
                  Located in the heart of Morningside in Scarborough, we pride
                  ourselves on creating a warm, clean, and welcoming space where
                  you can truly relax and enjoy the pampering you deserve.
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.2}>
              <div
                className="relative overflow-hidden"
                style={{
                  borderRadius: BRAND.spacing.radiusCards,
                  aspectRatio: "4/5",
                  background: `linear-gradient(135deg, ${BRAND.colors.primary}, ${BRAND.colors.accent})`,
                }}
              >
                <BrandImage
                  src={BRAND.images.hero}
                  alt="Nail Decor Beaute & Spa team at work"
                  className="w-full h-full object-cover"
                />
              </div>
            </BlurFade>
          </div>

          {/* What Sets Us Apart */}
          <BlurFade delay={0.2}>
            <div className="text-center mb-14">
              <p
                className="text-[11px] tracking-[0.3em] uppercase mb-3"
                style={{ color: BRAND.colors.primary, fontWeight: 600 }}
              >
                Why Choose Us
              </p>
              <h2
                className="font-heading text-3xl md:text-4xl"
                style={{ color: BRAND.colors.textHeading, fontWeight: 500 }}
              >
                What Sets Us Apart
              </h2>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Meticulous Technique",
                desc: "Every nail set is crafted with attention to detail — from shaping to polish application, we take our time to ensure perfection.",
                icon: "✨",
              },
              {
                title: "Clean & Bright Space",
                desc: "Hygiene is our top priority. Our salon is bright, well-ventilated, and sanitized between every client.",
                icon: "🌿",
              },
              {
                title: "Friendly Service",
                desc: "Our clients come back because they feel welcome. We listen to what you want and make thoughtful recommendations.",
                icon: "💛",
              },
              {
                title: "Wide Range of Services",
                desc: "From nails and lashes to waxing — we are your one-stop beauty destination in Scarborough.",
                icon: "💅",
              },
            ].map((item, i) => (
              <BlurFade key={item.title} delay={0.15 + i * 0.08}>
                <div
                  className="p-8 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: BRAND.colors.bgCard,
                    borderRadius: BRAND.spacing.radiusCards,
                    boxShadow: "0 2px 12px rgba(212,160,160,0.15)",
                  }}
                >
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <h3
                    className="font-heading text-xl mb-3"
                    style={{ color: BRAND.colors.textHeading, fontWeight: 600 }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: BRAND.colors.textBody }}
                  >
                    {item.desc}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-6 text-center"
        style={{
          background: `linear-gradient(135deg, ${BRAND.colors.primary}, ${BRAND.colors.secondary})`,
        }}
      >
        <BlurFade delay={0.1}>
          <h2
            className="font-heading text-3xl md:text-5xl mb-6"
            style={{
              color: BRAND.colors.textLight,
              fontWeight: 500,
              textShadow: "0 1px 8px rgba(0,0,0,0.2)",
            }}
          >
            Let Us Pamper You
          </h2>
          <a
            href={BRAND.business.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 text-sm tracking-[0.1em] uppercase transition-all duration-200 hover:opacity-90"
            style={{
              backgroundColor: BRAND.colors.textLight,
              color: BRAND.colors.primary,
              borderRadius: BRAND.spacing.radiusButtons,
              fontWeight: 700,
            }}
          >
            Book Your Appointment
          </a>
        </BlurFade>
      </section>
    </>
  );
}
