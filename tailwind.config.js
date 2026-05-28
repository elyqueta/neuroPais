/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#f0faf8',
          100: '#d4f0eb',
          200: '#a8e0d6',
          300: '#7ec8c0',
          400: '#4ab5a8',
          500: '#2a9d8f',
          600: '#1a7a6e',
          700: '#155f57',
          800: '#0f4840',
          900: '#0a312b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
