module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ec-sans': ['DM Sans', 'sans-serif']
      },
      colors: {
        'ec-cream': '#F8E9DD',
        'ec-card-white': '#FFFBF6',
        'ec-brown': {
          400: '#92857A',
          700: '#382314'
        },
        'ec-cyan': '#76B5BC',
        'ec-orange': '#EC755D'
      }
    },
  },
  plugins: [],
}
