import type { Metadata } from 'next'
import SectionDivider from '@/components/SectionDivider'
import { verbatimReviews } from '@/lib/brand-tokens'

export const metadata: Metadata = {
  title: 'About | Mexico Lindo Express',
  description:
    'Owned and passionately run by a Mexican chef, Mexico Lindo Express brings the authentic taste of Mexico to Scarborough. Our story.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://d2gqo3h0psesgi.cloudfront.net/auto/mexico-lindo-express-ndg78fky-food2.jpg)',
            backgroundColor: '#2A2A2A',
          }}
        />
        <div className="relative z-10 text-center px-4 py-16">
          <p className="font-[var(--font-heading-var)] text-xs uppercase tracking-[0.15em] text-[#D4A843] font-semibold mb-2">
            Mexico Lindo Express
          </p>
          <h1 className="font-[var(--font-heading-var)] text-4xl md:text-5xl font-bold text-white mb-4">
            Our Story
          </h1>
          <div className="flex justify-center py-2">
            <div className="w-[50pt] border-b-2 border-white/30" />
          </div>
        </div>
      </section>

      {/* Story content */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[800px] px-4">
          <p className="font-[var(--font-heading-var)] text-xs uppercase tracking-[0.15em] text-[#D4A843] font-semibold mb-2">
            Authentic Since Day One
          </p>
          <h2 className="font-[var(--font-heading-var)] text-3xl md:text-4xl font-bold text-[#212529] mb-6">
            Real Mexican Flavours in Scarborough
          </h2>

          <div className="space-y-5 text-[#333333] leading-relaxed">
            <p>
              Mexico Lindo Express was born from a simple idea: bring the authentic flavors of Mexico to Scarborough without compromise. Owned and passionately run by a Mexican chef who truly honors the flavors of their homeland, every dish reflects generations of culinary tradition.
            </p>
            <p>
              Located at 2586 Birchmount Road, our small restaurant has become a beloved neighborhood destination. With just three tables for dine-in and a focus on takeout and delivery, we let the food speak for itself. Our customers describe us as a &ldquo;hidden gem&rdquo; — and we take pride in that reputation.
            </p>
            <p>
              From the slow-braised birria that fills our famous tacos to the handmade tortillas, vibrant salsas, and traditional mole sauces, everything is prepared fresh daily using authentic recipes. We believe in generous portions at honest prices — because that&apos;s how food should be shared.
            </p>
            <p>
              Whether you&apos;re craving street tacos for lunch, a hearty burrito for dinner, or tres leches for dessert, Mexico Lindo Express is here to transport your taste buds straight to the streets of Mexico.
            </p>
          </div>

          <SectionDivider />

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#5CB85C]/10 flex items-center justify-center mb-4">
                <span className="text-[#5CB85C] text-xl">&#9733;</span>
              </div>
              <h3 className="font-[var(--font-heading-var)] text-base font-semibold text-[#212529] mb-2">
                Authentic Recipes
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                Traditional Mexican recipes passed down through generations, made the way they should be — no shortcuts, no imitations.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-[#D4A843]/10 flex items-center justify-center mb-4">
                <span className="text-[#D4A843] text-xl">&#9829;</span>
              </div>
              <h3 className="font-[var(--font-heading-var)] text-base font-semibold text-[#212529] mb-2">
                Generous Portions
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                We believe food should be shared generously. Our portions are honest and filling — just ask anyone who&apos;s tried our burritos.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-[#5CB85C]/10 flex items-center justify-center mb-4">
                <span className="text-[#5CB85C] text-xl">&#9734;</span>
              </div>
              <h3 className="font-[var(--font-heading-var)] text-base font-semibold text-[#212529] mb-2">
                Fresh Ingredients
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                Everything is prepared fresh daily — from our handmade tortillas to our vibrant salsas and rich consomme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F5F5F5] py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4">
          <p className="font-[var(--font-heading-var)] text-xs uppercase tracking-[0.15em] text-[#D4A843] font-semibold mb-2 text-center">
            In Their Words
          </p>
          <h2 className="font-[var(--font-heading-var)] text-3xl md:text-4xl font-bold text-[#212529] text-center mb-4">
            What Our Customers Say
          </h2>
          <SectionDivider />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-3xl mx-auto">
            {verbatimReviews.slice(0, 4).map((review, i) => (
              <blockquote
                key={i}
                className="bg-white rounded-[5pt] p-6"
              >
                <div className="text-[#D4A843] text-sm mb-3">
                  {'★'.repeat(5)}
                </div>
                <p className="text-[#333333] text-sm leading-relaxed mb-3 italic">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <cite className="text-[#666666] text-xs not-italic uppercase tracking-wider">
                  &mdash; {review.source}
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
