import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Toronto Tattoohaus",
  description:
    "Learn about Toronto Tattoohaus, a proudly inclusive and fully accessible tattoo studio on St. Clair Ave W. Community-focused, accessible, and welcoming to all.",
};

const VALUES = [
  {
    title: "Inclusive & Accessible",
    description:
      "Our main-floor studio is fully wheelchair accessible. We welcome everyone regardless of background, identity, or experience level. Your comfort is our priority.",
  },
  {
    title: "Collaborative Process",
    description:
      "Every tattoo starts with a conversation. Our artists work closely with you to refine your vision into a design that is uniquely yours.",
  },
  {
    title: "Safety & Sterilization",
    description:
      "We maintain the highest standards of hygiene and sterilization. Single-use needles, hospital-grade autoclaves, and a spotless studio environment.",
  },
  {
    title: "Community First",
    description:
      "From our community fridge donations to flash days that make tattoos accessible, we believe in giving back to the neighbourhood that supports us.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="section-padding bg-brand-black text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-brand-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
            Our Story
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-light text-brand-white">
            About Tattoohaus
          </h1>
          <div className="gold-divider" />
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-brand-dark">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-brand-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
                St. Clair West, Toronto
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-brand-white mb-6">
                A Space for Everyone
              </h2>
              <div className="space-y-4 text-white/60 text-sm leading-relaxed">
                <p>
                  Toronto Tattoohaus is a proudly inclusive and fully accessible tattoo studio
                  located at 873 St. Clair Ave W. Founded by Kate Doucette, the studio was built
                  on a simple principle: great tattoos should be available to everyone in a
                  space where they feel safe and welcome.
                </p>
                <p>
                  Our team of resident and independent artists specializes in fine line,
                  illustrative, black &amp; grey, and fully custom tattoo designs. Every piece
                  begins with a collaborative design process, ensuring the final result is
                  something uniquely yours.
                </p>
                <p>
                  With a 4.9-star rating across 139+ reviews, our clients consistently praise
                  the welcoming atmosphere, exceptional artistry, and meticulous attention to
                  safety and sterilization that define every visit to Tattoohaus.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="aspect-[4/3] overflow-hidden  border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.squarespace-cdn.com/content/v1/645a279bf6479109759c303a/f338e5af-c0ae-49c9-abad-7198fb95839a/A51A9994.jpg"
                  alt="Toronto Tattoohaus studio interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-4 p-6 bg-brand-charcoal border border-white/10 ">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.squarespace-cdn.com/content/v1/645a279bf6479109759c303a/915953c5-12a7-41c1-8914-fa6aca4e716b/smilelogocropped.png"
                  alt="Community Fridge Program"
                  className="h-16 w-auto flex-shrink-0"
                />
                <div>
                  <p className="text-brand-green-light font-heading text-lg">Community Fridge</p>
                  <p className="text-white/50 text-xs mt-1">
                    We maintain a non-perishable food donation box in-store supporting our local Community Fridge program.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section className="section-padding bg-brand-black">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-brand-green-light font-body text-sm uppercase tracking-[0.3em] mb-3">
            Accessibility
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-light text-brand-white mb-6">
            Fully Accessible Studio
          </h2>
          <div className="gold-divider" />
          <div className="max-w-3xl mx-auto mt-8">
            <p className="text-white/60 text-sm leading-relaxed">
              Toronto Tattoohaus is located on the main floor with full wheelchair accessibility.
              Our studio was designed from the ground up to be welcoming and comfortable for
              clients of all abilities. If you have specific accessibility needs, please let us
              know when booking and we will ensure your experience is as comfortable as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-brand-charcoal">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
              What Drives Us
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-brand-white">
              Our Values
            </h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="bg-brand-dark border border-white/10 p-8 "
              >
                <h3 className="font-heading text-2xl text-brand-gold mb-3">{value.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-black text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-light text-brand-white mb-6">
            Ready to Visit?
          </h2>
          <div className="gold-divider" />
          <p className="text-white/60 text-lg mb-10 mt-6">
            Whether it&apos;s your first tattoo or your fiftieth, our studio is a welcoming space
            for every(body). Walk-ins welcome when available.
          </p>
          <a
            href="https://form.jotform.com/200156118945251"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book a Tattoo
          </a>
        </div>
      </section>
    </>
  );
}
