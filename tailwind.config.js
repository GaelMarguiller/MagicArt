module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('#17140f', 'currentColor'),
    }),
    extend: {
      colors: {
        headerFooterBlack: '#1F1F1F',
        blackBackground: '#333333',
        textColorHeader: '#A0A0A0'
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}