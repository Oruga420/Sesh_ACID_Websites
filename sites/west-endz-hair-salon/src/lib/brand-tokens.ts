// AUTO-GENERATED from brand-bible.json — DO NOT EDIT BY HAND
// Regenerate by re-running Step 3.0

export const BRAND = {
  slug: 'west-endz-hair-salon',

  colors: {
    primary: '#56c477',
    secondary: '#039146',
    accent: '#c4a35a',
    bgMain: '#FAFAF7',
    bgAlt: '#F0EDE6',
    bgCard: '#FFFFFF',
    textHeading: '#1a1a1a',
    textBody: '#4a4a4a',
    textMuted: '#7a7a7a',
    textLight: '#FFFFFF',
    footerBg: '#1a1a1a',
    footerText: '#c4b590',
    overallTheme: 'light-clean',
  },

  fonts: {
    heading: 'Cormorant Garamond',
    headingFallback: 'Georgia, serif',
    headingWeights: [400, 500, 600, 700],
    body: 'Lato',
    bodyFallback: 'Helvetica, Arial, sans-serif',
    bodyWeights: [300, 400, 700],
    navWeight: 500,
    navTextTransform: 'uppercase' as const,
    navLetterSpacing: '0.12em',
  },

  spacing: {
    sectionPadding: '5rem 0',
    contentMaxWidth: '1200px',
    cardGap: '2rem',
    radiusButtons: '4px',
    radiusCards: '8px',
    radiusImages: '6px',
  },

  elevation: {
    sm: '0 1px 2px rgba(0,0,0,0.05)',
    md: '0 4px 6px rgba(0,0,0,0.1)',
    lg: '0 10px 15px rgba(0,0,0,0.1)',
    xl: '0 20px 25px rgba(0,0,0,0.15)',
  },

  timing: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },

  zIndex: {
    dropdown: 10,
    sticky: 20,
    modal: 30,
    toast: 50,
  },

  archetype: 'portfolio-first',
  sectionOrder: ['hero', 'gallery-teaser', 'cta', 'services', 'team', 'testimonials', 'contact'],

  voice: {
    tone: 'warm, welcoming, professional, community-oriented',
    personality: ['friendly', 'approachable', 'experienced', 'trusted', 'neighborhood'],
    primaryCTA: 'Book Your Appointment',
  },

  people: [
    {
      name: 'Lucy Zollerano',
      role: 'Owner & Master Hair Stylist',
      profilePhotoUrl: null,
      portfolioPhotos: [],
      bio: 'Over 25 years experience in hair cutting, hair colouring, highlighting and hair extensions. Top Mon Platin color specialist in west Toronto. Hair Treats certified specialist.',
      instagram: null,
      featured: true,
    },
    {
      name: 'Mary Taffuri',
      role: 'Hair Stylist',
      profilePhotoUrl: null,
      portfolioPhotos: [],
      bio: 'Over 20 years experience in haircuts, styling, coloring, highlights, perms, and event hair styling.',
      instagram: null,
      featured: true,
    },
    {
      name: 'Darlene',
      role: 'Hair Stylist',
      profilePhotoUrl: null,
      portfolioPhotos: [],
      bio: 'Experienced in hair cutting, coloring, highlighting, and color correction. Known by clients as the heart and soul of the salon.',
      instagram: null,
      featured: true,
    },
  ],

  images: {
    hero: 'https://westendzsalon.com/wp-content/uploads/2018/04/landing-top-background-img.jpg',
    logo: 'https://westendzsalon.com/wp-content/uploads/2022/11/WestEndz-Dark-2022.png',
    logoLight: 'https://westendzsalon.com/wp-content/uploads/2022/11/WestEndz-Light-2022.png',
    logoFooter: 'https://westendzsalon.com/wp-content/uploads/2022/08/logo.png',
    gallery: [
      { url: 'https://westendzsalon.com/wp-content/uploads/2018/05/h5-slider2-background-img.jpg', description: 'Professional men styling' },
      { url: 'https://westendzsalon.com/wp-content/uploads/2020/06/h3-team-img-2.jpg', description: 'Beautiful hair coloring result' },
      { url: 'https://westendzsalon.com/wp-content/uploads/2018/04/landing-top-background-img.jpg', description: 'Salon styling tools' },
      { url: 'https://westendzsalon.com/wp-content/uploads/2022/10/Mon_Platin_Banner.png', description: 'Mon Platin professional products' },
    ],
  },

  demographics: {
    primaryLanguage: 'en',
    secondaryLanguage: null,
    neighborhood: 'Alderwood, South Etobicoke',
    targetCustomer: 'Local women 30-65+ in Alderwood and south Etobicoke',
  },
} as const;
