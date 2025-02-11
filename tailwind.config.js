/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 2s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      fontFamily: {
        galada: ['"Galada"', 'sans-serif'],
        cabin: ['"Cabin"', 'sans-serif'],
        cabincon: ['"Cabin Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [daisyui],
};