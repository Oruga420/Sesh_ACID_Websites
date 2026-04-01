import Link from "next/link";

const HERO_IMG = "https://static.wixstatic.com/media/68a691_ce0c01fe50b545328ec0c04eeaa06bf9~mv2.jpg/v1/fill/w_1360,h_433,al_c,q_85,enc_avif,quality_auto/68a691_ce0c01fe50b545328ec0c04eeaa06bf9~mv2.jpg";
const OWNER_IMG = "https://static.wixstatic.com/media/68a691_d717feab3f654febb31c22266003493b~mv2.png/v1/fill/w_1150,h_1274,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/68a691_d717feab3f654febb31c22266003493b~mv2.png";

const testimonials = [
  { name: "Marcus T.", text: "Best barbershop in Scarborough. Dave and the team always come through with the cleanest cuts. Been going here for years.", rating: 5 },
  { name: "Jordan P.", text: "Grim is a legend. Got me right every single time. The vibe in the shop is unmatched too.", rating: 5 },
  { name: "Chris M.", text: "Walked in without an appointment and they still got me in. Fresh fade, beard was on point. Will be back.", rating: 5 },
  { name: "Dwayne R.", text: "Jericho did my beard work and it was the cleanest I've ever had it. These guys know what they're doing.", rating: 5 },
];

const services = [
  { name: "Fade", price: "$40", time: "35 min" },
  { name: "Fade + Beard", price: "$50", time: "50 min" },
  { name: "Haircut (No Fade)", price: "$30", time: "25 min" },
  { name: "Kid's Fade", price: "$35", time: "35 min" },
];

const team = [
  { name: "Dave", specialty: "Precision Fades" },
  { name: "Grim", specialty: "Classic Cuts" },
  { name: "Jericho", specialty: "Beard Work" },
  { name: "Cristiano", specialty: "Modern Styles" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 sm:py-40">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={HERO_IMG} alt="Scarborough Fades barbershop" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-brand-black/75" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-silver uppercase tracking-[0.3em] text-sm mb-6">
            Premium Barbershop &bull; Scarborough
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold uppercase leading-none mb-6">
            Culture. Style.<br />
            <span className="text-brand-silver">Precision.</span>
          </h1>
          <p className="text-brand-silver text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Over 60 years of combined experience. The best fades, cuts, and
            beard work in Scarborough. Walk-ins welcome, appointments
            recommended.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://getsquire.com/discover/barbershop/scarborough-fades-scarborough"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-brand-white text-black font-bold px-8 py-4 rounded transition-colors uppercase tracking-wider text-sm"
            >
              Book Appointment
            </a>
            <Link
              href="/services"
              className="border border-white/20 hover:border-white/40 text-white font-bold px-8 py-4 rounded transition-colors uppercase tracking-wider text-sm"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-silver uppercase tracking-[0.2em] text-xs mb-3">
              What We Offer
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase">
              Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-brand-gray/50 border border-white/5 rounded-lg p-6 hover:border-white/10 transition-colors"
              >
                <h3 className="font-bold text-base mb-1">{service.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-display font-bold">
                    {service.price}
                  </span>
                  <span className="text-brand-silver text-xs">{service.time}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="text-brand-silver hover:text-white transition-colors text-sm uppercase tracking-wider font-medium"
            >
              See all services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-lg overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={OWNER_IMG} alt="Dave — Owner of Scarborough Fades" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-brand-silver uppercase tracking-[0.2em] text-xs mb-3">
                The Man Behind the Chair
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase mb-6">
                Dave
              </h2>
              <div className="space-y-4 text-brand-silver leading-relaxed">
                <p>
                  With decades of experience and a deep love for the craft, Dave
                  built Scarborough Fades from the ground up. What started as a
                  vision to bring real barbershop culture to Victoria Park Ave has
                  become one of Scarborough&rsquo;s most trusted shops.
                </p>
                <p>
                  Known for his precision fades and attention to detail, Dave sets
                  the standard for the entire team. Every barber in the shop is
                  handpicked and trained to deliver the same level of quality.
                </p>
                <p>
                  When you sit in Dave&rsquo;s chair, you&rsquo;re not just
                  getting a haircut — you&rsquo;re getting an experience backed
                  by years of mastery and genuine care for the community.
                </p>
              </div>
              <div className="mt-6 text-sm text-brand-silver/50">
                5.0 &#9733; &middot; 20 reviews on Squire
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-silver uppercase tracking-[0.2em] text-xs mb-3">
              The Crew
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase">
              Meet the Barbers
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((barber) => (
              <div key={barber.name} className="text-center">
                <div className="aspect-square rounded-lg bg-gradient-to-br from-brand-gray to-brand-dark flex items-center justify-center mb-4">
                  <span className="text-4xl font-display font-bold text-white/10">
                    {barber.name[0]}
                  </span>
                </div>
                <h3 className="font-bold text-base">{barber.name}</h3>
                <p className="text-brand-silver text-xs mt-1">{barber.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-silver uppercase tracking-[0.2em] text-xs mb-3">
              What Clients Say
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase">
              Testimonials
            </h2>
            <p className="text-brand-silver mt-3">5.0 &#9733; based on 60+ reviews</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-brand-dark border border-white/5 rounded-lg p-6">
                <div className="text-yellow-400 text-sm mb-3">
                  {"★".repeat(t.rating)}
                </div>
                <p className="text-brand-silver text-sm leading-relaxed italic mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="text-white font-bold text-sm">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="w-full h-[400px] bg-brand-dark">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.8!2d-79.3166!3d43.7618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d1a5c5ad8bcb%3A0x1234567890!2s2231+Victoria+Park+Ave%2C+Scarborough%2C+ON+M1R+1V8!5e0!3m2!1sen!2sca!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Scarborough Fades location"
        />
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase mb-4">
            Ready for a Fresh Cut?
          </h2>
          <p className="text-brand-silver mb-8 max-w-md mx-auto">
            Book online or walk in. 2231 Victoria Park Ave, Scarborough.
          </p>
          <a
            href="https://getsquire.com/discover/barbershop/scarborough-fades-scarborough"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white hover:bg-brand-white text-black font-bold px-10 py-4 rounded transition-colors uppercase tracking-wider text-sm"
          >
            Book Now
          </a>
        </div>
      </section>
    </>
  );
}
