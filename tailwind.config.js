/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '992px',
      'desktop': '1280px'
    },
    colors: {
      primary: {
        DEFAULT: 'var(--color-primary)',
        variant: '',
        disabled: ''
      },
      secondary: {
        DEFAULT: 'var(--color-secondary)',
        variant: '',
        disabled: ''
      },
      surface: 'var(--color-surface)',
      interactive: 'var(--color-interactive)',
      error: 'var(--color-error)',
      black: "#000000",
      white: "#ffffff,"
    },
    fontFamily: {
      'quicksand': ['QuickSand', 'sans-serif']
    }
  },
  plugins: [],
}
