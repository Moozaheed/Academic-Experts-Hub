import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Outfit", "Inter", "sans-serif"],
      },
      colors: {
        navy: {
          900: "#0F172A",
          800: "#1E293B",
          700: "#334155",
          600: "#475569",
        },
        accent: {
          DEFAULT: "#6366F1",
          dark: "#4F46E5",
          light: "#818CF8",
          purple: "#8B5CF6",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-accent": "linear-gradient(135deg, #6366F1, #8B5CF6)",
        "gradient-hero": "linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #312E81 100%)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scroll-left": "scroll-left 30s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        "glass-lg": "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
        glow: "0 0 40px rgba(99, 102, 241, 0.3)",
        "glow-lg": "0 0 80px rgba(99, 102, 241, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
