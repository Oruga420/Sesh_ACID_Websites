import Link from "next/link";

const STATS = [
  { value: "25+", label: "Years Experience" },
  { value: "4.6", label: "Average Rating" },
  { value: "132+", label: "Reviews" },
  { value: "96%", label: "Recommend" },
];

const SERVICE_PREVIEW = [
  {
    title: "Custom Tattoos",
    description: "Colour work, black and grey, fine line, lettering, and colour realism by experienced artists.",
    icon: "\u2726",
  },
  {
    title: "Piercings",
    description: "Ear, facial, and body piercings performed safely with premium jewelry and aftercare guidance.",
    icon: "\u2666",
  },
  {
    title: "Colour Realism",
    description: "Hyper-realistic colour tattoos that bring your vision to life with vivid detail and depth.",
    icon: "\u2605",
  },
  {
    title: "Free Consultations",
    description: "Walk in or book a free consultation. We create custom mockups before any ink touches skin.",
    icon: "\u2714",
  },
];

const GALLERY_IMAGES = [
  { src: "https://images.squarespace-cdn.com/content/v1/5b43b4c1697a982c7acc411a/1605055706190-QOGFWM7BHEBZA9MHP1W3/DSC08691.JPG", alt: "Tattoo work sample 1" },
  { src: "https://images.squarespace-cdn.com/content/v1/5b43b4c1697a982c7acc411a/1605054980932-YE3FW5UWDX8ET59C5G9F/DSC08682.JPG", alt: "Tattoo work sample 2" },
  { src: "https://images.squarespace-cdn.com/content/v1/5b43b4c1697a982c7acc411a/1537398882967-D5MBQWTPZP8Z2OSS9RSI/2018-05-10+20.30.54-1.jpg", alt: "Tattoo work sample 3" },
  { src: "https://images.squarespace-cdn.com/content/v1/5b43b4c1697a982c7acc411a/1537399104359-CNP31L20LYUKEUE1YDKN/2016-11-10+18.19.40.jpg", alt: "Tattoo work sample 4" },
  { src: "https://images.squarespace-cdn.com/content/v1/5b43b4c1697a982c7acc411a/1537399176684-A0O2G0YKLZACM5AE7ANX/2017-04-05+19.17.50-2.jpg", alt: "Tattoo work sample 5" },
  { src: "https://images.squarespace-cdn.com/content/v1/5b43b4c1697a982c7acc411a/1537408506187-73PKCGG61JGUPHJQJI9E/2018-03-06+19.00.16-2.jpg", alt: "Tattoo work sample 6" },
];

const TESTIMONIALS = [
  {
    name: "First-Time Client",
    text: "The piercer was so kind and explained each step of the process. Made me feel comfortable as it was my first time getting a piercing.",
    rating: 5,
  },
  {
    name: "Returning Customer",
    text: "Paid attention to detail, did templates exactly as I wanted them and was very pleasant. Cleanliness is 100%.",
    rating: 5,
  },
  {
    name: "Satisfied Client",
    text: "Excellent consumer service, pricing, cleanliness, and adherence to safety requirements. They provide an aftercare pamphlet before you go.",
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
            src="https://images.squarespace-cdn.com/content/v1/5b43b4c1697a982c7acc411a/1605057498811-TRGTBP8BD8X70R9U8AU9/processs.jpg"
            alt="Gwan Soon Lee Tattoos - Artist at work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-brand-black" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <p className="text-brand-green font-body text-sm uppercase tracking-[0.3em] mb-4">
            Est. 2006 &bull; Mississauga
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-brand-white mb-6 leading-tight">
            Your Vision.
            <br />
            <span className="text-brand-gold">Our Artistry.</span>
          </h1>
          <p className="text-white/70 font-body text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Custom tattoos and piercings in the heart of Mississauga, near Square One.
            25+ years of experience in fine line, black &amp; grey, and colour realism.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://gwansoonleetattoo.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-10 py-4"
            >
              Book Free Consultation
            </a>
            <Link href="/services" className="btn-outline text-base px-10 py-4">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-brand-charcoal/80 border-y border-brand-green/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-brand-green font-heading text-4xl md:text-5xl font-light">
                  {stat.value}
                </p>
                <p className="text-white/50 font-body text-sm uppercase tracking-wider mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-green font-body text-sm uppercase tracking-[0.3em] mb-3">
              What We Do
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-brand-white">
              Our Services
            </h2>
            <div className="green-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICE_PREVIEW.map((service) => (
              <div
                key={service.title}
                className="bg-brand-dark border border-white/10 p-8 rounded-sm hover:border-brand-green/30 transition-all duration-300 group"
              >
                <span className="text-brand-gold text-3xl block mb-4">{service.icon}</span>
                <h3 className="font-heading text-2xl text-brand-white mb-3 group-hover:text-brand-green transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-outline-green">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-brand-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
              Our Work
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-brand-white">
              Gallery
            </h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((image) => (
              <div key={image.src} className="aspect-square overflow-hidden rounded-sm group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.instagram.com/gwansoontattoos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-green hover:text-brand-green-light text-sm font-body uppercase tracking-wider transition-colors"
            >
              See More on Instagram &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-green font-body text-sm uppercase tracking-[0.3em] mb-3">
              Client Reviews
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-brand-white">
              What Our Clients Say
            </h2>
            <div className="green-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-brand-dark border border-white/10 p-8 rounded-sm"
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
                <p className="text-brand-green font-body text-sm font-semibold">
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
            <p className="text-brand-green font-body text-sm uppercase tracking-[0.3em] mb-3">
              Find Us
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-brand-white">
              Visit Our Studio
            </h2>
            <div className="green-divider" />
            <p className="text-white/50 mt-4">
              220 Burnhamthorpe Rd W, Unit 102, Mississauga, ON L5B 4N4
            </p>
          </div>

          <div className="aspect-video rounded-sm overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.2!2d-79.6428!3d43.5928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b47129fd4f87d%3A0x8a5a3e0e3c8d9b0e!2s220+Burnhamthorpe+Rd+W%2C+Mississauga%2C+ON+L5B+4N4!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gwan Soon Lee Tattoos Location"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-black text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
            Ready for New Ink?
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-brand-white mb-6">
            Book Your Consultation Today
          </h2>
          <div className="gold-divider" />
          <p className="text-white/60 text-lg mb-10 mt-6">
            Whether it&apos;s your first tattoo or your twentieth, our experienced artists
            will work with you to create something truly unique. Free consultations with deposit to book.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://gwansoonleetattoo.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-10 py-4"
            >
              Book Online
            </a>
            <a
              href="tel:+14169099055"
              className="btn-outline text-base px-10 py-4"
            >
              Call (416) 909-9055
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
