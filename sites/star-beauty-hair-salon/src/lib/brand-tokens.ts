// AUTO-GENERATED from brand-bible.json — DO NOT EDIT BY HAND
// Regenerate by re-running Step 3.0

export const BRAND = {
  slug: 'star-beauty-hair-salon',

  colors: {
    primary: '#C2185B',
    secondary: '#F8BBD0',
    accent: '#880E4F',
    bgMain: '#FFF8F5',
    bgAlt: '#FDE8EF',
    bgCard: '#FFFFFF',
    textHeading: '#2D1B30',
    textBody: '#4A3347',
    textMuted: '#8B6F87',
    textLight: '#FFFFFF',
    footerBg: '#2D1B30',
    footerText: '#F8BBD0',
    overallTheme: 'light-warm',
  },

  fonts: {
    heading: 'Cormorant Garamond',
    headingFallback: 'Georgia, serif',
    headingWeights: [400, 500, 600, 700],
    body: 'DM Sans',
    bodyFallback: 'system-ui, sans-serif',
    bodyWeights: [300, 400, 500, 700],
    navWeight: 500,
    navTextTransform: 'uppercase' as const,
    navLetterSpacing: '0.12em',
  },

  spacing: {
    sectionPadding: '5rem 0',
    contentMaxWidth: '1200px',
    cardGap: '1.5rem',
    radiusButtons: '8px',
    radiusCards: '12px',
    radiusImages: '12px',
  },

  archetype: 'portfolio-first',
  sectionOrder: ['hero', 'gallery-teaser', 'services-preview', 'cta', 'contact'],

  voice: {
    tone: 'Warm, welcoming, professional but approachable',
    personality: ['welcoming', 'skilled', 'transformative', 'warm', 'professional'],
    primaryCTA: 'Book Your Appointment',
  },

  people: [
    {
      name: 'Rachel Chu',
      role: 'Owner & Head Stylist',
      profilePhotoUrl: null,
      portfolioPhotos: [],
      bio: 'Rachel Chu is happy to welcome you to our new location. Appointments are recommended.',
      instagram: null,
      featured: true,
      specialties: ['Balayage', 'Color Correction', 'Ash Blonde', 'Rosegold Balayage', 'Silver Metallic'],
    },
  ],

  images: {
    hero: null,
    logo: null,
    gallery: [
      { url: 'https://static.wixstatic.com/media/b2430b_1.jpg', description: 'Balayage transformation', verified: true },
      { url: 'https://static.wixstatic.com/media/b2430b_2.jpg', description: 'Ash blonde color correction', verified: true },
      { url: 'https://static.wixstatic.com/media/b2430b_3.jpg', description: 'Rosegold balayage', verified: true },
      { url: 'https://static.wixstatic.com/media/b2430b_4.jpg', description: 'Silver metallic styling', verified: true },
    ],
    atmosphere: [],
    food: [],
  },

  demographics: {
    primaryLanguage: 'en',
    secondaryLanguage: null,
    neighborhood: 'Kennedy Rd & Lawrence, Scarborough',
    targetCustomer: 'Diverse Scarborough women and men seeking hair styling, color transformations, threading, and beauty services',
  },

  business: {
    name: 'Star Beauty & Hair Salon',
    address: '1415 Kennedy Rd, Unit 10, Scarborough, ON M1P 2L6',
    phone: '416-757-6393',
    hours: {
      monday: '10:00 AM - 6:30 PM',
      tuesday: 'Closed',
      wednesday: '10:00 AM - 6:30 PM',
      thursday: '10:00 AM - 6:30 PM',
      friday: '10:00 AM - 6:30 PM',
      saturday: '10:00 AM - 5:00 PM',
      sunday: 'Closed',
    },
    instagram: 'https://www.instagram.com/starbeautyhairsalon/',
    facebook: 'https://www.facebook.com/Star-Beauty-Hair-Salon-450093068409877/',
    ratings: {
      google: { rating: 4.6, reviewCount: 188 },
      facebook: { rating: 5.0, reviewCount: 35 },
    },
  },

  services: {
    hair: [
      { name: "Women's Haircut" },
      { name: "Men's Haircut" },
      { name: "Children's Haircut" },
      { name: 'Blow Dry' },
      { name: 'Curly Hair Styling' },
    ],
    color: [
      { name: 'Hair Coloring' },
      { name: 'Highlights / Ombre' },
      { name: 'Balayage' },
    ],
    treatment: [
      { name: 'Keratin Treatment' },
      { name: 'Permanent Hair Straightening' },
      { name: 'Perm' },
    ],
    extensions: [
      { name: 'Hair Extensions' },
      { name: 'Hair Weaves' },
      { name: 'Hair Braiding' },
      { name: 'Locs' },
      { name: 'Wig Install' },
    ],
    beauty: [
      { name: 'Eyebrow Threading' },
      { name: 'Full Face Threading' },
      { name: 'Facials' },
      { name: 'Waxing' },
    ],
  },
} as const;
