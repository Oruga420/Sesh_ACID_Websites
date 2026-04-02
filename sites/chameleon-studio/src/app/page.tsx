import Link from "next/link";
import Testimonials from "@/components/Testimonials";

const services = [
  {
    title: "Custom Tattoos",
    desc: "Modern, script, traditional, blackwork, anime, Chicano, fineline & oriental styles.",
    icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
  },
  {
    title: "Barbering",
    desc: "Expert cuts, fades, beard care, and premium grooming treatments.",
    icon: "M14.121 14.121L19 19m-7-7l7-7m-2.5 2.5L19 5m-9.5 9.5L7 17m0 0l-2 2",
  },
  {
    title: "Piercings",
    desc: "Professional ear, nose, navel & eyebrow piercings with aftercare guidance.",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  },
  {
    title: "Nail Artistry",
    desc: "Acrylic, gel, gel-X designs for all — including men's manicures.",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  },
  {
    title: "Aesthetic Injections",
    desc: "Botox, fillers, PRP/PRF, and fat dissolving by licensed nurse injectors.",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
  {
    title: "Body Contouring",
    desc: "Body sculpting, lymphatic massage, and post-op recovery treatments.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-dark-900">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block mb-6 px-4 py-1 border border-gold-500/30 rounded-full">
            <span className="text-gold-500 text-sm tracking-widest uppercase">
              Est. May 2022 &bull; Streetsville, Mississauga
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Where Art Meets{" "}
            <span className="text-gold-500">Individuality</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Custom tattoos, barbering, piercings, nail artistry, and holistic
            body treatments — built on creativity, inclusivity, and precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chameleonstudiosv.as.me"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-500 text-dark-900 px-8 py-4 rounded font-bold text-lg uppercase tracking-wider hover:bg-gold-600 transition-colors"
            >
              Book Your Appointment
            </a>
            <Link
              href="/services"
              className="border-2 border-gold-500 text-gold-500 px-8 py-4 rounded font-bold text-lg uppercase tracking-wider hover:bg-gold-500 hover:text-dark-900 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto mb-4" />
            <p className="text-gray-400 max-w-2xl mx-auto">
              From custom ink to holistic beauty — express your true self at
              Chameleon Studio.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-dark-800 border border-dark-700 rounded-lg p-6 hover:border-gold-500 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
                  <svg
                    className="w-6 h-6 text-gold-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={s.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="text-gold-500 hover:text-gold-400 font-semibold tracking-wide uppercase text-sm"
            >
              View Full Menu & Pricing &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Founded by <span className="text-gold-500">Regine Rose</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Since May 2022, Chameleon Studio has been a creative sanctuary in
                the heart of Streetsville, Mississauga. Built on the pillars of
                creativity, inclusivity, and precision, we help every client
                express their true self.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our team of talented tattoo artists, barbers, nail artists,
                aesthetic specialists, and beauty professionals each bring years
                of experience and a deep passion for their craft.
              </p>
              <Link
                href="/about"
                className="text-gold-500 hover:text-gold-400 font-semibold tracking-wide uppercase text-sm"
              >
                Read Our Story &rarr;
              </Link>
            </div>
            <div className="bg-dark-700 rounded-lg p-8 border border-dark-700">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-gold-500">2022</p>
                  <p className="text-gray-400 text-sm mt-1">Founded</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gold-500">8+</p>
                  <p className="text-gray-400 text-sm mt-1">Services</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gold-500">6</p>
                  <p className="text-gray-400 text-sm mt-1">Days a Week</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gold-500">5★</p>
                  <p className="text-gray-400 text-sm mt-1">Google Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Express Your <span className="text-gold-500">True Self</span>?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Walk-ins welcome when availability exists. For guaranteed
            appointments, book online today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chameleonstudiosv.as.me"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-500 text-dark-900 px-8 py-4 rounded font-bold uppercase tracking-wider hover:bg-gold-600 transition-colors"
            >
              Book Now
            </a>
            <a
              href="tel:+16473288992"
              className="border-2 border-gold-500 text-gold-500 px-8 py-4 rounded font-bold uppercase tracking-wider hover:bg-gold-500 hover:text-dark-900 transition-colors"
            >
              Call (647) 328-8992
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
