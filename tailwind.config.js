module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'purple': '#8C79A7',
        'l-purple':'#C2B5D5',
        'red':'#F25555',
        'l-red':'#F27172',
        'grey-bg':'#1E1E1E'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
