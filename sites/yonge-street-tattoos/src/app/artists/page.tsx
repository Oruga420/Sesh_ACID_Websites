import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Artists | Yonge Street Tattoos',
  description: 'Meet the talented resident artists at Yonge Street Tattoos. Custom tattoos in Traditional, Realism, Neo-traditional, Dot-work, and more.',
};

const ARTISTS = [
  {
    name: 'Pauline Zahalan',
    role: 'Owner & Founder',
    instagram: '@paulinez',
    specialty: 'Traditional, Realism, Neo-traditional',
    bio: 'The original YST founder with nearly 30 years of experience. Inspired by nature, travel, and animals.',
    photo: 'https://images.squarespace-cdn.com/content/v1/5f69731f8fbe6f65c610e1e4/1e09b816-d05a-4e45-a517-60053d5f4558/PZ_koi.jpg',
    work: [
      'https://images.squarespace-cdn.com/content/v1/5f69731f8fbe6f65c610e1e4/1604091446321-854O4359I6RBNTHNZQG5/PZ_tigerfly.jpg',
      'https://images.squarespace-cdn.com/content/v1/5f69731f8fbe6f65c610e1e4/1604091450110-T14LT11X9GPMSCSBEX56/PZ_tigereyes.jpg',
      'https://images.squarespace-cdn.com/content/v1/5f69731f8fbe6f65c610e1e4/1604091451858-W2NC19N24YFDEXWNLMZH/PZ_lady.jpg',
    ],
  },
  {
    name: 'Christian X',
    role: 'Resident Artist',
    instagram: '@x1506x',
    specialty: 'Dot-work, Ornamental Design, Black & Red',
    bio: 'Specializes in dot-work, ornamental design and black & red colour-work using Traditional and Neo-traditional techniques.',
    photo: 'https://images.squarespace-cdn.com/content/v1/5f69731f8fbe6f65c610e1e4/fcead9d3-6309-4e58-9ce3-181d36a7b404/IMG_2572.jpg',
    work: [
      'https://images.squarespace-cdn.com/content/v1/5f69731f8fbe6f65c610e1e4/1604095383110-P9KLVBFV4IBVIV6H68ZF/2CE5B42B-9FA5-4659-8C06-E60A704F06C0.jpeg',
      'https://images.squarespace-cdn.com/content/v1/5f69731f8fbe6f65c610e1e4/55b61936-585e-42d0-8a8a-fbcfde2b9234/IMG_0511.jpg',
      'https://images.squarespace-cdn.com/content/v1/5f69731f8fbe6f65c610e1e4/1e05b5b5-742f-46b7-be1e-15e5a745e53b/IMG_2522.jpg',
    ],
  },
  {
    name: 'Emily (Teekatatts)',
    role: 'Resident Artist',
    instagram: '@teekatatts',
    specialty: 'Various Styles',
    bio: 'A versatile artist with a distinctive creative vision.',
    photo: 'https://images.squarespace-cdn.com/content/v1/5f69731f8fbe6f65c610e1e4/41aebb69-877a-4ef5-b2b6-7a6e99bf4e9e/Screenshot_20231101-181835_Instagram.jpg',
    work: [],
  },
  {
    name: 'Vicky',
    role: 'Resident Artist',
    instagram: null,
    specialty: 'Gothic, Black & Grey',
    bio: 'Known for gothic designs and stunning black and grey work.',
    photo: 'https://images.squarespace-cdn.com/content/v1/5f69731f8fbe6f65c610e1e4/20bd3e15-997c-4ab6-94c3-a2049fd5a806/20230729_164105-01.jpg',
    work: [],
  },
  {
    name: 'Bri',
    role: 'Resident Artist',
    instagram: null,
    specialty: 'Black & Grey',
    bio: 'Specializes in expressive black and grey tattoo work.',
    photo: 'https://images.squarespace-cdn.com/content/v1/5f69731f8fbe6f65c610e1e4/f32788e9-31df-4826-92e0-fb143081762d/IMG_7757.jpeg',
    work: [],
  },
  {
    name: 'Karla',
    role: 'Resident Artist',
    instagram: null,
    specialty: 'Animal & Illustrative',
    bio: 'Creative illustrative style with a focus on animal subjects.',
    photo: 'https://images.squarespace-cdn.com/content/v1/5f69731f8fbe6f65c610e1e4/e8e5d85d-cc86-44bf-ad3b-199484fb8d5d/IMG_2321.jpg',
    work: [],
  },
];

export default function ArtistsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/5f69731f8fbe6f65c610e1e4/3b9fa628-6993-43a3-a692-de0633412707/_MG_2480.jpg"
          alt="Yonge Street Tattoos artists at work"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-black/70" />
        <div className="relative z-10 text-center">
          <p className="text-brand-gold uppercase tracking-[0.3em] text-sm mb-4">The Collective</p>
          <h1 className="font-display text-5xl md:text-7xl">Our Artists</h1>
          <div className="gold-divider" />
          <p className="text-brand-white/70 text-lg max-w-xl mx-auto px-4">
            Six independent artists, each with their own distinct style and vision.
          </p>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto space-y-24">
          {ARTISTS.map((artist, index) => (
            <div
              key={artist.name}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:direction-rtl' : ''
              }`}
            >
              <div className={`relative aspect-square max-h-[500px] overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Image
                  src={artist.photo}
                  alt={`${artist.name} - tattoo work`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <p className="text-brand-gold uppercase tracking-[0.2em] text-xs mb-2">{artist.role}</p>
                <h2 className="font-display text-3xl md:text-4xl mb-4">{artist.name}</h2>
                <div className="w-12 h-0.5 bg-brand-gold mb-6" />
                <p className="text-brand-white/70 leading-relaxed mb-4">{artist.bio}</p>
                <p className="text-sm mb-6">
                  <span className="text-brand-gold">Specialty:</span>{' '}
                  <span className="text-brand-white/60">{artist.specialty}</span>
                </p>
                {artist.instagram && (
                  <a
                    href={`https://www.instagram.com/${artist.instagram.replace('@', '')}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-xs"
                  >
                    Follow {artist.instagram}
                  </a>
                )}

                {/* Mini gallery */}
                {artist.work.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 mt-8">
                    {artist.work.map((img, i) => (
                      <div key={i} className="relative aspect-square overflow-hidden">
                        <Image
                          src={img}
                          alt={`${artist.name} portfolio piece ${i + 1}`}
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <section className="section-padding bg-brand-dark text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl mb-6">Ready to Get Inked?</h2>
          <div className="gold-divider" />
          <p className="text-brand-white/70 text-lg mb-4">
            Browse each artist&apos;s portfolio and reach out directly via their Instagram or through
            our contact form to book your consultation.
          </p>
          <p className="text-brand-gray text-sm mb-8">
            Walk-ins may be available — check with your preferred artist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/yongestreettattoos/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              DM Us on Instagram
            </a>
            <a href="tel:416-929-2285" className="btn-outline">
              Call the Shop
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
