import { BRAND } from '@/lib/brand-tokens';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-heroBg to-brand-primary py-20">
        <div className="max-w-content mx-auto px-6 text-center">
          <p className="font-heading text-xs uppercase tracking-[0.3em] text-white/60 mb-4">About Us</p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-4">
            Exceptional Services From Exceptional People
          </h1>
          <p className="text-white/80 font-body max-w-2xl mx-auto text-lg">
            For over 15 years, Executive Real Estate Services has helped families across the Greater Toronto Area find their perfect home with integrity, care, and unmatched market expertise.
          </p>
        </div>
      </section>

      {/* Harmahinder Feature */}
      <section className="py-20 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="relative w-72 h-80 lg:w-80 lg:h-96">
                <div className="absolute inset-0 rounded-card bg-brand-primary/10" />
                <img
                  src={BRAND.images.hero}
                  alt="Harmahinder Gaind — Broker of Record and Owner"
                  className="relative w-full h-full object-contain object-bottom"
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1">
              <p className="font-heading text-xs uppercase tracking-[0.3em] text-brand-primary mb-3">Meet the Founder</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-textHeading mb-2">
                Harmahinder Gaind
              </h2>
              <p className="text-brand-primary font-heading font-semibold mb-6">Broker of Record / Owner</p>
              <p className="text-brand-textBody font-body leading-relaxed mb-4">
                With over 15 years of experience navigating the GTA real estate market, Harmahinder Gaind has built Executive Real Estate Services on a foundation of trust, transparency, and genuine care for every client.
              </p>
              <p className="text-brand-textBody font-body leading-relaxed mb-4">
                Known for working from the heart, Harmahinder treats every client like family — whether it is a first-time buyer searching for their dream home or a seasoned investor looking for the next opportunity. His team has earned a 4.9-star Google rating across 107+ reviews, a testament to the level of service and dedication they bring to every transaction.
              </p>
              <p className="text-brand-textBody font-body leading-relaxed mb-8">
                Under his leadership, Team Executive has grown into one of Brampton&apos;s most trusted brokerages, serving clients across Mississauga, Toronto, Oakville, Hamilton, and Cambridge.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`tel:${BRAND.business.phone}`}
                  className="px-6 py-3 bg-brand-primary text-white font-heading font-semibold text-sm rounded-btn hover:bg-brand-heroBg transition-all duration-300"
                >
                  Call Harmahinder
                </a>
                <a
                  href={`https://wa.me/${BRAND.business.whatsapp.replace(/\+/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-brand-primary text-brand-primary font-heading font-semibold text-sm rounded-btn hover:bg-brand-primary hover:text-white transition-all duration-300"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-brand-bgAlt">
        <div className="max-w-content mx-auto px-6">
          <p className="font-heading text-xs uppercase tracking-[0.3em] text-brand-primary mb-3 text-center">Our Values</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-textHeading text-center mb-4">
            Agents of Goodness
          </h2>
          <p className="text-brand-textMuted text-center max-w-2xl mx-auto mb-14 font-body">
            Our standards define who we are. Every interaction, every transaction, every relationship is guided by these principles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRAND.coreValues.map((value) => (
              <div key={value.name} className="bg-white p-8 rounded-card border border-brand-border">
                <h3 className="font-heading text-xl font-bold text-brand-textHeading mb-2">{value.name}</h3>
                <p className="text-brand-textBody font-body text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-content mx-auto px-6">
          <p className="font-heading text-xs uppercase tracking-[0.3em] text-brand-primary mb-3 text-center">Our Team</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-textHeading text-center mb-14">
            Meet Team Executive
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {BRAND.people.map((person) => (
              <div key={person.name} className="text-center">
                {person.profilePhotoUrl ? (
                  <img
                    src={person.profilePhotoUrl}
                    alt={person.name}
                    className="w-24 h-24 rounded-full object-cover object-top mx-auto mb-3 border-2 border-brand-border"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full mx-auto mb-3 bg-brand-primary flex items-center justify-center text-white font-heading font-bold text-xl">
                    {person.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
                <h3 className="font-heading text-sm font-bold text-brand-textHeading">{person.name}</h3>
                <p className="text-xs text-brand-textMuted font-body">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-brand-primary">
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-8">
            Serving the Greater Toronto Area
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {BRAND.business.serviceAreas.map((area) => (
              <span key={area} className="px-5 py-2 bg-white/10 text-white font-heading font-semibold text-sm rounded-full border border-white/20">
                {area}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-brand-primary font-heading font-bold text-sm rounded-btn hover:bg-gray-100 transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
