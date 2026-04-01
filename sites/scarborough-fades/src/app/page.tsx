import Link from "next/link";

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
          <img
            src="https://images-prod-1.getsquire.com/c516a97e-6aa2-4619-ab45-2b68e4117b25_untitled-design-5.png"
            alt="Scarborough Fades barbershop"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-brand-black/80" />
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

      {/* Team */}
      <section className="py-20 bg-brand-black">
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

      {/* Rating */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl font-display font-bold mb-2">5.0 &#9733;</div>
          <p className="text-brand-silver text-sm mb-6">Based on 60+ reviews</p>
          <p className="text-lg max-w-md mx-auto text-brand-silver italic">
            &ldquo;Best barbershop in Scarborough. Dave and the team always come
            through with the cleanest cuts.&rdquo;
          </p>
        </div>
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
