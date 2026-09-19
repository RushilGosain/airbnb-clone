/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Airbnb Cereal VF",
          "Plus Jakarta Sans",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      colors: {
        brand: {
          DEFAULT: "#E31C5F",
          dark: "#C13584",
          hover: "#D70466",
        },
        ink: "#222222",
        subtle: "#717171",
        line: "#DDDDDD",
      },
      maxWidth: {
        content: "1760px",
      },
      boxShadow: {
        card: "0 6px 16px rgba(0,0,0,0.12)",
        popover: "0 8px 28px rgba(0,0,0,0.28)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        scaleIn: {
          "0%": { opacity: 0, transform: "scale(0.98)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-out",
        scaleIn: "scaleIn 0.2s ease-out",
        slideUp: "slideUp 0.25s ease-out",
      },
    },
  },
  plugins: [],
};
