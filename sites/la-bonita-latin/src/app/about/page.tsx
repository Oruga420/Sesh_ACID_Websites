import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://itin-dev.wanderlogstatic.com/freeImage/YUVcC6oRCWhxbgBKvFYmoBKvmza7VWeR"
          alt="La Bonita Latin American Restaurant storefront"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2B1810]/70 to-[#2B1810]/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-[family-name:var(--font-heading)] text-white text-5xl md:text-6xl font-bold mb-2">
            Our Story
          </h1>
          <p className="font-[family-name:var(--font-body)] text-brand-gold text-lg">
            From grandmother&apos;s kitchen to your table
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-brand-offwhite py-20">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-brand-espresso text-4xl font-bold mb-8 text-center">
            Bienvenidos a La Bonita
          </h2>

          <div className="space-y-6 font-[family-name:var(--font-body)] text-brand-brown leading-relaxed">
            <p>
              La Bonita Latin American Restaurant was born from a deep love for
              Latin American culture and cuisine. The owner grew up working
              alongside her grandmother in the kitchen, learning the art of
              creating dishes that bring people together.
            </p>

            <blockquote className="border-l-4 border-brand-red pl-6 py-2 my-8 italic text-brand-espresso text-lg">
              &ldquo;I grew up working in my Grandmother&apos;s restaurant and
              seeing her passion and love with which she created a high quality
              menu and variety of flavors, I decided to follow her footsteps in
              creating a space with a cozy atmosphere, offering typical Latin
              American dishes especially from Colombia.&rdquo;
            </blockquote>

            <p>
              Since opening in <strong>2016</strong> at Canadian Place in
              Mississauga, La Bonita has become a beloved neighbourhood gem.
              While the menu is rooted in Colombian cuisine — Bandeja Paisa,
              sancocho, empanadas, and the famous tres leches cake — we strive
              to serve the best of all Latin America, including pupusas from El
              Salvador available by advance order.
            </p>

            <p>
              Every dish is made fresh with authentic recipes passed down through
              generations. We believe in generous portions because that is how
              abuela served — with love and plenty of food for everyone at the
              table.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="bg-brand-cream py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-brand-espresso text-3xl font-bold text-center mb-12">
            Why Guests Love La Bonita
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-white rounded-xl border border-brand-border p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-brand-espresso text-xl font-bold mb-3">
                Made with Love
              </h3>
              <p className="font-[family-name:var(--font-body)] text-brand-muted text-sm leading-relaxed">
                Every dish follows grandmother&apos;s recipes, made fresh daily
                with the same passion and care that started this journey.
              </p>
            </div>

            <div className="bg-brand-white rounded-xl border border-brand-border p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-brand-espresso text-xl font-bold mb-3">
                Generous Portions
              </h3>
              <p className="font-[family-name:var(--font-body)] text-brand-muted text-sm leading-relaxed">
                Guests consistently praise the huge, satisfying portions. At La
                Bonita, you never leave hungry — that&apos;s a promise.
              </p>
            </div>

            <div className="bg-brand-white rounded-xl border border-brand-border p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-brand-espresso text-xl font-bold mb-3">
                Family Atmosphere
              </h3>
              <p className="font-[family-name:var(--font-body)] text-brand-muted text-sm leading-relaxed">
                A cozy, clean space where every guest is treated like family.
                Patient staff who share the culture and stories behind each dish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-offwhite py-16 text-center">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-brand-espresso text-3xl font-bold mb-4">
            Come Experience La Bonita
          </h2>
          <p className="font-[family-name:var(--font-body)] text-brand-muted mb-8">
            Open Monday through Sunday, 11:30 AM - 7:30 PM. We accept cash and
            e-transfer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="bg-brand-red text-white font-[family-name:var(--font-body)] font-semibold px-8 py-3.5 rounded-lg hover:bg-brand-red-dark transition-colors duration-300 text-lg"
            >
              View Our Menu
            </Link>
            <Link
              href="/contact"
              className="border-2 border-brand-red text-brand-red font-[family-name:var(--font-body)] font-semibold px-8 py-3.5 rounded-lg hover:bg-brand-red hover:text-white transition-colors duration-300 text-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
