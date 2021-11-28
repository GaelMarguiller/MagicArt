module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('#17140f', 'currentColor'),
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}