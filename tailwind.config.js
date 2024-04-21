/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],

  theme: {
    extend: {
      colors:{
        primaryColor: '#3ab77d',
        secondaryColor: '#d9f7e8',
        content:'#adadad',

    },
    },

    container: {
      center: true,
  },

  },
  plugins: [],
}
