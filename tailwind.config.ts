/* Tailwind config for The Creative Clowns clone */
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: "#00B4B8",
          cyanDark: "#00ADB1",
          black: "#0D0D0D",
          ink: "#1F1D1D",
          gray: "#434343",
          midgray: "#888888",
          softgray: "#A5A5A5",
          pink: "#CC3366",
          coral: "#DF4C41",
          sky: "#6EC1E4",
          purple: "#8400AD",
          yellow: "#F1C40F",
        },
      },
      fontFamily: {
        display: ["var(--font-unbounded)", "system-ui", "sans-serif"],
        body: ["var(--font-roboto)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;