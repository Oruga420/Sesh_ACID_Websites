import Link from "next/link";

const STYLE_PREVIEW = [
  {
    title: "Fine Line",
    description: "Delicate, precise linework for elegant and minimalist designs that stand the test of time.",
    price: "From $130/hr",
  },
  {
    title: "Illustrative",
    description: "Bold, artistic compositions blending traditional drawing techniques with modern tattoo artistry.",
    price: "From $130/hr",
  },
  {
    title: "Black & Grey",
    description: "Stunning depth and shading using a full spectrum of grey tones for dramatic, timeless pieces.",
    price: "From $130/hr",
  },
  {
    title: "Custom Design",
    description: "Collaborative design process tailored to your vision. Every piece is one-of-a-kind.",
    price: "From $130/hr",
  },
];

const TESTIMONIALS = [
  {
    name: "Caroline's Client",
    text: "My husband & I got our tattoos through Caroline and we absolutely love them! She is wonderful. Amazing artist & person, we had a blast. Worth the 2.5 hour drive!",
    rating: 5,
  },
  {
    name: "Kate's Client",
    text: "Kate Doucette did a great job on my King Cobra portrait and my Demon tattoo. She is not only talented and gentle, but also easy to chat with. Both times were amazing.",
    rating: 5,
  },
  {
    name: "Studio Regular",
    text: "Amazing, talented, friendly women. Best experience getting a tattoo. The studio is super clean with a strong emphasis on sanitation. Ideal for first-timers.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.squarespace-cdn.com/content/v1/645a279bf6479109759c303a/A51A0043.jpg"
            alt="Toronto Tattoohaus studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-brand-black" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <p className="text-brand-gold font-body text-sm uppercase tracking-[0.3em] mb-4">
            Inclusive &amp; Accessible Studio
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-brand-white mb-6 leading-tight">
            Your Story.
            <br />
            <span className="text-brand-gold">Your Skin.</span>
          </h1>
          <p className="text-white/70 font-body text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Toronto&apos;s proudly inclusive tattoo studio on St. Clair West.
            Fine line, illustrative, black &amp; grey, and fully custom designs
            tailored to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://form.jotform.com/200156118945251"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-10 py-4"
            >
              Book a Tattoo
            </a>
            <Link href="/artists" className="btn-outline text-base px-10 py-4">
              Meet Our Artists
            </Link>
          </div>
        </div>
      </section>

      {/* Styles / Services Preview */}
      <section className="section-padding bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
              What We Do
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-brand-white">
              Our Styles
            </h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STYLE_PREVIEW.map((style) => (
              <div
                key={style.title}
                className="bg-brand-dark border border-white/10 p-8  hover:border-brand-gold/30 transition-all duration-300 group"
              >
                <h3 className="font-heading text-2xl text-brand-white mb-3 group-hover:text-brand-gold transition-colors">
                  {style.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {style.description}
                </p>
                <p className="text-brand-gold font-body text-sm font-semibold">
                  {style.price}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/about" className="btn-outline">
              Learn More About Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* Flash Days Banner */}
      <section className="section-padding bg-brand-green/20 border-y border-brand-green/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-green-light font-body text-sm uppercase tracking-[0.3em] mb-3">
            Every Tuesday &amp; Wednesday
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-light text-brand-white mb-4">
            Flash Days
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Walk in or book ahead for curated flash designs starting at just <span className="text-brand-gold font-semibold">$80</span>.
            New sheets every week from our resident and guest artists.
          </p>
          <a
            href="https://www.instagram.com/torontotattoohaus"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green"
          >
            See Flash on Instagram
          </a>
        </div>
      </section>

      {/* Studio Gallery */}
      <section className="section-padding bg-brand-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
              The Space
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-brand-white">
              Our Studio
            </h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-[4/3] overflow-hidden  group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.squarespace-cdn.com/content/v1/645a279bf6479109759c303a/f338e5af-c0ae-49c9-abad-7198fb95839a/A51A9994.jpg"
                alt="Toronto Tattoohaus studio interior"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden  group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.squarespace-cdn.com/content/v1/645a279bf6479109759c303a/A51A9890.jpg"
                alt="Toronto Tattoohaus artist at work"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
              Client Love
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-brand-white">
              What People Say
            </h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-brand-dark border border-white/10 p-8 "
              >
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-brand-gold text-lg">
                      &#9733;
                    </span>
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <p className="text-brand-gold font-body text-sm font-semibold">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-brand-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
              Find Us
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-brand-white">
              Visit the Studio
            </h2>
            <div className="gold-divider" />
            <p className="text-white/50 mt-4">
              873 St. Clair Ave W (Main Floor), Toronto, ON M6C 1C4
            </p>
            <p className="text-brand-green-light text-sm mt-2">
              Fully wheelchair accessible
            </p>
          </div>

          <div className="aspect-video  overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.5!2d-79.43!3d43.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b345c1c1c1c1c%3A0x0!2s873+St+Clair+Ave+W+Toronto+ON!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Toronto Tattoohaus Location"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-black text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
            Ready for Your Next Piece?
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-brand-white mb-6">
            Book Your Consultation
          </h2>
          <div className="gold-divider" />
          <p className="text-white/60 text-lg mb-10 mt-6">
            Whether it&apos;s your first tattoo or your fiftieth, our artists are here to
            collaborate with you on something truly personal. Walk-ins welcome when available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://form.jotform.com/200156118945251"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-10 py-4"
            >
              Book Online
            </a>
            <a
              href="tel:+16473453549"
              className="btn-outline text-base px-10 py-4"
            >
              Call 647-345-3549
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
