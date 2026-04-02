import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artists | Gwan Soon Lee Tattoos & Piercings",
  description:
    "Meet the talented tattoo artists at Gwan Soon Lee Tattoos & Piercings. 25+ years of experience in custom tattoo art in Mississauga, ON.",
};

const ARTISTS = [
  {
    name: "Gwan Soon Lee",
    role: "Owner / Lead Artist",
    experience: "25+ years",
    specialties: ["Colour Realism", "Black & Grey", "Custom Design", "Large-Scale Pieces"],
    bio: "With over 25 years in the tattoo industry, Gwan Soon Lee has built a reputation for exceptional artistry and meticulous attention to detail. As the founder of the studio, he brings a deep understanding of both traditional and modern tattooing techniques, specializing in colour realism and black and grey work that pushes the boundaries of skin art.",
    image: "https://images.squarespace-cdn.com/content/v1/5b43b4c1697a982c7acc411a/1605057498811-TRGTBP8BD8X70R9U8AU9/processs.jpg",
  },
  {
    name: "Jina",
    role: "Tattoo Artist",
    experience: "Experienced",
    specialties: ["Fine Line", "Colour Work", "Small Tattoos", "Minimalist Design"],
    bio: "Jina brings a refined aesthetic to the studio, known for her elegant fine line work and delicate colour pieces. Her attention to detail and warm approach makes her a favourite among clients seeking precise, meaningful tattoos. Follow her work at @jina.gwansoontattoos on Instagram.",
    image: "https://images.squarespace-cdn.com/content/v1/5b43b4c1697a982c7acc411a/1605054980932-YE3FW5UWDX8ET59C5G9F/DSC08682.JPG",
    instagram: "@jina.gwansoontattoos",
  },
];

const VALUES = [
  {
    title: "Safety First",
    description: "We maintain the highest standards of cleanliness and sterilization. All equipment is single-use or autoclave-sterilized, and our studio exceeds health code requirements.",
  },
  {
    title: "Custom Artistry",
    description: "No flash tattoos here. Every piece is custom-designed in collaboration with you, ensuring a one-of-a-kind result that reflects your personality and vision.",
  },
  {
    title: "Client Comfort",
    description: "From your first consultation to aftercare, we guide you through every step. We take the time to explain the process so you feel confident and at ease.",
  },
  {
    title: "Community Roots",
    description: "Proudly serving the Mississauga community since 2006, we have built lasting relationships with clients who return again and again. Located near Square One for easy access.",
  },
];

export default function ArtistsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="section-padding bg-brand-black text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-brand-green font-body text-sm uppercase tracking-[0.3em] mb-3">
            The Team
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-light text-brand-white">
            Our Artists
          </h1>
          <div className="green-divider" />
          <p className="text-white/60 mt-6 max-w-2xl mx-auto">
            Meet the skilled artists behind Gwan Soon Lee Tattoos &amp; Piercings.
            Each brings unique specialties and a shared passion for exceptional tattoo art.
          </p>
        </div>
      </section>

      {/* Artists */}
      <section className="section-padding bg-brand-dark">
        <div className="max-w-5xl mx-auto space-y-20">
          {ARTISTS.map((artist, index) => (
            <div
              key={artist.name}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="aspect-[4/3] overflow-hidden rounded-sm border border-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-brand-gold font-body text-xs uppercase tracking-[0.2em] mb-2">
                  {artist.role}
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-light text-brand-white mb-2">
                  {artist.name}
                </h2>
                <p className="text-brand-green text-sm mb-6">{artist.experience} of experience</p>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {artist.bio}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {artist.specialties.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 text-xs border border-brand-green/30 text-brand-green rounded-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                {artist.instagram && (
                  <a
                    href={`https://www.instagram.com/${artist.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-gold hover:text-brand-gold-light text-sm transition-colors"
                  >
                    {artist.instagram} on Instagram &rarr;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Studio Values */}
      <section className="section-padding bg-brand-charcoal">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
              What Drives Us
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-brand-white">
              Our Studio Values
            </h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="bg-brand-dark border border-white/10 p-8 rounded-sm"
              >
                <h3 className="font-heading text-2xl text-brand-green mb-3">{value.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-brand-black text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-light text-brand-white mb-12">
            By the Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-brand-green font-heading text-4xl font-light">25+</p>
              <p className="text-white/40 text-xs uppercase tracking-wider mt-2">Years</p>
            </div>
            <div>
              <p className="text-brand-green font-heading text-4xl font-light">4.6</p>
              <p className="text-white/40 text-xs uppercase tracking-wider mt-2">Rating</p>
            </div>
            <div>
              <p className="text-brand-green font-heading text-4xl font-light">132+</p>
              <p className="text-white/40 text-xs uppercase tracking-wider mt-2">Reviews</p>
            </div>
            <div>
              <p className="text-brand-green font-heading text-4xl font-light">96%</p>
              <p className="text-white/40 text-xs uppercase tracking-wider mt-2">Recommend</p>
            </div>
          </div>

          <div className="mt-16">
            <a
              href="https://gwansoonleetattoo.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
