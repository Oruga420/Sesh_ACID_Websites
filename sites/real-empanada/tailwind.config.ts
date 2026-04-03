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
        heading: "#263341",
        body: "#35485d",
        primary: "#31a16e",
        "primary-dark": "#28855a",
        secondary: "#ee9982",
        gold: "#dd9933",
        cream: "#fffceb",
        dark: "#253544",
        coral: "#ee9982",
        muted: "#abb8c3",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
