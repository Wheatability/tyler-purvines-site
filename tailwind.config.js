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
      fontSize: {
        'ec-sm': '15px',
        'ec-md': '18px',
        'ec-lg': '24px',
        'ec-xl': '30px',
        'ec-xxl': '32px',
        'ec-xxxl': '48px'
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
