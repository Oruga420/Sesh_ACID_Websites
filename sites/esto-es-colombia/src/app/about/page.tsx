import WatermarkBanner from "@/components/WatermarkBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <WatermarkBanner />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-[40vh] min-h-[280px] flex items-center justify-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://blogto-production2-baselayer-display.blogto.com/uploads/2022/12/23/1671827095-20221216-EstoEsColumbia-20.jpg"
            alt="Inside Esto es Colombia restaurant"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-white">
              Nuestra Historia
            </h1>
            <p className="text-gray-200 mt-3 text-lg">Our Story</p>
          </div>
        </section>

        {/* Story */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-brand-heading mb-6">
              From Cali to Toronto
            </h2>
            <div className="space-y-5 text-brand-body leading-relaxed">
              <p>
                Diana Patricia Arizala is one of the most celebrated Colombian
                chefs in Toronto. Hailing from Cali, Colombia, she arrived in
                Canada accompanied by her four children and a powerful internal
                desire to &ldquo;conquer Canada&rdquo; with the flavours of her
                homeland.
              </p>
              <p>
                After spending nine years in Winnipeg, where she honed her craft
                and built a reputation for authentic Colombian cooking, Diana
                moved to Toronto. In 2016, she opened Esto es Colombia on a busy
                strip of Dufferin Street in North York &mdash; nestled between
                banks, bakeries, and auto body shops.
              </p>
              <p>
                &ldquo;I studied as a chef and my whole life has revolved around
                cooking and this is my passion,&rdquo; says Diana. Every dish on
                the menu carries the authentic flavours of Colombia &mdash; from
                the iconic nine-component Bandeja Paisa to the rich,
                seafood-laden Cazuela de Mariscos, a beloved Caribbean
                casserole.
              </p>
              <p>
                The restaurant quickly became a cultural hub. It literally
                translates to &ldquo;This is Colombia,&rdquo; and the
                experience lives up to the name. Breathtaking scenes of the
                country adorn the walls, Colombian music fills the air, and
                guests consistently say they feel like they have been transported
                to Medellin, Cartagena, or Bogota.
              </p>
              <p>
                Diana&apos;s cooking doesn&apos;t just attract the Colombian
                diaspora. International students, curious foodies, and Latin
                culture lovers from across the GTA make the trip to North York
                for her generous portions and unmistakable authenticity. The
                second floor hosts live music events, private parties, and
                celebrations that keep the vibrant spirit of Colombia alive in
                Toronto.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="bg-brand-bg-alt py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-brand-heading mb-10 text-center">
              Inside Esto es Colombia
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  src: "https://blogto-production2-baselayer-display.blogto.com/uploads/2022/12/23/1671826923-20221216-EstoEsColumbia-1.jpg",
                  alt: "Restaurant atmosphere and food",
                },
                {
                  src: "https://blogto-production2-baselayer-display.blogto.com/uploads/2022/12/23/1671827577-20221216-EstoEsColumbia-10.jpg",
                  alt: "Bandeja Paisa platter",
                },
                {
                  src: "https://blogto-production2-baselayer-display.blogto.com/uploads/2022/12/23/1671829838-20221216-EstoEsColumbia-11.jpg",
                  alt: "Cazuela de Mariscos",
                },
                {
                  src: "https://blogto-production2-baselayer-display.blogto.com/uploads/2022/12/23/1671827113-20221216-EstoEsColumbia-19.jpg",
                  alt: "Colombian dining experience",
                },
                {
                  src: "https://blogto-production2-baselayer-display.blogto.com/uploads/2022/12/23/1671827129-20221216-EstoEsColumbia-14.jpg",
                  alt: "Restaurant interior",
                },
                {
                  src: "https://blogto-production2-baselayer-display.blogto.com/uploads/2022/12/23/1671827150-20221216-EstoEsColumbia-15.jpg",
                  alt: "Bar area",
                },
              ].map((photo) => (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  key={photo.src}
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover rounded-lg hover:scale-[1.02] transition-transform duration-300"
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-16 px-6 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-brand-heading mb-4">
            Come Experience Colombia in Toronto
          </h2>
          <p className="text-brand-body mb-8 max-w-lg mx-auto">
            Reservations available via WhatsApp. Walk-ins always welcome.
          </p>
          <a
            href="https://wa.me/19054613895"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-yellow text-brand-black font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wider px-8 py-4 hover:bg-brand-yellow-hover transition-colors"
          >
            Reserve Your Table
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
