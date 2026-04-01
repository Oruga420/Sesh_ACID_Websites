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
          black: "#000000",
          dark: "#1a1a1a",
          charcoal: "#252323",
          gray: "#333333",
          gold: "#c9a96e",
          "gold-light": "#d4b97a",
          "gold-dark": "#b8944f",
          white: "#ffffff",
          "off-white": "#f5f5f0",
        },
      },
      fontFamily: {
        heading: ["Cormorant Garamond", "serif"],
        body: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
