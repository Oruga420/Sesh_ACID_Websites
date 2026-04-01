import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Scarborough Fades",
  description: "Meet the team behind Scarborough Fades — over 60 years of combined barbering experience.",
};

const team = [
  { name: "Dave", role: "Owner / Barber", reviews: 20 },
  { name: "Grim", role: "Senior Barber", reviews: 13 },
  { name: "Jericho", role: "Barber", reviews: 4 },
  { name: "Cristiano", role: "Barber", reviews: null },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-silver uppercase tracking-[0.2em] text-xs mb-3">
            Our Story
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold uppercase mb-4">
            About Us
          </h1>
          <p className="text-brand-silver max-w-2xl mx-auto leading-relaxed">
            Scarborough Fades is a staple in the community as a unique
            barbershop, combining the culture and style of Scarborough. With our
            team of barbers we bring over 60 years of combined experience to
            every cut.
          </p>
        </div>
      </section>

      <section className="py-16 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images-prod-1.getsquire.com/c516a97e-6aa2-4619-ab45-2b68e4117b25_untitled-design-5.png"
                alt="Inside Scarborough Fades barbershop"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold uppercase mb-6">
                More Than a Barbershop
              </h2>
              <div className="space-y-4 text-brand-silver leading-relaxed">
                <p>
                  We are not just about haircuts — we are about culture,
                  community, and confidence. When you sit in our chair, you are
                  getting more than a fresh fade. You are getting an experience.
                </p>
                <p>
                  Our barbers are passionate about their craft. From precision
                  fades to classic cuts and detailed beard work, every service
                  is delivered with skill and attention to detail.
                </p>
                <p>
                  Located on Victoria Park Ave in the heart of Scarborough, we
                  welcome walk-ins and appointments alike. Come through and see
                  why our clients keep coming back.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-silver uppercase tracking-[0.2em] text-xs mb-3">
              The Crew
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase">
              Meet the Team
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((barber) => (
              <div key={barber.name} className="text-center">
                <div className="aspect-square rounded-lg bg-gradient-to-br from-brand-gray to-brand-dark flex items-center justify-center mb-4">
                  <span className="text-5xl font-display font-bold text-white/10">
                    {barber.name[0]}
                  </span>
                </div>
                <h3 className="font-bold text-base">{barber.name}</h3>
                <p className="text-brand-silver text-xs mt-1">{barber.role}</p>
                {barber.reviews && (
                  <p className="text-brand-silver/50 text-xs mt-1">
                    5.0 &#9733; &middot; {barber.reviews} reviews
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
