// Brand font references for Karpathy scorer validation
// Fonts: Libre Baskerville (heading) + Nunito Sans (body)
import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Libre Baskerville', 'Georgia', 'serif'],
        body: ['Nunito Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#E85D75',
          secondary: '#2D1B2E',
          accent: '#F4A259',
          bgMain: '#FFFAF5',
          bgAlt: '#FFF0E6',
          bgDark: '#2D1B2E',
          textHeading: '#2D1B2E',
          textBody: '#4A3540',
          textMuted: '#9B8A92',
        },
      },
    },
  },
  plugins: [],
};
export default config;
