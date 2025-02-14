/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 2s ease-in-out forwards',
        'pulse-slow': 'pulseSlow 6s ease-in-out infinite', // Slower pulse
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        pulseSlow: { 
          '0%, 100%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },
      fontFamily: {
        galada: ['Galada', 'sans-serif'],
        cabin: ['Cabin', 'sans-serif'],
        cabincon: ['Cabin Condensed', 'sans-serif'],
        source: ['Source Sans Pro', 'sans-serif'],
      },
    },
  },
  plugins: [daisyui],
};