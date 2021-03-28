import colors from 'tailwindcss/colors';

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#00CBA9",
      secondary: "#C4C4C4"
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
