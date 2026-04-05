import SectionDivider from '@/components/SectionDivider'
import { menuCategories, deliveryPartners } from '@/lib/brand-tokens'

export const metadata = {
  title: 'Menu | México Lindo Ajax',
  description: 'Full menu for México Lindo Ajax — birria tacos, fajitas, enchiladas, burritos, and more. Authentic Mexican food in Ajax, ON.',
}

export default function MenuPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-[#2C3A1E] py-12 md:py-16">
        <div className="mx-auto max-w-[1200px] px-4 text-center">
          <p className="font-[var(--font-body-var)] text-xs uppercase tracking-[0.15em] text-[#D4A024] font-bold mb-2">
            Our Menu
          </p>
          <h1 className="font-[var(--font-heading-var)] text-4xl md:text-5xl font-bold text-white mb-4">
            Full Menu
          </h1>
          <p className="text-white/70 text-base max-w-xl mx-auto">
            Authentic Mexican dishes made fresh daily. Dine in, takeout, or order delivery.
          </p>
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            {deliveryPartners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-[#D4A024] text-[#D4A024] text-sm font-bold px-5 py-2 rounded-[4px] hover:bg-[#D4A024] hover:text-[#1E1209] transition-colors"
              >
                Order on {partner.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="bg-[#FFFDF8] py-12 md:py-16">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="space-y-12">
            {menuCategories.map((category) => (
              <div key={category.name}>
                {/* Category Header */}
                <div className="mb-6">
                  <h2 className="font-[var(--font-heading-var)] text-2xl md:text-3xl font-bold text-[#1E1209] mb-1">
                    {category.name}
                  </h2>
                  <div className="w-12 h-0.5 bg-[#D4A024]" />
                </div>

                {/* Menu Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-start justify-between gap-4 bg-white rounded-[6px] p-4 border border-[#E0D0B8] hover:border-[#C0533A]/30 transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="font-[var(--font-heading-var)] text-base font-bold text-[#1E1209] mb-0.5">
                          {item.name}
                        </h3>
                        {item.description && (
                          <p className="text-sm text-[#7A6A5A] leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <span className="font-[var(--font-body-var)] text-sm font-bold text-[#D4A024] whitespace-nowrap shrink-0 mt-0.5">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center bg-[#F7F0E6] rounded-[6px] p-8 border border-[#E0D0B8]">
            <p className="font-[var(--font-body-var)] text-xs uppercase tracking-[0.15em] text-[#D4A024] font-bold mb-2">
              Ready to Order?
            </p>
            <h3 className="font-[var(--font-heading-var)] text-2xl font-bold text-[#1E1209] mb-3">
              Order Online or Visit Us in Ajax
            </h3>
            <SectionDivider />
            <p className="text-[#7A6A5A] mb-6 text-sm max-w-md mx-auto">
              Available for delivery across Ajax and Durham Region via DoorDash, Uber Eats, and SkipTheDishes.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              {deliveryPartners.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#C0533A] text-white font-bold uppercase tracking-[0.08em] text-sm px-6 py-3 rounded-[4px] hover:bg-[#9E3D24] transition-colors"
                >
                  {partner.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
