/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f5f7f4',
          100: '#e8ede6',
          200: '#d2dece',
          300: '#adc2a7',
          400: '#82a07a',
          500: '#5e7f57',
          600: '#496543',
          700: '#3a5136',
          800: '#2f412c',
          900: '#273625',
        },
        warm: {
          50: '#fdf8f3',
          100: '#faeee1',
          200: '#f4dbc0',
          300: '#ecc196',
          400: '#e2a06a',
          500: '#d87f45',
          600: '#c4663a',
          700: '#a35032',
          800: '#83402e',
          900: '#6a3627',
        }
      },
      fontFamily: {
        sans: ['Georgia', 'serif'],
        body: ['system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
