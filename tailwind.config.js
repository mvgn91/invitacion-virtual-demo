/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fraunces': ['Fraunces', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'allura': ['Allura', 'cursive'],
      },
      colors: {
        // 🌹 PALETA TRADICIONAL DE BODA — Estilo Crystal Clear
        'blush': {
          50: '#fef7f9',
          100: '#fce8ef',
          200: '#f9d1df',
          300: '#f4a9c3',
          400: '#ee7aa0',
          500: '#e54d7d',
          600: '#d42d5e',
          700: '#b01e45',
          800: '#8f1b39',
          900: '#771b33',
        },
        'champagne': {
          50: '#fefcf8',
          100: '#fdf7ed',
          200: '#f9edd6',
          300: '#f4dfb8',
          400: '#edcc94',
          500: '#e5b670',
          600: '#d9a156',
          700: '#c08b48',
          800: '#9d713e',
          900: '#7e5c34',
        },

        'petal': {
          50: '#fcf9f7',
          100: '#f9f3ed',
          200: '#f2e5d9',
          300: '#e8d2bf',
          400: '#ddbaa0',
          500: '#d3a384',
          600: '#c58b69',
          700: '#b17552',
          800: '#926047',
          900: '#774f3d',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
