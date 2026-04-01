import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Pure Self Salon N Spa",
  description:
    "Learn about Pure Self Salon N Spa, Markham's premier AVEDA Concept Salon & Spa. 14+ years of experience, 8+ team members, and 12,000+ happy clients.",
};

const VALUES = [
  {
    title: "Holistic Beauty",
    description:
      "We believe in beauty that goes beyond the surface. Our AVEDA-based approach nurtures your hair, skin, and well-being from the inside out.",
  },
  {
    title: "Expert Team",
    description:
      "Our 8+ team members bring diverse specialties and continuous training to deliver exceptional results for every client.",
  },
  {
    title: "Premium Products",
    description:
      "As an AVEDA Concept Salon, we exclusively use plant-based, high-performance products that are kind to you and the environment.",
  },
  {
    title: "Client First",
    description:
      "With 12,000+ clients served and a Fresha Highly Recommended 2025 award, our commitment to your satisfaction speaks for itself.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="section-padding bg-brand-black text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-brand-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
            Our Story
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-light text-brand-white">
            About Pure Self
          </h1>
          <div className="gold-divider" />
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-brand-dark">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-brand-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
                Est. 2010
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-brand-white mb-6">
                Holistic Beauty Awaits You
              </h2>
              <div className="space-y-4 text-white/60 text-sm leading-relaxed">
                <p>
                  Pure Self Salon N Spa was founded with a simple but powerful vision: to create a
                  sanctuary where beauty, wellness, and self-care converge. Located in the heart of
                  Markham at 3985 Hwy 7 E, we have been serving our community for over 14 years.
                </p>
                <p>
                  As an AVEDA Concept Salon &amp; Spa, we are committed to using plant-based,
                  high-performance products that deliver exceptional results while being
                  environmentally responsible. Our team of 8+ skilled professionals brings together
                  diverse expertise in hair, colour, laser, spa services, and more.
                </p>
                <p>
                  Under the guidance of owner Misha, Pure Self has grown to serve over 12,000 clients,
                  earning a Fresha Highly Recommended 2025 award, a 4.5-star Groupon rating with 150
                  reviews, and a loyal Instagram following of 12,000+.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="aspect-[4/3] overflow-hidden rounded-sm border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://www.pureselfsalon.com/images/photo-gallery/gallery-1.webp"
                  alt="Pure Self Salon interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-4 p-6 bg-brand-charcoal border border-white/10 rounded-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://www.pureselfsalon.com/images/fresha-award.webp"
                  alt="Fresha Highly Recommended 2025 Award"
                  className="h-20 w-auto flex-shrink-0"
                />
                <div>
                  <p className="text-brand-gold font-heading text-lg">Highly Recommended 2025</p>
                  <p className="text-white/50 text-xs mt-1">
                    Recognized by Fresha for outstanding service quality and client satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AVEDA Partnership */}
      <section className="section-padding bg-brand-black">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-brand-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
            Our Partner
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-light text-brand-white mb-6">
            Proud AVEDA Concept Salon
          </h2>
          <div className="gold-divider" />
          <div className="max-w-3xl mx-auto mt-8">
            <p className="text-white/60 text-sm leading-relaxed">
              AVEDA is the world leader in botanical science for hair, skin, and body care. As an
              AVEDA Concept Salon, Pure Self exclusively uses AVEDA&apos;s plant-powered formulas that
              are high-performing, cruelty-free, and crafted with respect for the Earth. From our
              signature treatments to our retail products, the AVEDA difference is woven into
              everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-brand-charcoal">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
              What Drives Us
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-brand-white">
              Our Values
            </h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="bg-brand-dark border border-white/10 p-8 rounded-sm"
              >
                <h3 className="font-heading text-2xl text-brand-gold mb-3">{value.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="section-padding bg-brand-black text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-light text-brand-white mb-12">
            By the Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-brand-gold font-heading text-4xl font-light">14+</p>
              <p className="text-white/40 text-xs uppercase tracking-wider mt-2">Years</p>
            </div>
            <div>
              <p className="text-brand-gold font-heading text-4xl font-light">12K+</p>
              <p className="text-white/40 text-xs uppercase tracking-wider mt-2">Clients</p>
            </div>
            <div>
              <p className="text-brand-gold font-heading text-4xl font-light">8+</p>
              <p className="text-white/40 text-xs uppercase tracking-wider mt-2">Team Members</p>
            </div>
            <div>
              <p className="text-brand-gold font-heading text-4xl font-light">4.5</p>
              <p className="text-white/40 text-xs uppercase tracking-wider mt-2">Groupon Stars</p>
            </div>
          </div>

          <div className="mt-16">
            <a
              href="https://pureselfsalon.setmore.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Your Visit
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
