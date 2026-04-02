import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Chameleon Studio",
  description:
    "Founded in May 2022 by Regine Rose, Chameleon Studio is built on creativity, inclusivity, and precision in Streetsville, Mississauga.",
};

const values = [
  {
    title: "Creativity",
    desc: "Every service is an art form. We approach each client with fresh eyes and creative energy.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "Inclusivity",
    desc: "A welcoming space for everyone. All styles, all people, all forms of self-expression.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Precision",
    desc: "Detail-obsessed artistry. Every line, every cut, every treatment executed with care.",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-gold-500">Chameleon Studio</span>
          </h1>
          <div className="w-20 h-1 bg-gold-500 mx-auto mb-6" />
          <p className="text-gray-400 text-lg">
            Where art meets individuality since May 2022.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Chameleon Studio was founded in May 2022 by{" "}
                  <strong className="text-gold-500">Regine Rose</strong>, a
                  creative entrepreneur with a passion for transformation. What
                  started as a vision to create a space where art and
                  self-expression converge has grown into one of Streetsville&apos;s
                  most vibrant multi-service creative studios.
                </p>
                <p>
                  Located at 248 Queen Street S in the heart of Mississauga&apos;s
                  historic Streetsville village, Chameleon Studio is more than
                  just a tattoo shop. It&apos;s a full-service creative sanctuary
                  where clients can get everything from custom ink to aesthetic
                  treatments under one roof.
                </p>
                <p>
                  Our team of talented tattoo artists, barbers, nail artists,
                  aesthetic specialists, and beauty professionals each bring
                  years of experience and a deep passion for their craft. We
                  believe that everyone deserves to feel confident and beautiful
                  in their own skin.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-dark-900 border border-dark-700 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gold-500 mb-4">
                  Quick Facts
                </h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-gray-500">Founded</dt>
                    <dd className="text-white font-medium">May 2022</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Founder</dt>
                    <dd className="text-white font-medium">Regine Rose</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Location</dt>
                    <dd className="text-white font-medium">
                      Streetsville, Mississauga
                    </dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Services</dt>
                    <dd className="text-white font-medium">8+ categories</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Hours</dt>
                    <dd className="text-white font-medium">
                      Tue-Sat 10-8, Sun 10-6
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-10 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="text-center bg-dark-800 border border-dark-700 rounded-lg p-8 hover:border-gold-500 transition-colors"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold-500/10 flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-gold-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={v.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gold-500 mb-2">
                  {v.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Join Our Team
          </h2>
          <p className="text-gray-400 mb-8">
            We&apos;re always looking for talented professionals to join the
            Chameleon family.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Registered Nurse Injector",
              "Esthetician",
              "Lash Technicians",
              "Body Contouring Specialist",
            ].map((role) => (
              <span
                key={role}
                className="bg-dark-900 border border-gold-500/30 text-gold-500 px-4 py-2 rounded-full text-sm"
              >
                {role}
              </span>
            ))}
          </div>
          <p className="mt-6 text-gray-400 text-sm">
            Interested? Reach out at{" "}
            <a
              href="mailto:contact@chameleonstudio.ca"
              className="text-gold-500 hover:underline"
            >
              contact@chameleonstudio.ca
            </a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Come Visit Us in <span className="text-gold-500">Streetsville</span>
          </h2>
          <p className="text-gray-300 mb-8">
            248 Queen Street S, Mississauga, ON L5M 1L8
          </p>
          <a
            href="https://chameleonstudiosv.as.me"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-500 text-dark-900 px-8 py-4 rounded font-bold text-lg uppercase tracking-wider hover:bg-gold-600 transition-colors"
          >
            Book Your Visit
          </a>
        </div>
      </section>
    </>
  );
}
