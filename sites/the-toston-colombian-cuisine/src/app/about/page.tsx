import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | The Toston Colombian Cuisine",
  description:
    "Meet Chef Alexander Sandoval and Cristina Arbelaez — the husband-and-wife team bringing authentic Colombian paisa cuisine and cafe culture to Markham.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://live.staticflickr.com/65535/54066676359_f7536d073f_o.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-[#2C1810]/60" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-[family-name:var(--font-heading)] text-white text-5xl md:text-6xl font-bold mb-3">
            Our Story
          </h1>
          <p className="font-[family-name:var(--font-body)] text-brand-gold text-lg">
            Two people, one dream, 18 seats
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="bg-brand-cream py-20">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-brand-coffee text-4xl font-bold mb-8">
            From Colombia to Markham
          </h2>
          <div className="space-y-6 font-[family-name:var(--font-body)] text-brand-brown leading-relaxed text-lg">
            <p>
              The Toston started with a simple idea: bring the warmth of
              Colombian cafe culture to Canada. <strong>Alexander Sandoval</strong>{" "}
              and <strong>Cristina Arbelaez</strong> — husband and wife — traded
              the bustle of their home country for the quiet suburbs of East
              Markham, but they refused to leave the flavours behind.
            </p>
            <p>
              &ldquo;We wanted to bring Colombia&apos;s rich cafe culture to
              Canada, so everything here is themed after coffee,&rdquo; says
              Cristina. What started as a dream turned into an 18-seat
              restaurant on Karachi Drive, where every dish is a direct
              connection to the paisa tradition they grew up in.
            </p>
            <p>
              Alexander runs the kitchen. He is most closely connected to the
              restaurant&apos;s signature dish — the toston. It&apos;s a
              labour-intensive process: he fries the whole plantain, then
              flattens it into a cup-shaped base before loading it with sauteed
              vegetables or slow-cooked meat. The result is something you won&apos;t
              find anywhere else in the GTA.
            </p>
            <p>
              Cristina runs the front. She greets every table personally,
              walks guests through the menu, and shares stories of each
              dish&apos;s origin. Regulars know her by name. First-timers
              feel like regulars by the time they leave.
            </p>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="bg-brand-tan py-20">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="https://live.staticflickr.com/65535/54066603963_608c6b5982_o.jpg"
              alt="Inside The Toston — cozy Colombian dining"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-brand-coffee text-3xl font-bold mb-6">
              Made from Scratch, Served with Love
            </h2>
            <ul className="space-y-4 font-[family-name:var(--font-body)] text-brand-brown">
              <li className="flex items-start gap-3">
                <span className="text-brand-gold text-xl mt-0.5">&#9679;</span>
                <span>
                  <strong>Fresh-made empanadas</strong> — hand-formed daily in
                  six different flavours, never frozen
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold text-xl mt-0.5">&#9679;</span>
                <span>
                  <strong>House-made sausage</strong> — Alexander makes his own
                  chorizo using traditional Colombian recipes
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold text-xl mt-0.5">&#9679;</span>
                <span>
                  <strong>Colombian coffee</strong> — sourced directly, brewed
                  strong, and absolutely worth the trip alone
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold text-xl mt-0.5">&#9679;</span>
                <span>
                  <strong>Gluten-free &amp; vegetarian options</strong> — because
                  everyone deserves a taste of Colombia
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="bg-brand-cream py-20">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-brand-coffee text-3xl font-bold mb-6">
            A Markham Gem
          </h2>
          <p className="font-[family-name:var(--font-body)] text-brand-brown text-lg leading-relaxed mb-8">
            With a 4.7-star rating from over 800 Google reviews, The Toston
            has become one of Markham&apos;s favourite hidden gems. Featured by
            CBC News and beloved by the Colombian and wider GTA community,
            it&apos;s the kind of place you tell your friends about.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-brand-tan rounded-xl p-6">
              <p className="font-[family-name:var(--font-heading)] text-brand-gold text-4xl font-bold">
                4.7
              </p>
              <p className="font-[family-name:var(--font-body)] text-brand-muted text-sm mt-1">
                Google Rating
              </p>
            </div>
            <div className="bg-brand-tan rounded-xl p-6">
              <p className="font-[family-name:var(--font-heading)] text-brand-gold text-4xl font-bold">
                800+
              </p>
              <p className="font-[family-name:var(--font-body)] text-brand-muted text-sm mt-1">
                Reviews
              </p>
            </div>
            <div className="bg-brand-tan rounded-xl p-6">
              <p className="font-[family-name:var(--font-heading)] text-brand-gold text-4xl font-bold">
                18
              </p>
              <p className="font-[family-name:var(--font-body)] text-brand-muted text-sm mt-1">
                Cozy Seats
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
