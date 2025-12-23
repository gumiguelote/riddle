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
        gold: "#C5A059",
        darkred: "#8B0000",
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
