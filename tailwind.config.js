/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Default sans-serif font
        dancing: ['Dancing Script', 'Inter'], // Custom Dancing Script font
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      colors: {
        primary: '#72BDBB',   // Soft teal
        secondary: '#4A9D9B', // Dark teal
        accent: '#FFD166',    // Mustard yellow
        neutralGray: '#F0F4F4', // Light neutral gray
        dark: '#34495E',      // Deep slate blue
        highlight: '#BCE3E2', // Light teal for highlights
      },
    },
  },
  plugins: [],
}
