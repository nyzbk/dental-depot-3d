/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'canvas': '#0F241C',
          'brass': '#C89D56',
          'mahogany': '#261613',
          'parchment': '#F4EEE5',
          'signal': '#E67E22',
          'muted': '#9EABA2',
          'border': 'rgba(200, 157, 86, 0.22)'
        }
      },
      fontFamily: {
        'display': ['Playfair Display SC', 'serif'],
        'body': ['Work Sans', 'sans-serif'],
        'mono': ['DM Mono', 'monospace']
      }
    },
  },
  plugins: [],
}
