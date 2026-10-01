/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        datil: { 50: '#fdf6ef', 100: '#f8e6d2', 200: '#efc9a1', 400: '#d98d4f', 500: '#c46f2f', 600: '#a65724', 700: '#83421f', 900: '#3f2112' },
        dinero: { DEFAULT: '#118c4f', light: '#34b36b' },
        palma: { 50: '#eff8f1', 100: '#d8eedc', 500: '#2f8a4c', 600: '#23703c', 700: '#1d5932', 900: '#0f2e1a' },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        serif: ['Spectral', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
