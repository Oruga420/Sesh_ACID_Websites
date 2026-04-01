import Link from "next/link";

const STATS = [
  { value: "12,000+", label: "Happy Clients" },
  { value: "14+", label: "Years Experience" },
  { value: "8+", label: "Team Members" },
  { value: "4.5★", label: "Groupon Rating" },
];

const SERVICE_PREVIEW = [
  {
    title: "Hair & Colour",
    description: "Precision cuts, balayage, highlights, fashion colour, and blowouts by expert stylists.",
    price: "From $40",
  },
  {
    title: "Laser Hair Removal",
    description: "Full body, Brazilian, face, and underarm laser treatments with lasting results.",
    price: "From $100",
  },
  {
    title: "Spa & Wellness",
    description: "Relaxation and deep tissue massage, AVEDA facials, and anti-aging treatments.",
    price: "From $85",
  },
  {
    title: "Lash, Brow & Nails",
    description: "Lash lifts, tinting, brow threading, manicures, pedicures, and shellac services.",
    price: "From $12",
  },
];

const GALLERY_IMAGES = [
  { src: "https://www.pureselfsalon.com/images/photo-gallery/gallery-1.webp", alt: "Salon gallery 1" },
  { src: "https://www.pureselfsalon.com/images/photo-gallery/gallery-2.webp", alt: "Salon gallery 2" },
  { src: "https://www.pureselfsalon.com/images/photo-gallery/gallery-3.webp", alt: "Salon gallery 3" },
  { src: "https://www.pureselfsalon.com/images/photo-gallery/gallery-4.webp", alt: "Salon gallery 4" },
  { src: "https://www.pureselfsalon.com/images/photo-gallery/gallery-5.webp", alt: "Salon gallery 5" },
  { src: "https://www.pureselfsalon.com/images/photo-gallery/gallery-6.webp", alt: "Salon gallery 6" },
];

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    text: "Absolutely love Pure Self! The team is incredibly talented and the AVEDA products leave my hair feeling amazing. Best salon in Markham!",
    rating: 5,
  },
  {
    name: "Priya K.",
    text: "I've been coming here for over 3 years for my balayage and I wouldn't go anywhere else. The atmosphere is so relaxing and luxurious.",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    text: "The laser hair removal has been life-changing. Professional, clean, and great results. Highly recommend their full body package!",
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
            src="https://www.pureselfsalon.com/images/home/hair-style.webp"
            alt="Pure Self Salon N Spa - Premium hair styling"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-brand-black" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <p className="text-brand-gold font-body text-sm uppercase tracking-[0.3em] mb-4">
            AVEDA Concept Salon &amp; Spa
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-brand-white mb-6 leading-tight">
            Transform. Relax.
            <br />
            <span className="text-brand-gold">Renew. Enhance.</span>
          </h1>
          <p className="text-white/70 font-body text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Holistic beauty awaits you at Markham&apos;s premier AVEDA salon and spa.
            14+ years of excellence in hair, colour, laser, and wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://pureselfsalon.setmore.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-10 py-4"
            >
              Book Your Appointment
            </a>
            <Link href="/services" className="btn-outline text-base px-10 py-4">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-brand-charcoal/80 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-brand-gold font-heading text-4xl md:text-5xl font-light">
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
            <p className="text-brand-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
              What We Offer
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-brand-white">
              Our Services
            </h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICE_PREVIEW.map((service) => (
              <div
                key={service.title}
                className="bg-brand-dark border border-white/10 p-8 rounded-sm hover:border-brand-gold/30 transition-all duration-300 group"
              >
                <h3 className="font-heading text-2xl text-brand-white mb-3 group-hover:text-brand-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <p className="text-brand-gold font-body text-sm font-semibold">
                  {service.price}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-outline">
              View All Services &amp; Prices
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
              What Our Clients Say
            </h2>
            <div className="gold-divider" />
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
              Visit Our Salon
            </h2>
            <div className="gold-divider" />
            <p className="text-white/50 mt-4">
              3985 Hwy 7 E, Unit #106, Markham, ON L3R 2A2
            </p>
          </div>

          <div className="aspect-video rounded-sm overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.5!2d-79.3!3d43.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d5b8f8b8b8b8%3A0x0!2s3985+Hwy+7+E+Markham+ON!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pure Self Salon N Spa Location"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-black text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
            Ready for a Transformation?
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-brand-white mb-6">
            Book Your Experience Today
          </h2>
          <div className="gold-divider" />
          <p className="text-white/60 text-lg mb-10 mt-6">
            Whether it&apos;s a fresh cut, a luxurious spa treatment, or laser hair removal,
            our expert team is ready to help you look and feel your best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://pureselfsalon.setmore.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-10 py-4"
            >
              Book Online
            </a>
            <a
              href="tel:+19056047873"
              className="btn-outline text-base px-10 py-4"
            >
              Call (905) 604-7873
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
