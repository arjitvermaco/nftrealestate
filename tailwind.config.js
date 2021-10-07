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
        'grey-bg':'#1E1E1E',
        'ring-1':'#0060f9',
        'ring-2':'#d6c91f',
        'ring-3':'#fd42fd',
        'ring-4':'#e74e4e',
        'ring-5':'#8400ca',
        'ring-6':'#ff9700',
        'ring-7':'#00d933',
        'ring-8':'#00eef4'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
