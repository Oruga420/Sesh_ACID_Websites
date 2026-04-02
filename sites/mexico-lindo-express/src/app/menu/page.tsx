import type { Metadata } from 'next'
import SectionDivider from '@/components/SectionDivider'

export const metadata: Metadata = {
  title: 'Menu | Mexico Lindo Express',
  description:
    'Full menu of authentic Mexican street food — birria tacos, burritos, enchiladas, fajitas, pozole, and more. Order online or visit us in Scarborough.',
}

/* ── Menu data organized by category from brand bible ── */

const menuData: ReadonlyArray<{
  category: string
  items: ReadonlyArray<{ name: string; price: string; description?: string }>
}> = [
  {
    category: 'Mexican Street Tacos',
    items: [
      { name: 'Tacos de Birria (5)', price: '$19.00 - $24.95', description: 'Traditional braised beef tacos, topped with cilantro, onion, cheese, lime, salsa and consomme' },
      { name: 'Tacos de Carne Asada (5)', price: '$19.00 - $23.95', description: 'Perfectly seasoned and grilled steak on soft corn tortillas' },
      { name: 'Tacos al Pastor (5)', price: '$19.00 - $23.95', description: 'Marinated pork with pineapple, cilantro and onion' },
      { name: 'Tacos de Cochinita Pibil (5)', price: '$19.00 - $23.95', description: 'Slow-roasted pork in achiote and citrus marinade' },
      { name: 'Tacos Campechanos (5)', price: '$19.00 - $23.95', description: 'Mixed meat tacos with steak, chorizo, cilantro and onion' },
    ],
  },
  {
    category: 'Antojitos & Handhelds',
    items: [
      { name: 'Quesadilla', price: '$14.95 - $17.95', description: 'Flour tortilla with melted cheese and your choice of protein' },
      { name: 'Flautas (4)', price: '$16.95', description: 'Crispy rolled tortillas with chicken, topped with cream, lettuce and salsa' },
      { name: 'Nachos', price: '$14.95 - $18.95', description: 'Tortilla chips loaded with cheese, beans, jalapenos, sour cream and guacamole' },
      { name: 'Elote (Mexican Street Corn)', price: '$6.95', description: 'Grilled corn with mayo, cotija cheese, chili powder and lime' },
    ],
  },
  {
    category: 'Sopa y Ensaladas',
    items: [
      { name: 'Pozole', price: '$17.95', description: 'Traditional Mexican hominy soup with pork, cabbage, radish and oregano' },
      { name: 'Tortilla Soup', price: '$12.95', description: 'Classic chicken broth with tortilla strips, avocado and cheese' },
      { name: 'Ensalada Mexicana', price: '$12.95', description: 'Fresh mixed greens with grilled chicken, avocado, corn and chipotle dressing' },
    ],
  },
  {
    category: 'Chilaquiles',
    items: [
      { name: 'Chilaquiles Verdes', price: '$19.50', description: 'Crispy tortilla chips in green tomatillo salsa with cream, cheese and your choice of protein' },
      { name: 'Chilaquiles Rojos', price: '$19.50', description: 'Crispy tortilla chips in red salsa with cream, cheese and your choice of protein' },
    ],
  },
  {
    category: 'Burritos',
    items: [
      { name: 'Burrito de Carne Asada', price: '$16.95 - $19.95', description: 'Grilled steak with rice, beans, cheese, sour cream, guacamole and salsa' },
      { name: 'Burrito de Pollo', price: '$15.95 - $18.95', description: 'Grilled chicken with rice, beans, cheese, sour cream and salsa' },
      { name: 'Burrito de Birria', price: '$16.95 - $19.95', description: 'Braised beef with rice, beans, cheese and consomme on the side' },
    ],
  },
  {
    category: 'Enchiladas',
    items: [
      { name: 'Enchiladas Suizas (3)', price: '$16.95', description: 'Chicken enchiladas in creamy green tomatillo sauce with melted cheese' },
      { name: 'Enchiladas Rojas (3)', price: '$16.95', description: 'Chicken enchiladas in red chili sauce with cheese and sour cream' },
      { name: 'Enchiladas de Mole (3)', price: '$17.95', description: 'Chicken enchiladas in traditional mole sauce' },
    ],
  },
  {
    category: 'Platillos',
    items: [
      { name: 'Mexican Combo', price: '$16.95 - $21.95', description: 'Chicken enchilada in ranchero sauce with melted cheese, paired with beef chimichanga' },
      { name: 'Chimichanga', price: '$16.95', description: 'Deep-fried burrito with your choice of protein, topped with cheese and sour cream' },
      { name: 'Tamales (3)', price: '$14.95', description: 'Traditional corn masa filled with pork or chicken, steamed in corn husks' },
    ],
  },
  {
    category: 'Sizzling Fajitas',
    items: [
      { name: 'Chicken Fajitas', price: '$19.95', description: 'Grilled chicken with peppers and onions, served with rice, beans, tortillas and toppings' },
      { name: 'Steak Fajitas', price: '$21.95', description: 'Grilled steak with peppers and onions, served with rice, beans, tortillas and toppings' },
      { name: 'Shrimp Fajitas', price: '$22.95', description: 'Grilled shrimp with peppers and onions, served with rice, beans, tortillas and toppings' },
    ],
  },
  {
    category: 'Postres',
    items: [
      { name: 'Pastel de Tres Leches', price: '$11.95', description: 'Customer-favorite three milk cake' },
      { name: 'Chocoflan', price: '$11.95', description: 'Chocolate cake layered with creamy flan' },
      { name: 'Churros (6)', price: '$9.95', description: 'Crispy fried dough dusted with cinnamon sugar, served with chocolate sauce' },
    ],
  },
  {
    category: 'Aguas Frescas',
    items: [
      { name: 'Horchata', price: '$4.95', description: 'Traditional rice water with cinnamon and vanilla' },
      { name: 'Jamaica', price: '$4.95', description: 'Hibiscus flower water' },
      { name: 'Tamarindo', price: '$4.95', description: 'Tamarind water with a hint of lime' },
    ],
  },
  {
    category: 'Family Fiesta Deals',
    items: [
      { name: 'Taco Tray (30 tacos)', price: '$150.00', description: 'Perfect for parties — 30 tacos with your choice of meats, toppings and salsas' },
      { name: 'Nachos Platter', price: '$75.00', description: 'Large party-size nachos loaded with toppings' },
    ],
  },
]

