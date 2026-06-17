/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
      "primary": "#EAB308",
      "secondary": "#3B82F6",
      "accent": "#F97316",
      "button": "#F9F6F4"
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { transform: "scale(1)", opacity: 0.5 },
          "50%": { transform: "scale(1.2)", opacity: 0 },
        },
      },
      animation: {
        "pulse-slow": "pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
