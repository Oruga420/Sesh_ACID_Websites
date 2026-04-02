import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Artists | Toronto Tattoohaus",
  description:
    "Meet the talented resident and independent artists at Toronto Tattoohaus. Specializing in fine line, illustrative, black & grey, and fully custom tattoo designs.",
};

const RESIDENT_ARTISTS = [
  {
    name: "Kate",
    role: "Owner / Lead Artist",
    instagram: "kate_somebody",
    description:
      "Studio founder and lead artist known for bold portraiture and custom pieces. Kate brings years of experience and a welcoming energy to every session.",
  },
  {
    name: "Carrie",
    role: "Resident Artist",
    instagram: "plustwo.ink",
    description:
      "Specializing in detailed illustrative work with a unique style that blends whimsy and precision in every design.",
  },
  {
    name: "Isabel",
    role: "Resident Artist",
    instagram: "blackberry.inks",
    description:
      "Fine line and botanical specialist creating delicate, nature-inspired pieces with incredible attention to detail.",
  },
  {
    name: "Rafa",
    role: "Resident Artist",
    instagram: "rafatatts",
    description:
      "Versatile artist skilled in black and grey realism and illustrative styles, bringing bold vision to every client collaboration.",
  },
];

const INDEPENDENT_ARTISTS = [
  { name: "Maxine", instagram: "maxinemahood" },
  { name: "Jame", instagram: "sympl.ink" },
  { name: "Syd", instagram: "babysnaykes" },
  { name: "Karla", instagram: "ksavotattoos" },
  { name: "Laura", instagram: "_razorbabe" },
  { name: "Caroline", instagram: "carolinetattoos" },
];

export default function ArtistsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="section-padding bg-brand-black text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-brand-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
            The Team
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-light text-brand-white">
            Our Artists
          </h1>
          <div className="gold-divider" />
          <p className="text-white/60 mt-6 max-w-2xl mx-auto">
            Every artist at Toronto Tattoohaus brings their own unique style and perspective.
            Explore their work and find the perfect match for your next piece.
          </p>
        </div>
      </section>

      {/* Resident Artists */}
      <section className="section-padding bg-brand-dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
              In-House
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-brand-white">
              Resident Artists
            </h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESIDENT_ARTISTS.map((artist) => (
              <div
                key={artist.name}
                className="bg-brand-charcoal border border-white/10 p-8  hover:border-brand-gold/30 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-heading text-2xl text-brand-white group-hover:text-brand-gold transition-colors">
                      {artist.name}
                    </h3>
                    <p className="text-brand-gold text-sm mt-1">{artist.role}</p>
                  </div>
                  <a
                    href={`https://www.instagram.com/${artist.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-brand-gold transition-colors flex-shrink-0"
                    aria-label={`${artist.name} on Instagram`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">
                  {artist.description}
                </p>
                <a
                  href={`https://www.instagram.com/${artist.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-brand-gold text-sm hover:text-brand-gold-light transition-colors"
                >
                  @{artist.instagram} &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Independent Artists */}
      <section className="section-padding bg-brand-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
              Guest &amp; Independent
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-brand-white">
              Independent Artists
            </h2>
            <div className="gold-divider" />
            <p className="text-white/50 mt-4 max-w-xl mx-auto">
              These talented independent artists work out of our studio. Check their Instagram for availability and booking.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {INDEPENDENT_ARTISTS.map((artist) => (
              <a
                key={artist.name}
                href={`https://www.instagram.com/${artist.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-dark border border-white/10 p-6  hover:border-brand-gold/30 transition-all duration-300 text-center group"
              >
                <h3 className="font-heading text-xl text-brand-white group-hover:text-brand-gold transition-colors mb-2">
                  {artist.name}
                </h3>
                <p className="text-white/40 text-sm">@{artist.instagram}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-brand-charcoal">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
              Rates
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-brand-white">
              Pricing Guide
            </h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-dark border border-white/10 p-8  text-center">
              <p className="text-brand-gold font-heading text-lg mb-2">Flash Pieces</p>
              <p className="text-brand-white font-heading text-4xl font-light">$80+</p>
              <p className="text-white/50 text-sm mt-3">Tue &amp; Wed flash days</p>
            </div>
            <div className="bg-brand-dark border border-brand-gold/30 p-8  text-center">
              <p className="text-brand-gold font-heading text-lg mb-2">Hourly Rate</p>
              <p className="text-brand-white font-heading text-4xl font-light">$130 - $200</p>
              <p className="text-white/50 text-sm mt-3">Junior to senior artists</p>
            </div>
            <div className="bg-brand-dark border border-white/10 p-8  text-center">
              <p className="text-brand-gold font-heading text-lg mb-2">Day Rate</p>
              <p className="text-brand-white font-heading text-4xl font-light">$700 - $1,000</p>
              <p className="text-white/50 text-sm mt-3">Full-day sessions</p>
            </div>
          </div>

          <div className="mt-8 text-center text-white/40 text-sm">
            <p>Deposits: $50 - $150 + tax (non-refundable, transferable 3x within 1 year)</p>
            <p className="mt-1">Numbing cream available: $30/tube (apply 1+ hour before appointment)</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-black text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-light text-brand-white mb-6">
            Found Your Artist?
          </h2>
          <div className="gold-divider" />
          <p className="text-white/60 text-lg mb-10 mt-6">
            Fill out our booking form with your idea, preferred artist, and placement.
            We&apos;ll get back to you within 48 hours to confirm your consultation.
          </p>
          <a
            href="https://form.jotform.com/200156118945251"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-10 py-4"
          >
            Book a Consultation
          </a>
        </div>
      </section>
    </>
  );
}
