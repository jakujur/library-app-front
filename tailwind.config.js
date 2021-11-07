module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundImage: {
      'background': "url('/public/pikrepo.com.jpg')",
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
