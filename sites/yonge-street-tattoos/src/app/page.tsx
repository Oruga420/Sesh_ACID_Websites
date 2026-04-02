import Image from 'next/image';
import Link from 'next/link';

const GALLERY_IMAGES = [
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5f69731f8fbe6f65c610e1e4/1699576673371-G560KYFWAI6ORFZ5IEIS/20230810_182547-01.jpg',
    alt: 'Bird and flower tattoo',
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5f69731f8fbe6f65c610e1e4/1699576774623-YHDZBUA8DSZSGUVNJKL9/Screenshot_20231101-181819_Instagram.jpg',
    alt: 'Jackrabbit tattoo',
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5f69731f8fbe6f65c610e1e4/1699576890415-2LVEGJPV4UBFXG293HOO/IMG_7757.jpg',
    alt: 'Black and grey tattoo',
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5f69731f8fbe6f65c610e1e4/1699576984585-L8VZKM3W340RSHRFD2O4/IMG_3445.jpg',
    alt: 'Illustrative animal tattoo',
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5f69731f8fbe6f65c610e1e4/1699577054958-SFJWUBFK5DBVF3JHQD0G/Screenshot_20231101-181923_Instagram.jpg',
    alt: 'Custom tattoo design',
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5f69731f8fbe6f65c610e1e4/1699897437636-W47O9D4018B5I96AIV6P/IMG_1143.jpg',
    alt: 'Fine line tattoo',
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5f69731f8fbe6f65c610e1e4/1604091446321-854O4359I6RBNTHNZQG5/PZ_tigerfly.jpg',
    alt: 'Tiger butterfly tattoo by Pauline',
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5f69731f8fbe6f65c610e1e4/1604091450110-T14LT11X9GPMSCSBEX56/PZ_tigereyes.jpg',
    alt: 'Tiger eyes tattoo by Pauline',
  },
];

const TESTIMONIALS = [
  {
    text: 'The space is spacious and clean, and the staff is as knowledgeable as they come. Worth every penny.',
    author: 'blogTO Staff Review',
  },
  {
    text: 'Amazing artists who take the time to understand exactly what you want. The shop has a great vibe and everyone is so welcoming.',
    author: 'Yelp Reviewer',
  },
  {
    text: 'Been coming here for years. Pauline and her team are true professionals. Would not trust anyone else with my ink.',
    author: 'Google Reviewer',
  },
  {
    text: 'Best tattoo shop in Toronto hands down. Clean, professional, and the artwork speaks for itself.',
    author: 'Yelp Reviewer',
  },
];

