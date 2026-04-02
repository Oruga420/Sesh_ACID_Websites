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
        dark: "#121215",
        "dark-light": "#1a1a1f",
        "dark-lighter": "#252529",
        "burnt-red": "#D14437",
        "burnt-red-dark": "#B33A2F",
        "burnt-red-light": "#E05A4E",
        cream: "#F5F0EB",
      },
      fontFamily: {
        heading: ['"Bebas Neue"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
