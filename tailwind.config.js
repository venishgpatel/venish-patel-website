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
        20: 'color-mix(in srgb, var(--color-primary), transparent 20%);',
        40: 'color-mix(in srgb, var(--color-primary), transparent 40%);',
        80: 'color-mix(in srgb, var(--color-primary), transparent 80%);',
        variant: '',
        disabled: ''
      },
      'primary-opposite': {
        DEFAULT: 'var(--color-primary-opposite)',
      },
      'secondary': {
        DEFAULT: 'var(--color-secondary)',
        20: 'color-mix(in srgb, var(--color-secondary), transparent 20%);',
        40: 'color-mix(in srgb, var(--color-secondary), transparent 40%);',
        80: 'color-mix(in srgb, var(--color-secondary), transparent 80%);',
        variant: '',
        disabled: ''
      },
      'secondary-opposite': {
        DEFAULT: 'var(--color-secondary-opposite)',
      },
      'surface': 'var(--color-surface)',
      'surface-opposite': 'var(--color-surface-opposite)',
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
