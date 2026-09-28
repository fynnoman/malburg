import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FBF7F1",
          100: "#F5EFE5",
          200: "#EBE1D0",
          300: "#DCCDB1",
        },
        walnut: {
          50: "#EFE4D6",
          100: "#D9C3A2",
          200: "#A88462",
          300: "#7A5A3C",
          400: "#553D28",
          500: "#3D2A1D",
          600: "#2A1D14",
          700: "#1C130C",
        },
        stone: {
          150: "#EEE9E1",
        },
        ink: {
          DEFAULT: "#1F1B17",
          soft: "#3A342D",
          muted: "#6E655A",
        },
        moss: {
          500: "#5A6A4B",
          600: "#43503A",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightish: "-0.015em",
      },
      boxShadow: {
        glass: "0 1px 0 rgba(255,255,255,0.6) inset, 0 8px 30px rgba(28,19,12,0.08)",
        card: "0 2px 4px rgba(28,19,12,0.04), 0 12px 40px rgba(28,19,12,0.08)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        subtleRise: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        subtleRise: "subtleRise 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
