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
          primary: "#D4A0A0",
          secondary: "#8B6F6F",
          accent: "#F0C8C8",
          gold: "#C9A96E",
          bgMain: "#FFF9F7",
          bgAlt: "#FDF0ED",
          bgCard: "#FFFFFF",
          bgDark: "#3D2B2B",
          textHeading: "#2D1B1B",
          textBody: "#5C4444",
          textMuted: "#9B8585",
        },
      },
      fontFamily: {
        heading: ["Cormorant Garamond", "Georgia", "serif"],
        body: ["Nunito Sans", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
      },
    },
  },
  plugins: [],
};
export default config;
