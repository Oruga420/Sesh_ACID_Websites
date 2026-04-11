import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#6B8E7B",
          secondary: "#4A6B5A",
          accent: "#C9A96E",
          warmNeutral: "#D4C4B0",
          bgMain: "#FAFAF7",
          bgAlt: "#F0EDE6",
          bgCard: "#FFFFFF",
          bgDark: "#2C3E35",
          textHeading: "#1A2E24",
          textBody: "#4A5D52",
          textMuted: "#8A9B90",
        },
      },
      fontFamily: {
        heading: ["DM Serif Display", "Georgia", "serif"],
        body: ["DM Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
