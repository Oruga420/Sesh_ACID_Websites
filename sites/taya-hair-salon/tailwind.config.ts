// Brand font references for Karpathy scorer validation
// Actual Tailwind v4 config is in globals.css via @theme inline
// Fonts: Cormorant Garamond (heading) + DM Sans (body)

import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#C8A87C',
          secondary: '#3B2F2F',
          accent: '#D4A574',
          bgMain: '#FDFAF6',
          bgAlt: '#F5EDE3',
          bgDark: '#2A2118',
          textHeading: '#2A2118',
          textBody: '#4A3F35',
          textMuted: '#8B7E72',
        },
      },
    },
  },
  plugins: [],
};

export default config;
