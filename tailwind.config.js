const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
        mono: ['Share Tech Mono', ...defaultTheme.fontFamily.mono]
      }
    }
  },
  variants: {},
  plugins: []
}
