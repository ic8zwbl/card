const colors = require("tailwindcss/colors")

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.coolGray,
      },
      fontFamily: {
        roboto: "Roboto",
        inter: "Inter",
        sig: "Herr Von Muellerhoff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
