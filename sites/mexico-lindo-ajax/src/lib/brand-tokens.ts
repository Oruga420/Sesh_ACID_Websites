// Brand Tokens — Mexico Lindo Ajax
// Derived from brand-bible.json
// Palette: terracotta, dark forest green, warm gold, warm cream

export const colors = {
  primary: '#C0533A',         // Terracotta red — CTAs, active states
  primaryDark: '#9E3D24',     // Darker terracotta — hover on primary
  secondary: '#2C3A1E',       // Dark forest green — header, footer, nav
  secondaryLight: '#3E5229',  // Lighter green — hover on secondary
  accent: '#D4A024',          // Warm gold/amber — overlines, stars, prices
  accentLight: '#F0C843',     // Lighter gold — badges
  bgMain: '#FFFDF8',          // Warm off-white — page background
  bgAlt: '#F7F0E6',           // Warm cream — alternating sections
  bgCard: '#FFFFFF',          // White — card backgrounds
  bgHeroOverlay: 'rgba(30,20,10,0.72)',
  textHeading: '#1E1209',     // Deep espresso — headings
  textBody: '#3A2A1A',        // Warm dark brown — body text
  textMuted: '#7A6A5A',       // Muted warm brown — secondary text
  textLight: '#FFFFFF',       // White — text on dark backgrounds
  border: '#E0D0B8',          // Warm tan — borders and dividers
} as const;

export const fonts = {
  heading: {
    family: 'Playfair Display',
    fallback: 'serif',
    weights: [400, 700, 900] as const,
  },
  body: {
    family: 'Lato',
    fallback: 'sans-serif',
    weights: [300, 400, 700] as const,
  },
  nav: {
    family: 'Lato',
    weight: 700,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.08em',
    fontSize: '13px',
  },
} as const;

export const spacing = {
  sectionPadding: '80px 0',
  contentMaxWidth: '1200px',
  cardGap: '24px',
  buttonPadding: '14px 32px',
} as const;

export const borderRadius = {
  buttons: '4px',
  cards: '6px',
  images: '6px',
} as const;

export const archetype = {
  type: 'location-first',
  sectionOrder: [
    'hero',
    'menu-featured',
    'about-story',
    'hours-map',
    'contact',
  ],
} as const;

export const brandVoice = {
  personality: ['warm', 'family-friendly', 'authentic', 'community-rooted', 'unpretentious'] as const,
  tone: 'warm-casual',
  secondaryLanguage: 'es',
} as const;

export const businessInfo = {
  name: 'Mexico Lindo Ajax',
  address: '200 Harwood Ave S, Ajax, ON L1S 2H6',
  phone: '(905) 231-9764',
  phoneHref: 'tel:+19052319764',
  email: 'mexicolindo-ajax@gmail.com',
  instagram: '@mexico_lindo_ajax',
  instagramUrl: 'https://www.instagram.com/mexico_lindo_ajax/',
  facebookUrl: 'https://www.facebook.com/p/Mexico-Lindo-Restaurant-100063457542632/',
  coordinates: { lat: 43.8487, lng: -79.0204 },
  hours: {
    monday: 'Closed',
    tuesday: '11:30 AM – 8:30 PM',
    wednesday: '11:30 AM – 8:30 PM',
    thursday: '11:30 AM – 8:30 PM',
    friday: '11:30 AM – 8:30 PM',
    saturday: '12:00 PM – 9:00 PM',
    sunday: '12:00 PM – 6:30 PM',
  },
  ratings: {
    google: '4.4',
    reviewCount: '1,000+',
  },
} as const;

export const deliveryPartners = [
  {
    name: 'DoorDash',
    url: 'https://www.doordash.com/en-CA/store/mexico-lindo-ajax--oshawa-580721',
  },
  {
    name: 'Uber Eats',
    url: 'https://www.ubereats.com/ca/store/mexico-lindo-ajax/mA9L4f46SYO0nJcArzjYFA',
  },
  {
    name: 'SkipTheDishes',
    url: 'https://www.skipthedishes.com/mexico-lindo-harwood-avenue',
  },
] as const;

export const menuHighlights = [
  {
    name: 'Birria Tacos',
    price: '$20.95',
    description: 'Slow-braised beef on corn tortillas with cilantro, onion and lemon — served with rich consomme for dipping.',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&q=80',
  },
  {
    name: 'Sizzling Fajitas',
    price: '$26.95',
    description: 'Grilled chicken or beef with peppers and onions, served sizzling hot with warm tortillas and all the fixings.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
  },
  {
    name: 'Enchiladas Suizas',
    price: '$18.45',
    description: 'Two corn tortillas filled with your choice, baked in tomatillo sauce and topped with melted cheese and sour cream.',
    image: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=800&q=80',
  },
  {
    name: 'Churros',
    price: '$8.00',
    description: 'Golden fried dough dusted in cinnamon sugar. A classic Mexican dessert the whole family loves.',
    image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=800&q=80',
  },
] as const;

