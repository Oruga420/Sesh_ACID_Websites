// AUTO-GENERATED from brand-bible.json — DO NOT EDIT BY HAND
// Regenerate by re-running Step 3.0

export const BRAND = {
  slug: 'nail-decor-beaute-spa',

  colors: {
    primary: '#D4A0A0',
    secondary: '#8B6F6F',
    accent: '#F0C8C8',
    gold: '#C9A96E',
    bgMain: '#FFF9F7',
    bgAlt: '#FDF0ED',
    bgCard: '#FFFFFF',
    bgDark: '#3D2B2B',
    textHeading: '#2D1B1B',
    textBody: '#5C4444',
    textMuted: '#9B8585',
    textLight: '#FFFFFF',
    overallTheme: 'light-warm-feminine',
  },

  fonts: {
    heading: 'Cormorant Garamond',
    headingFallback: 'Georgia, serif',
    headingWeights: [400, 500, 600, 700],
    body: 'Nunito Sans',
    bodyFallback: 'system-ui, sans-serif',
    bodyWeights: [300, 400, 600],
    navWeight: 600,
    navTextTransform: 'uppercase' as const,
    navLetterSpacing: '0.12em',
  },

  spacing: {
    sectionPadding: 'clamp(3rem, 8vw, 6rem)',
    contentMaxWidth: '1280px',
    cardGap: '1.5rem',
    radiusButtons: '9999px',
    radiusCards: '16px',
    radiusImages: '16px',
  },

  archetype: 'GALLERY-FORWARD + NEIGHBORHOOD',
  sectionOrder: ['hero', 'servicesTeaser', 'gallery', 'testimonials', 'booking'],

  voice: {
    tone: 'warm, welcoming, elegant, approachable',
    personality: ['relaxing', 'feminine', 'friendly', 'professional', 'pampering'],
    primaryCTA: 'Book Your Appointment',
  },

  people: [],

  images: {
    hero: 'https://api.booknailsalon.ca/files/mer_110_9bdb2af6799204a299c603994b8e400e4b1fd625efdb74066cc869fee42c9df3_1741056771657.jpg',
    logo: null,
    gallery: [
      { url: 'https://api.booknailsalon.ca/files/mer_110_9bdb2af6799204a299c603994b8e400e4b1fd625efdb74066cc869fee42c9df3_1741056771657.jpg', description: 'Nail salon work', verified: true },
    ],
    atmosphere: [],
    food: [],
  },

  demographics: {
    primaryLanguage: 'en',
    secondaryLanguage: null,
    neighborhood: 'Morningside, Scarborough',
    targetCustomer: 'Women 18-55 in Scarborough seeking quality nail care, spa treatments, and lash services',
  },

  business: {
    name: 'Nail Decor Beaute & Spa',
    address: '4-2130 Morningside Ave, Scarborough, ON M1X 0C9',
    phone: '(416) 609-2227',
    email: 'nailbeautespa@gmail.com',
    hours: '10:00 AM - 8:00 PM Daily',
    instagram: 'https://www.instagram.com/naildecorbeaute_spa/',
    bookingUrl: 'https://booksalon.ca/nail-decor-beaute-spa/booking',
  },
} as const;