export default function MenuPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="bg-[#2A2A2A] py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4 text-center">
          <p className="font-[var(--font-heading-var)] text-xs uppercase tracking-[0.15em] text-[#D4A843] font-semibold mb-2">
            Mexico Lindo Express
          </p>
          <h1 className="font-[var(--font-heading-var)] text-4xl md:text-5xl font-bold text-white mb-4">
            Our Menu
          </h1>
          <div className="flex justify-center py-4">
            <div className="w-[50pt] border-b-2 border-white/30" />
          </div>
          <p className="text-white/70 max-w-xl mx-auto">
            Authentic Mexican street food made fresh daily. All prices subject to change.
          </p>
        </div>
      </section>

      {/* Menu categories */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[1200px] px-4">
          {/* Category quick nav */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {menuData.map((cat) => (
              <a
                key={cat.category}
                href={`#${cat.category.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, '')}`}
                className="text-xs font-semibold uppercase tracking-[0.05em] text-[#212529] border border-[#e0e0e0] px-3 py-1.5 rounded-[4px] hover:bg-[#5CB85C] hover:text-white hover:border-[#5CB85C] transition-colors"
              >
                {cat.category}
              </a>
            ))}
          </div>

          {/* Categories */}
          <div className="space-y-12">
            {menuData.map((cat, catIdx) => (
              <div
                key={cat.category}
                id={cat.category.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, '')}
              >
                <div className={catIdx % 2 === 0 ? '' : 'bg-[#F5F5F5] -mx-4 px-4 py-8 rounded-[5pt]'}>
                  <h2 className="font-[var(--font-heading-var)] text-2xl md:text-3xl font-bold text-[#212529] mb-2">
                    {cat.category}
                  </h2>
                  <SectionDivider />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {cat.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex justify-between items-start gap-4 py-3 border-b border-[#F5F5F5]"
                      >
                        <div className="flex-1">
                          <h3 className="font-[var(--font-heading-var)] text-sm font-semibold text-[#212529]">
                            {item.name}
                          </h3>
                          {item.description && (
                            <p className="text-xs text-[#666666] mt-1 leading-relaxed">
                              {item.description}
                            </p>
                          )}
                        </div>
                        <span className="font-[var(--font-heading-var)] text-sm font-bold text-[#5CB85C] whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order CTA */}
          <div className="text-center mt-16 py-12 bg-[#F5F5F5] rounded-[5pt]">
            <p className="font-[var(--font-heading-var)] text-xs uppercase tracking-[0.15em] text-[#D4A843] font-semibold mb-2">
              Ready to Order?
            </p>
            <h2 className="font-[var(--font-heading-var)] text-2xl md:text-3xl font-bold text-[#212529] mb-4">
              Order Online for Pickup or Delivery
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://mexicolindoexpress.gotoeat.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#5CB85C] text-white font-semibold uppercase tracking-[0.05em] text-sm px-8 py-3 rounded-[4px] hover:bg-[#4a9a4a] transition-colors"
              >
                Order Online
              </a>
              <a
                href="https://www.ubereats.com/ca/store/mexico-lindo-express/uAZimujiTD6RWMIPRwyzvA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-[#2A2A2A] text-[#2A2A2A] font-semibold uppercase tracking-[0.05em] text-sm px-8 py-3 rounded-[4px] hover:bg-[#5CB85C] hover:text-white hover:border-[#5CB85C] transition-colors"
              >
                Uber Eats
              </a>
              <a
                href="https://www.skipthedishes.com/mexico-lindo-express"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-[#2A2A2A] text-[#2A2A2A] font-semibold uppercase tracking-[0.05em] text-sm px-8 py-3 rounded-[4px] hover:bg-[#5CB85C] hover:text-white hover:border-[#5CB85C] transition-colors"
              >
                SkipTheDishes
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
