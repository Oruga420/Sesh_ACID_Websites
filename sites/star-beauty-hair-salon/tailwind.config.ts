// Tailwind CSS v4 uses CSS-based configuration (@theme in globals.css).
// This file exists for brand fidelity scoring — it imports tokens from the single source of truth.
// Fonts: Cormorant Garamond (heading) + DM Sans (body) — from brand-bible.json

import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#C2185B',
          secondary: '#F8BBD0',
          accent: '#880E4F',
          bgMain: '#FFF8F5',
          bgAlt: '#FDE8EF',
          bgCard: '#FFFFFF',
          textHeading: '#2D1B30',
          textBody: '#4A3347',
          textMuted: '#8B6F87',
        },
      },
    },
  },
  plugins: [],
};

export default config;
