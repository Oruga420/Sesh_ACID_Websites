// Brand Tokens — Mexico Lindo Express
// Derived from brand-bible.json

export const colors = {
  primary: '#5CB85C',        // Green - CTAs, hover states, interactive elements
  secondary: '#2A2A2A',      // Dark charcoal - footer, dividers, dark accents
  accent: '#D4A843',         // Warm gold - decorative Mexican-themed elements
  bgMain: '#FFFFFF',         // White page background
  bgAlt: '#F5F5F5',         // Alternating section backgrounds, card bg
  bgCard: '#FFFFFF',         // Menu item cards
  bgHeroOverlay: 'rgba(0,0,0,0.7)', // Hero banner dark overlay
  textHeading: '#212529',    // Headings and nav links
  textBody: '#333333',       // Body text, descriptions
  textMuted: '#666666',      // Secondary text, sub-descriptions
  textLight: '#FFFFFF',      // Text on dark backgrounds
  border: '#2A2A2A',         // Section dividers
} as const;

export const fonts = {
  heading: {
    family: 'Montserrat',
    fallback: 'sans-serif',
    weights: [400, 600, 700] as const,
    style: 'bold modern geometric sans-serif',
  },
  body: {
    family: 'Roboto',
    fallback: 'sans-serif',
    weights: [300, 400, 500] as const,
    style: 'clean readable neutral sans-serif',
  },
  nav: {
    family: 'Montserrat',
    weight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    fontSize: '12pt',
  },
} as const;

export const spacing = {
  sectionPadding: '15pt',
  contentMaxWidth: '1200px',
  cardGap: '7.5pt',
  buttonPadding: '7.5pt 25pt',
} as const;

export const borderRadius = {
  buttons: '4px',
  cards: '0px',
  images: '5pt',
} as const;

export const typography = {
  h1: { size: '20pt', weight: 700, lineHeight: 1.2 },
  h2: { size: '16pt', weight: 600, lineHeight: 1.3 },
  h3: { size: '14pt', weight: 600, lineHeight: 1.4 },
  body: { size: '16pt', weight: 400, lineHeight: 1.6 },
  small: { size: '12pt', weight: 400, lineHeight: 1.5 },
} as const;

export const archetype = {
  type: 'location-first',
  sectionOrder: [
    'hero',
    'menu-featured',
    'about-story',
    'gallery',
    'reviews',
    'specials',
    'map-hours',
    'contact',
  ],
} as const;

export const brandVoice = {
  personality: ['authentic', 'warm', 'unpretentious', 'generous', 'family-rooted'] as const,
  tone: 'warm-casual',
  wordsTheyUse: [
    'authentic', 'traditional', 'Mexican', 'fresh', 'homemade',
    'seasoned', 'braised', 'grilled', 'handmade', 'consomme',
    'salsa', 'cilantro',
  ],
  wordsTheyAvoid: [
    'fusion', 'gourmet', 'upscale', 'fine dining', 'artisanal', 'craft',
  ],
} as const;

export const businessInfo = {
  name: 'Mexico Lindo Express',
  address: '2586 Birchmount Rd, Scarborough, ON M1T 2M5',
  phone: '(647) 692-0938',
  phoneHref: 'tel:+16476920938',
  website: 'https://mexicolindoexpresson.com/',
  instagram: '@mexicolindoex',
  instagramUrl: 'https://www.instagram.com/mexicolindoex/',
  facebookUrl: 'https://www.facebook.com/p/Mexico-Lindo-Express-100088831496877/',
  coordinates: { lat: 43.7896208, lng: -79.3029 },
  hours: {
    sunday: '12:00 PM - 7:00 PM',
    monday: 'Closed',
    tuesday: '11:00 AM - 9:00 PM',
    wednesday: '11:00 AM - 9:00 PM',
    thursday: '11:00 AM - 9:00 PM',
    friday: '11:00 AM - 9:00 PM',
    saturday: '12:00 PM - 9:00 PM',
  },
  ratings: {
    google: '4.4/5',
    uberEats: '4.7/5 (5,000+ reviews)',
  },
} as const;

export const deliveryPartners = [
  {
    name: 'Uber Eats',
    url: 'https://www.ubereats.com/ca/store/mexico-lindo-express/uAZimujiTD6RWMIPRwyzvA',
  },
  {
    name: 'SkipTheDishes',
    url: 'https://www.skipthedishes.com/mexico-lindo-express',
  },
] as const;

export const menuHighlights = [
  { name: 'Tacos de Birria', price: '$19.00 - $24.95', description: 'Traditional braised beef tacos with cilantro, onion, cheese, lime, salsa and consomme (5 tacos)' },
  { name: 'Tacos de Carne Asada', price: '$19.00 - $23.95', description: 'Perfectly seasoned and grilled steak on soft corn tortillas' },
  { name: 'Mexican Combo', price: '$16.95 - $21.95', description: 'Chicken enchilada in ranchero sauce with melted cheese, paired with beef chimichanga' },
  { name: 'Pozole', price: '$17.95', description: 'Traditional Mexican soup' },
  { name: 'Chilaquiles', price: '$19.50', description: 'Authentic breakfast/brunch item' },
  { name: 'Pastel de Tres Leches', price: '$11.95', description: 'Customer-favorite dessert' },
] as const;

export const specials = [
  'BOGO 50% off tacos on Wednesdays and Fridays',
  '5% discount for cash payments',
  'Family Fiesta Deals: Taco Tray (30 tacos) $150, Nachos Platter $75',
  'BOGO offers on Uber Eats for Birria Tacos, Enchiladas, and Street Burritos',
] as const;

export const verbatimReviews = [
  {
    quote: "Finally, an authentic Mexican gem that feels like a culinary trip to Mexico! Mexico Lindo is everything I've been searching for - owned and passionately run by a Mexican chef who truly honors the flavors of their homeland.",
    source: 'Google Review',
  },
  {
    quote: "Worth the drive, if you don't live close by, for the BEST birria tacos in the GTA.",
    source: 'Google Review',
  },
  {
    quote: 'Beef burrito was HUGE and very juicy and filling. Churros was so good that no words can describe how amazing this is!',
    source: 'Yelp',
  },
  {
    quote: "I've found my new go-to taco spot in Scarborough - the staff are friendly, the food is delicious, and the atmosphere is cozy!",
    source: 'Google Review',
  },
  {
    quote: "Seriously the best mexican food I've found in Toronto!",
    source: 'Google Review',
  },
  {
    quote: 'Absolute perfection. The tender, smoky meats, fresh handmade tortillas, and zesty salsas transported me straight back to the streets of Guadalajara.',
    source: 'Google Review',
  },
] as const;

export const menuCategories = [
  'Mexican Street Tacos',
  'Antojitos & Handhelds',
  'Sopa y Ensaladas',
  'Chilaquiles',
  'Especiales',
  'Burritos',
  'Enchiladas',
  'Platillos',
  'Favoritos de Mexico Lindo',
  'Sizzling Fajitas',
  'Postres',
  'Aguas Frescas',
  'Soft Drinks',
  'Family Fiesta Deals',
  'Extras',
] as const;
