import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Artists | 905 INK Tattoo Facility",
  description:
    "Meet the talented artists at 905 INK. Specializing in portraits, realism, linework, Japanese art, and custom designs.",
};

const artists = [
  {
    name: "Ace",
    instagram: "@immortalacetattoos",
    instagramUrl: "https://instagram.com/immortalacetattoos",
    location: "Brampton",
    image: "https://905ink.ca/wp-content/uploads/2023/02/Artist_16_1.webp",
    specialties: ["Portraits", "Realism", "Custom"],
    bio: "A master of photorealistic portraits and custom designs, Ace brings an unmatched level of detail and precision to every piece.",
  },
  {
    name: "Mano",
    instagram: "@coilbug_manooo",
    instagramUrl: "https://instagram.com/coilbug_manooo",
    location: "Brampton",
    image: null,
    specialties: ["Coil Work", "Traditional", "Neo-Traditional"],
    bio: "Known for expert coil work and bold traditional pieces, Mano creates timeless tattoos with clean lines and rich color.",
  },
  {
    name: "Bhupi",
    instagram: "@bhupie_tattoos",
    instagramUrl: "https://instagram.com/bhupie_tattoos",
    location: "Brampton",
    image: null,
    specialties: ["Fine Line", "Script", "Minimalism"],
    bio: "Bhupi specializes in delicate fine line work and script lettering, creating elegant pieces with exceptional precision.",
  },
  {
    name: "Harman",
    instagram: "@harmanillla",
    instagramUrl: "https://instagram.com/harmanillla",
    location: "Brampton",
    image: null,
    specialties: ["Black & Grey", "Realism", "Religious"],
    bio: "Harman excels in black and grey realism, bringing depth and emotion to every design with masterful shading techniques.",
  },
  {
    name: "Abhishek",
    instagram: "@vision.theartgallery",
    instagramUrl: "https://instagram.com/vision.theartgallery",
    location: "Brampton",
    image: null,
    specialties: ["Color Realism", "Portraits", "Custom"],
    bio: "Abhishek turns skin into a canvas with vibrant color realism and detailed portrait work that tells a story.",
  },
];

export default function ArtistsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-6xl md:text-7xl text-white tracking-wider mb-4">
            OUR <span className="text-burnt-red">ARTISTS</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Meet the talented team behind 905 INK. Each artist brings their unique
            style and expertise to create exceptional body art.
          </p>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.map((artist) => (
              <div
                key={artist.name}
                className="bg-dark border border-dark-lighter rounded-lg overflow-hidden hover:border-burnt-red/30 transition-colors group"
              >
                <div className="relative h-72 bg-dark-lighter">
                  {artist.image ? (
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <span className="font-heading text-8xl text-burnt-red/20">
                        {artist.name[0]}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
                </div>
                <div className="p-6">
                  <h2 className="font-heading text-3xl text-white tracking-wider mb-1">
                    {artist.name}
                  </h2>
                  <p className="text-burnt-red text-sm mb-3">{artist.location}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {artist.bio}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {artist.specialties.map((s) => (
                      <span
                        key={s}
                        className="bg-burnt-red/10 text-burnt-red text-xs px-3 py-1 rounded-full"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <a
                    href={artist.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-burnt-red transition-colors text-sm flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    {artist.instagram}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guest Artists */}
      <section className="py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-5xl text-white tracking-wider mb-6">
            GUEST ARTISTS WELCOME
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            905 INK regularly hosts guest artists from around the world, bringing
            fresh styles and techniques to our studios. Follow us on Instagram
            to stay updated on upcoming guest artist appearances.
          </p>
          <a
            href="https://instagram.com/905inktattoo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-burnt-red hover:bg-burnt-red-dark text-white px-8 py-3 rounded font-semibold tracking-wide transition-colors uppercase"
          >
            Follow @905inktattoo
          </a>
        </div>
      </section>
    </>
  );
}
