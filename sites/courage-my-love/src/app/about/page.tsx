import { BRAND } from "@/lib/brand-tokens";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('${BRAND.images.atmosphere[0].url}')`,
            backgroundColor: BRAND.colors.bgAlt,
          }}
        />
        <div className="relative max-w-[1200px] mx-auto px-6">
          <p
            className="text-xs uppercase tracking-[0.2em] text-brand-primary mb-3"
            style={{ fontFamily: BRAND.fonts.heading }}
          >
            Our Story
          </p>
          <h1
            className="text-4xl md:text-6xl text-brand-text-heading max-w-2xl"
            style={{ fontFamily: BRAND.fonts.heading, lineHeight: 1.05 }}
          >
            A Kensington Market Institution Since 1975
          </h1>
        </div>
      </section>

      {/* The Beginning */}
      <section className="bg-brand-bg-main py-20">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-xs uppercase tracking-[0.2em] text-brand-warm-gold mb-3"
              style={{ fontFamily: BRAND.fonts.heading }}
            >
              The Beginning
            </p>
            <h2
              className="text-3xl md:text-4xl text-brand-text-heading mb-6"
              style={{ fontFamily: BRAND.fonts.heading }}
            >
              Two Teachers, One Dream
            </h2>
            <div className="space-y-4">
              <p className="leading-relaxed">
                In 1975, Stewart Scriver was a special education teacher at
                Kensington Community School. Patricia had tenure at the
                University of Toronto. They had stable careers, a young
                daughter, and a growing obsession with antiques and vintage
                fashion.
              </p>
              <p className="leading-relaxed">
                So they did what most people only talk about: they sold
                everything they owned and opened a tiny antique shop in a
                building that dates back to 1900. Their first customer spent
                $100, and daily sales never dropped below that threshold for
                the next fifty years.
              </p>
              <p className="leading-relaxed text-brand-text-muted italic">
                &ldquo;They opened this little antique store and sold everything
                they owned to do it.&rdquo;
              </p>
            </div>
          </div>
          <div
            className="aspect-[4/3] rounded-lg bg-cover bg-center"
            style={{
              backgroundImage: `url('${BRAND.images.gallery[0].url}')`,
              backgroundColor: BRAND.colors.bgAlt,
            }}
          />
        </div>
      </section>

      {/* The Family */}
      <section className="bg-brand-bg-alt py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p
            className="text-xs uppercase tracking-[0.2em] text-brand-primary mb-3"
            style={{ fontFamily: BRAND.fonts.heading }}
          >
            The Family
          </p>
          <h2
            className="text-3xl md:text-4xl text-brand-text-heading mb-12"
            style={{ fontFamily: BRAND.fonts.heading }}
          >
            Three Generations, One Blue Shop
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-bg-card rounded-lg p-8 border border-brand-border">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{
                  backgroundColor: BRAND.colors.primary,
                  fontFamily: BRAND.fonts.heading,
                }}
              >
                <span className="text-white text-xl">SS</span>
              </div>
              <h3
                className="text-xl mb-2"
                style={{ fontFamily: BRAND.fonts.heading }}
              >
                Stewart Scriver
              </h3>
              <p className="text-sm text-brand-primary font-semibold mb-3">
                Co-Founder
              </p>
              <p className="text-sm text-brand-text-muted leading-relaxed">
                At 86, Stewart still comes into the shop to repair and customize
                vintage jewelry. A former special education teacher who
                discovered his true calling in the world of antiques and
                handcrafted treasures.
              </p>
            </div>

            <div className="bg-brand-bg-card rounded-lg p-8 border border-brand-border">
              <div
                className="w-16 h-16 rounded-full bg-cover bg-center mb-4"
                style={{
                  backgroundImage: `url('${BRAND.people[0].profilePhotoUrl}')`,
                  backgroundColor: BRAND.colors.bgAlt,
                }}
              />
              <h3
                className="text-xl mb-2"
                style={{ fontFamily: BRAND.fonts.heading }}
              >
                Cece Scriver
              </h3>
              <p className="text-sm text-brand-primary font-semibold mb-3">
                Co-Owner
              </p>
              <p className="text-sm text-brand-text-muted leading-relaxed">
                Cece was just two years old when Courage My Love opened. She
                grew up surrounded by vintage treasures and now runs the
                day-to-day operations alongside her husband Owen, a former chef
                who brings his own eye for quality.
              </p>
            </div>

            <div className="bg-brand-bg-card rounded-lg p-8 border border-brand-border">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{
                  backgroundColor: BRAND.colors.warmGold,
                  fontFamily: BRAND.fonts.heading,
                }}
              >
                <span className="text-white text-xl">PS</span>
              </div>
              <h3
                className="text-xl mb-2"
                style={{ fontFamily: BRAND.fonts.heading }}
              >
                Patricia Scriver
              </h3>
              <p className="text-sm text-brand-primary font-semibold mb-3">
                Co-Founder
              </p>
              <p className="text-sm text-brand-text-muted leading-relaxed">
                Patricia gave up tenure at the University of Toronto to pursue
                her passion for fashion and antiques. Together with Stewart, she
                built Courage My Love into the Kensington Market icon it is
                today.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-brand-text-muted italic text-lg">
              &ldquo;Not one of us has ever driven to work. The whole family
              lives in Kensington Market.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Global Sourcing */}
      <section className="bg-brand-espresso py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p
            className="text-xs uppercase tracking-[0.2em] text-brand-warm-gold mb-3"
            style={{ fontFamily: BRAND.fonts.heading }}
          >
            Globally Sourced
          </p>
          <h2
            className="text-3xl md:text-4xl text-brand-secondary mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: BRAND.fonts.heading }}
          >
            Treasures from Every Corner of the World
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            The Scriver family travels to Mexico, Indonesia, Egypt, and
            Afghanistan to hand-select beads, buttons, textiles, and
            curiosities. They source vintage from thrift stores, farm auctions,
            and connections built over fifty years.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {["Mexico", "Indonesia", "Egypt", "Afghanistan"].map((country) => (
              <div key={country}>
                <p
                  className="text-2xl text-brand-secondary"
                  style={{ fontFamily: BRAND.fonts.heading }}
                >
                  {country}
                </p>
                <p className="text-xs text-white/50 uppercase tracking-wider mt-1">
                  Sourcing Region
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
