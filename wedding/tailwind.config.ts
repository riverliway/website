import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./globals.css",
    "./education/**/*.{js,ts,jsx,tsx}",
    "./experience/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
