import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Yonge Street Tattoos',
  description: 'Founded in 1995 by Pauline Zahalan, Yonge Street Tattoos is Toronto\'s longest-running female-owned tattoo shop. Learn our story.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/5f69731f8fbe6f65c610e1e4/8d5f1910-a098-4816-85a0-f79708f3eaa5/_MG_2354.jpg"
          alt="Yonge Street Tattoos shop exterior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-black/70" />
        <div className="relative z-10 text-center">
          <p className="text-brand-gold uppercase tracking-[0.3em] text-sm mb-4">Since 1995</p>
          <h1 className="font-display text-5xl md:text-7xl">Our Story</h1>
          <div className="gold-divider" />
        </div>
      </section>

      {/* Origin Story */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-brand-gold uppercase tracking-[0.2em] text-sm mb-3">The Beginning</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">Born from Art &amp; Passion</h2>
            <div className="w-12 h-0.5 bg-brand-gold mb-6" />
            <p className="text-brand-white/70 leading-relaxed mb-6">
              Yonge Street Tattoos first opened its doors in the summer of 1995 under the name
              &ldquo;Way Cool Tattoos Yonge Street,&rdquo; founded by David Daniels. Pauline Zahalan,
              one of the original artists, discovered her passion for tattooing through a photography
              project and quickly became a driving force at the shop.
            </p>
            <p className="text-brand-white/70 leading-relaxed mb-6">
              In August 1997, Pauline purchased the shop, making YST one of Toronto&apos;s rare
              women-owned tattoo studios at the time. Under her leadership, the shop recruited skilled,
              dedicated artists and quickly gained prominence in the city&apos;s tattoo scene.
            </p>
            <p className="text-brand-white/70 leading-relaxed">
              Today, Yonge Street Tattoos proudly holds the distinction of being Toronto&apos;s
              longest-running female-owned tattoo shop — a testament to Pauline&apos;s vision,
              resilience, and unwavering commitment to the craft.
            </p>
          </div>
          <div className="relative h-[600px]">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5f69731f8fbe6f65c610e1e4/12ce6a51-6db1-40de-8b87-03b34602cedf/_MG_2508.jpg"
              alt="Inside the Yonge Street Tattoos studio"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* The Collective */}
      <section className="section-padding bg-brand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-gold uppercase tracking-[0.2em] text-sm mb-3">Since 2016</p>
          <h2 className="font-display text-4xl md:text-5xl mb-6">The Collective Model</h2>
          <div className="gold-divider" />
          <p className="text-brand-white/70 leading-relaxed text-lg mb-8">
            In 2016, Yonge Street Tattoos transitioned to a collective model of independent tattoo
            artists. Each artist brings their own distinct style and vision — from Traditional and
            Realism to Geometric Abstract and Classical Portraiture.
          </p>
          <p className="text-brand-white/70 leading-relaxed text-lg mb-8">
            This model ensures every client can find the perfect artist for their vision while
            maintaining the family atmosphere that has defined YST for three decades.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-8 border border-brand-charcoal">
              <p className="text-4xl font-display text-brand-gold mb-3">30+</p>
              <p className="text-brand-gray uppercase text-sm tracking-wider">Years of Ink</p>
            </div>
            <div className="p-8 border border-brand-charcoal">
              <p className="text-4xl font-display text-brand-gold mb-3">6</p>
              <p className="text-brand-gray uppercase text-sm tracking-wider">Independent Artists</p>
            </div>
            <div className="p-8 border border-brand-charcoal">
              <p className="text-4xl font-display text-brand-gold mb-3">1000s</p>
              <p className="text-brand-gray uppercase text-sm tracking-wider">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] lg:order-2">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5f69731f8fbe6f65c610e1e4/3b9fa628-6993-43a3-a692-de0633412707/_MG_2480.jpg"
              alt="Artists at work"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:order-1">
            <p className="text-brand-gold uppercase tracking-[0.2em] text-sm mb-3">What We Stand For</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">Safe &amp; Inclusive</h2>
            <div className="w-12 h-0.5 bg-brand-gold mb-6" />
            <div className="space-y-6 text-brand-white/70 leading-relaxed">
              <p>
                We provide a safe and inclusive experience for all our clients. Whether you&apos;re a
                first-timer nervous about getting your first piece or a seasoned collector adding to your
                sleeve, our doors are open and our artists are ready.
              </p>
              <p>
                Over the decades, YST has served diverse clientele including celebrities, first-time
                clients, regulars, and families. We believe great tattoos come from a place of trust,
                respect, and open communication.
              </p>
              <p>
                As one of Toronto&apos;s last remaining family-owned and operated tattoo shops, we take
                pride in maintaining the personal touch that corporate chains simply cannot replicate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-dark text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl mb-6">Come Visit Us</h2>
          <div className="gold-divider" />
          <p className="text-brand-white/70 text-lg mb-8">
            602 Yonge St., 3rd Floor, Toronto. Walk-ins welcome or book a consultation through our artists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/artists" className="btn-gold">
              Meet the Artists
            </Link>
            <Link href="/contact" className="btn-outline">
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
