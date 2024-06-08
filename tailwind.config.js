/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'black': '#0000000',
        'darkBlue': '#0E46A3'
      }
    },
  },
  plugins: [],
}

