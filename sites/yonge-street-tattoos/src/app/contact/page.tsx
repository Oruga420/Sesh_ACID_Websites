import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Yonge Street Tattoos',
  description: 'Visit Yonge Street Tattoos at 602 Yonge St, 3rd Floor, Toronto. Call 416-929-2285 or DM us on Instagram to book.',
};

const HOURS = [
  { day: 'Monday', time: '12:00 PM - 7:00 PM' },
  { day: 'Tuesday', time: '12:00 PM - 7:00 PM' },
  { day: 'Wednesday', time: '12:00 PM - 7:00 PM' },
  { day: 'Thursday', time: '12:00 PM - 9:00 PM' },
  { day: 'Friday', time: '12:00 PM - 9:00 PM' },
  { day: 'Saturday', time: '12:00 PM - 9:00 PM' },
  { day: 'Sunday', time: '12:00 PM - 6:00 PM' },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/5f69731f8fbe6f65c610e1e4/c11de3cb-16f9-482e-ab54-8ed7b1d93ca6/_MG_2373.jpg"
          alt="Yonge Street Tattoos"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-black/70" />
        <div className="relative z-10 text-center">
          <p className="text-brand-gold uppercase tracking-[0.3em] text-sm mb-4">Get in Touch</p>
          <h1 className="font-display text-5xl md:text-7xl">Contact Us</h1>
          <div className="gold-divider" />
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="font-display text-3xl mb-8">Visit the Shop</h2>

            {/* Address */}
            <div className="mb-8">
              <h3 className="text-brand-gold uppercase text-xs tracking-widest font-semibold mb-3">
                Location
              </h3>
              <p className="text-brand-white/80 text-lg">602 Yonge St., 3rd Floor</p>
              <p className="text-brand-white/80 text-lg">Toronto, ON M4Y 1Z3</p>
              <p className="text-brand-gray text-sm mt-1">Yonge &amp; Wellesley area</p>
            </div>

            {/* Phone */}
            <div className="mb-8">
              <h3 className="text-brand-gold uppercase text-xs tracking-widest font-semibold mb-3">
                Phone
              </h3>
              <a
                href="tel:416-929-2285"
                className="text-brand-white/80 text-lg hover:text-brand-gold transition-colors"
              >
                416-929-2285
              </a>
            </div>

            {/* Social */}
            <div className="mb-8">
              <h3 className="text-brand-gold uppercase text-xs tracking-widest font-semibold mb-3">
                Follow &amp; Book
              </h3>
              <a
                href="https://www.instagram.com/yongestreettattoos/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-white/80 text-lg hover:text-brand-gold transition-colors block mb-2"
              >
                Instagram: @yongestreettattoos
              </a>
              <a
                href="https://www.facebook.com/yongesttattoos/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-white/80 text-lg hover:text-brand-gold transition-colors block"
              >
                Facebook: Yonge St. Tattoos
              </a>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-brand-gold uppercase text-xs tracking-widest font-semibold mb-3">
                Hours
              </h3>
              <div className="space-y-2">
                {HOURS.map((h) => (
                  <div key={h.day} className="flex justify-between text-brand-white/80 max-w-xs">
                    <span>{h.day}</span>
                    <span className="text-brand-gray">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Info */}
            <div className="mt-10 p-6 border border-brand-charcoal">
              <h3 className="text-brand-gold font-semibold mb-3">How to Book</h3>
              <ul className="space-y-2 text-brand-white/70 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-1">1.</span>
                  Browse our artists&apos; portfolios and find your match
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-1">2.</span>
                  Contact your chosen artist via their Instagram or email form
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-1">3.</span>
                  Discuss your design, placement, and schedule a consultation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-1">4.</span>
                  A minimum $50 deposit is required for custom designs
                </li>
              </ul>
              <p className="text-brand-gray text-xs mt-4">
                Walk-ins may be available — check individual artist social media for availability.
              </p>
            </div>
          </div>

          {/* Map */}
          <div>
            <div className="h-[500px] w-full mb-8">
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
            </div>

            {/* Studio Photo */}
            <div className="relative h-[300px] overflow-hidden">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5f69731f8fbe6f65c610e1e4/8d5f1910-a098-4816-85a0-f79708f3eaa5/_MG_2354.jpg"
                alt="Yonge Street Tattoos storefront"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-brand-gold text-sm font-semibold">602 Yonge St., 3rd Floor</p>
                <p className="text-brand-white/60 text-xs">Look for us on the 3rd floor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="section-padding bg-brand-dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl text-center mb-12">Before Your Visit</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-brand-charcoal">
              <p className="text-brand-gold text-3xl font-display mb-3">$80</p>
              <p className="text-sm uppercase tracking-wider text-brand-gray mb-2">Shop Minimum</p>
              <p className="text-brand-white/60 text-xs">Covers all supplies and setup</p>
            </div>
            <div className="text-center p-6 border border-brand-charcoal">
              <p className="text-brand-gold text-3xl font-display mb-3">$150+</p>
              <p className="text-sm uppercase tracking-wider text-brand-gray mb-2">Hourly Rate</p>
              <p className="text-brand-white/60 text-xs">Varies by artist and complexity</p>
            </div>
            <div className="text-center p-6 border border-brand-charcoal">
              <p className="text-brand-gold text-3xl font-display mb-3">18+</p>
              <p className="text-sm uppercase tracking-wider text-brand-gray mb-2">Age Requirement</p>
              <p className="text-brand-white/60 text-xs">Valid photo ID required (16+ with parent)</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
