/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // "pink.css" accent from the original template — a warm rose/red
        brand: {
          50: '#fdf2f4',
          100: '#fbe1e6',
          400: '#f0708a',
          500: '#EF4444',
          600: '#d21f3c',
          700: '#ad1731',
        },
        ink: '#1b1b1f',
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '1400px',
      },
    },
  },
  plugins: [],
}