const SERVICES = [
  { name: 'Custom Tattoos', desc: 'One-of-a-kind designs crafted to your vision' },
  { name: 'Traditional', desc: 'Bold lines and vibrant classic Americana' },
  { name: 'Neo-Traditional', desc: 'Modern evolution of classic tattoo style' },
  { name: 'Realism', desc: 'Photorealistic portraits and imagery' },
  { name: 'Japanese', desc: 'Irezumi-inspired motifs and compositions' },
  { name: 'Black & Grey', desc: 'Timeless monochromatic shading' },
  { name: 'Dot-work', desc: 'Intricate stippled patterns and mandalas' },
  { name: 'Geometric', desc: 'Sacred geometry and abstract forms' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/5f69731f8fbe6f65c610e1e4/c11de3cb-16f9-482e-ab54-8ed7b1d93ca6/_MG_2373.jpg"
          alt="Yonge Street Tattoos studio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-brand-black/40 to-brand-black" />
        <div className="relative z-10 text-center max-w-4xl px-4">
          <p className="text-brand-gold uppercase tracking-[0.3em] text-sm mb-4 font-medium">Est. 1995</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
            Yonge Street<br />Tattoos
          </h1>
          <div className="gold-divider" />
          <p className="text-xl md:text-2xl text-brand-white/80 mb-8 max-w-2xl mx-auto font-light">
            Toronto&apos;s longest-running female-owned tattoo shop.
            <br className="hidden md:block" />
            Safe &amp; inclusive experience for all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/artists" className="btn-gold">
              Meet Our Artists
            </Link>
            <a
              href="https://www.instagram.com/yongestreettattoos/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-brand-charcoal py-8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center px-4">
          <div>
            <p className="text-3xl md:text-4xl font-display text-brand-gold">30+</p>
            <p className="text-brand-gray text-sm uppercase tracking-wider mt-1">Years Open</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-display text-brand-gold">6</p>
            <p className="text-brand-gray text-sm uppercase tracking-wider mt-1">Resident Artists</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-display text-brand-gold">4.0</p>
            <p className="text-brand-gray text-sm uppercase tracking-wider mt-1">Google Rating</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-display text-brand-gold">38</p>
            <p className="text-brand-gray text-sm uppercase tracking-wider mt-1">Yelp Reviews</p>
          </div>
        </div>
      </section>

      {/* About Intro */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px]">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5f69731f8fbe6f65c610e1e4/12ce6a51-6db1-40de-8b87-03b34602cedf/_MG_2508.jpg"
              alt="Inside Yonge Street Tattoos studio"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-brand-gold uppercase tracking-[0.2em] text-sm mb-3">Our Story</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              One of Toronto&apos;s Last Family-Owned Tattoo Shops
            </h2>
            <div className="gold-divider !mx-0" />
            <p className="text-brand-white/70 leading-relaxed mb-6">
              Founded in 1995 by Pauline Zahalan, Yonge Street Tattoos has grown into one of
              Toronto&apos;s most respected tattoo destinations. What started as a passion born from
              a photography project has become the longest-running female-owned tattoo shop in the city.
            </p>
            <p className="text-brand-white/70 leading-relaxed mb-8">
              In 2016, YST transitioned to a collective model of independent tattoo artists, each
              specializing in distinct styles from Traditional and Realism to Geometric Abstract
              and Classical Portraiture. We provide a safe and inclusive experience for all our clients.
            </p>
            <Link href="/about" className="btn-outline">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-gold uppercase tracking-[0.2em] text-sm mb-3">What We Offer</p>
            <h2 className="font-display text-4xl md:text-5xl">Tattoo Styles &amp; Services</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((svc) => (
              <div
                key={svc.name}
                className="border border-brand-charcoal p-6 hover:border-brand-gold/40 transition-colors group"
              >
                <h3 className="text-lg font-semibold mb-2 group-hover:text-brand-gold transition-colors">
                  {svc.name}
                </h3>
                <p className="text-brand-gray text-sm">{svc.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-brand-gray text-sm mb-2">
              Shop Minimum: <span className="text-brand-gold">$80</span> &bull; Hourly from <span className="text-brand-gold">$150</span>
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-gold uppercase tracking-[0.2em] text-sm mb-3">Our Work</p>
            <h2 className="font-display text-4xl md:text-5xl">Recent Tattoos</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {GALLERY_IMAGES.map((img, i) => (
              <div key={i} className="relative aspect-square overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/40 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-brand-dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-gold uppercase tracking-[0.2em] text-sm mb-3">What People Say</p>
            <h2 className="font-display text-4xl md:text-5xl">Client Reviews</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="border-l-2 border-brand-gold pl-6 py-2">
                <p className="text-brand-white/80 italic leading-relaxed mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="text-brand-gold text-sm font-medium">&mdash; {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/5f69731f8fbe6f65c610e1e4/3b9fa628-6993-43a3-a692-de0633412707/_MG_2480.jpg"
          alt="Yonge Street Tattoos atmosphere"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-black/80" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl mb-6">Ready for Your Next Piece?</h2>
          <div className="gold-divider" />
          <p className="text-brand-white/70 text-lg mb-8">
            Browse our artists&apos; portfolios and reach out to book your custom consultation.
            Walk-ins are also welcome — check individual artist availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/artists" className="btn-gold">
              View Artists
            </Link>
            <a href="tel:416-929-2285" className="btn-outline">
              Call 416-929-2285
            </a>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.245!2d-79.387!3d43.6656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34b5a0a0a0a1%3A0x1234567890abcdef!2s602+Yonge+St%2C+Toronto%2C+ON+M4Y+1Z3!5e0!3m2!1sen!2sca!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Yonge Street Tattoos location"
        />
      </section>
    </>
  );
}
