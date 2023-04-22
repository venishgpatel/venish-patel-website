/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '992px',
      'desktop': '1280px'
    },
  },
  plugins: [],
}
