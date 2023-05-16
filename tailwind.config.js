/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    colors: {
      'primary': {
        DEFAULT: 'var(--color-primary)',
        variant: '',
        disabled: ''
      },
      'secondary': {
        DEFAULT: 'var(--color-secondary)',
        variant: '',
        disabled: ''
      },
      'surface': 'var(--color-surface)',
      'interactive': 'var(--color-interactive)',
      'error': 'var(--color-error)',
      'black': "#000000",
      'white': "#ffffff,"
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
        'tablet': '1.0rem',
        'laptop': '1.5rem',
        'desktop': '2.0rem'
      },
      screens: {
        'tablet': '640px',
        'laptop': '992px',
        'desktop': '1280px'
      }
    },
    fontFamily: {
      'quicksand': ['QuickSand', 'sans-serif']
    },
    screens: {
      'tablet': '640px',
      'laptop': '992px',
      'desktop': '1280px'
    }
  },
  plugins: [],
}