export const menuCategories = [
  {
    name: 'Specials',
    items: [
      { name: 'Birria Tacos (3 pieces)', price: '$20.95', description: 'Slow-braised beef tacos with consomme dipping broth' },
      { name: 'Tres Leches Cake', price: '$10.00', description: 'House-made three milk cake' },
    ],
  },
  {
    name: 'Appetizers',
    items: [
      { name: 'Guacamole', price: '$11.95', description: 'Fresh avocado dip with chips' },
      { name: 'Nachos Fiesta', price: '$16.95', description: 'Loaded nachos with all the toppings' },
      { name: 'Nachos', price: '$13.95', description: 'Classic tortilla chips with salsa and cheese' },
      { name: 'Molletes', price: '$11.95', description: 'Open-faced bread with beans and melted cheese' },
      { name: 'Queso Fundido', price: '$13.95', description: 'Bubbling melted cheese with peppers' },
      { name: 'Chorinachos', price: '$17.95', description: 'Nachos topped with chorizo sausage' },
      { name: 'Camarones', price: '$17.45', description: 'Seasoned shrimp appetizer' },
      { name: 'Calamari', price: '$15.45', description: 'Crispy fried calamari rings' },
    ],
  },
  {
    name: 'Soups & Salads',
    items: [
      { name: 'Taco Salad', price: '$13.45', description: 'Crispy shell with seasoned beef, cheese, lettuce and salsa' },
      { name: 'Pozole', price: '$11.95', description: 'Traditional Mexican hominy soup' },
      { name: 'Sopa Cancun', price: '$9.95', description: 'Creamy tortilla soup' },
      { name: 'Acapulco Salad', price: '$9.95', description: 'Fresh garden salad Mexican style' },
    ],
  },
  {
    name: 'Sizzling Fajitas',
    items: [
      { name: 'Fajitas', price: '$26.95', description: 'Sizzling chicken or beef with peppers, onions and warm tortillas' },
      { name: 'Fajitas with Shrimps', price: '$30.95', description: 'Sizzling shrimp fajitas with peppers and onions' },
    ],
  },
  {
    name: 'Combos',
    items: [
      { name: 'Tabasco Combo', price: '$17.45', description: 'A Mexican combo with classic flavours' },
      { name: 'Mazatlan Combo', price: '$17.45', description: 'Coastal Mexico inspired combination' },
      { name: 'Acapulco Combo', price: '$17.45', description: 'The Acapulco-style favourite combo' },
    ],
  },
  {
    name: 'Tortillas',
    items: [
      { name: 'Chimichanga', price: '$17.95', description: 'Deep-fried burrito with your choice of filling and mozzarella' },
      { name: 'Quesadillas', price: '$17.95', description: 'Grilled flour tortilla with cheese and your choice of filling' },
      { name: 'Tacos', price: '$17.95', description: 'Two corn tortillas with cilantro, onion and choice of filling' },
      { name: 'Enchiladas Suizas', price: '$18.45', description: 'With green tomatillo sauce, cheese and sour cream' },
      { name: 'Enchiladas', price: '$17.45', description: 'Choice of red, green, mole or diablo sauce, topped with cheese' },
      { name: 'Burrito', price: '$17.95', description: 'Large flour tortilla with rice, beans and your choice of filling' },
      { name: 'Flautas', price: '$16.45', description: 'Crispy rolled corn tortillas with choice of filling' },
      { name: 'Fish Tacos (Tilapia)', price: '$19.45', description: 'Crispy tilapia tacos with fresh toppings' },
    ],
  },
  {
    name: 'Favourites',
    items: [
      { name: 'Burrito Grande', price: '$25.95', description: 'Oversized burrito loaded with rice, beans and your filling' },
      { name: 'Pollo Con Mole', price: '$25.95', description: 'Chicken in rich traditional mole sauce' },
      { name: 'Steak A La Mexicana', price: '$25.95', description: 'Seasoned steak cooked Mexican style' },
      { name: 'Camarones Rancheros', price: '$27.95', description: 'Shrimp in ranchero tomato sauce' },
      { name: 'Pollo Adelita', price: '$25.95', description: 'Chicken in a rich traditional sauce' },
      { name: 'Chile Poblano', price: '$20.45', description: 'Stuffed poblano pepper in walnut cream sauce' },
      { name: 'Burrito Del Mar', price: '$25.95', description: 'Seafood burrito with shrimp and fish' },
      { name: 'Steak A La Nayarita', price: '$29.95', description: 'Nayarit-style grilled steak with peppers' },
      { name: 'Steak Al Pepper', price: '$28.95', description: 'Pepper-crusted steak in cream sauce' },
      { name: 'Pollo Al Limon', price: '$25.95', description: 'Grilled chicken in lemon garlic sauce' },
    ],
  },
  {
    name: 'Kids Menu',
    items: [
      { name: 'Mini Quesadilla', price: '$8.95', description: 'Small cheese quesadilla for little ones' },
      { name: 'Hard Taco', price: '$8.95', description: 'Classic crispy taco with beef and cheese' },
      { name: 'Burriquito Chiquito', price: '$8.95', description: 'Small burrito sized just right' },
      { name: 'Chicken Fingers', price: '$8.95', description: 'Crispy chicken fingers with fries' },
    ],
  },
  {
    name: 'Sides',
    items: [
      { name: 'Chips and Salsa', price: '$4.95', description: '' },
      { name: 'Rice', price: '$2.95', description: '' },
      { name: 'Fries', price: '$3.95', description: '' },
      { name: 'Beans', price: '$2.95', description: '' },
      { name: 'Small Guacamole', price: '$4.95', description: '' },
      { name: 'Diablo Sauce', price: '$1.50', description: '' },
      { name: 'Mole Sauce', price: '$1.50', description: '' },
    ],
  },
  {
    name: 'Desserts',
    items: [
      { name: 'Churros', price: '$8.00', description: 'Cinnamon sugar fried dough sticks' },
      { name: 'Caramel Flan', price: '$8.00', description: 'Classic Mexican egg custard with caramel' },
      { name: 'Deep Fried Ice Cream', price: '$8.00', description: 'Vanilla ice cream in crispy shell' },
      { name: 'Tres Leches Cake', price: '$10.00', description: 'House-made three milk cake' },
      { name: 'Cheese Cake', price: '$8.00', description: 'Creamy cheesecake slice' },
      { name: 'Sopapilla', price: '$8.00', description: 'Fried pastry with honey and cinnamon sugar' },
    ],
  },
] as const;
