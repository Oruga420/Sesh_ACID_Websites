// AUTO-GENERATED from brand-bible.json — DO NOT EDIT BY HAND
// Regenerate by re-running Step 3.0

export const BRAND = {
  slug: 'diva-nails-spa',

  colors: {
    primary: '#D4A0B9',
    secondary: '#8B6F5E',
    accent: '#E8C4A0',
    accentBright: '#C97B9A',
    bgMain: '#FDF8F5',
    bgAlt: '#F5EDE8',
    bgCard: '#FFFFFF',
    bgDark: '#3D2E2A',
    textHeading: '#2D2226',
    textBody: '#5A4A44',
    textMuted: '#9B8A82',
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
    sectionPadding: 'clamp(60px, 8vw, 100px)',
    contentMaxWidth: '1200px',
    cardGap: '24px',
    radiusButtons: '8px',
    radiusCards: '12px',
    radiusImages: '12px',
  },

  archetype: 'GALLERY-FORWARD + NEIGHBORHOOD',
  sectionOrder: ['hero', 'services-teaser', 'gallery-preview', 'head-spa-feature', 'testimonials', 'cta'],

  voice: {
    tone: 'warm, inviting, pampering, professional but approachable',
    personality: ['luxurious', 'caring', 'meticulous', 'relaxing', 'welcoming'],
    primaryCTA: 'Book Your Appointment',
  },

  people: [
    { name: 'Jenny', role: 'Nail Technician', profilePhotoUrl: null, portfolioPhotos: [], bio: 'Skilled nail technician specializing in gel and acrylic designs', instagram: null, featured: true },
    { name: 'Van', role: 'Nail Technician', profilePhotoUrl: null, portfolioPhotos: [], bio: 'Expert in nail care and custom nail art', instagram: null, featured: true },
    { name: 'Marry', role: 'Nail Technician', profilePhotoUrl: null, portfolioPhotos: [], bio: 'Dedicated nail technician with expertise in shellac and natural nails', instagram: null, featured: true },
    { name: 'Julia', role: 'Nail Technician', profilePhotoUrl: null, portfolioPhotos: [], bio: 'Experienced technician offering manicures, pedicures, and nail extensions', instagram: null, featured: true },
  ],

  images: {
    hero: { url: 'https://divanailsspa.ca/photos/home/1.jpg', description: 'Nail art showcase' },
    logo: null,
    gallery: [
      { url: 'https://divanailsspa.ca/photos/home/1.jpg', description: 'Nail art showcase 1' },
      { url: 'https://divanailsspa.ca/photos/home/2.jpg', description: 'Salon or nail art 2' },
      { url: 'https://divanailsspa.ca/photos/home/3.jpg', description: 'Nail art or head spa 3' },
      { url: 'https://divanailsspa.ca/photos/home/4.jpg', description: 'Salon showcase 4' },
    ],
  },

  demographics: {
    primaryLanguage: 'en',
    secondaryLanguage: 'vi',
    neighborhood: 'Eglinton East / Scarborough',
    targetCustomer: 'Women 20-55 in Scarborough seeking quality nail care and head spa relaxation',
  },

  business: {
    name: 'Diva Nails & Head Spa',
    address: '2639 Eglinton Ave E, Scarborough, ON M1K 2S2',
    phone: '(416) 267-6245',
    hours: {
      'Mon–Sat': '9:00 AM – 8:00 PM',
      'Sunday': '9:00 AM – 6:00 PM',
    },
    bookingUrl: 'https://www.dashbooking.com/salon/diva-nails-spa-scarborough/booking',
    instagram: ['https://www.instagram.com/divanailltd/', 'https://www.instagram.com/divanails_headspa/'],
    facebook: 'https://www.facebook.com/divanail2639/',
    rating: { score: 4.7, reviews: 85, source: 'Groupon' },
  },
} as const;
