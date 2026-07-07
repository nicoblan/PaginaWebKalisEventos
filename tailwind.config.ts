import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: "#174334",
          dark: "#0f2b22",
        },
        sage: {
          DEFAULT: "#809076",
        },
        nude: {
          DEFAULT: "#CBB9A3",
        },
        cream: {
          DEFAULT: "#F0EDE6",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-josefin)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: ".25em",
      },
    },
  },
  plugins: [],
};
export default config;
