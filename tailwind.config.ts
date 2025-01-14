import { title } from "process";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        aircraftSuppliesCoverphoto:
          "url('../public/images/AircraftSuppliesImages/planecoverphoto.png')",
      },
      fontFamily: {
        title: ["Exo", "sans-serif"],
      },
      colors: {
        primary: "#0363CA",
        "black-rgba": "rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
