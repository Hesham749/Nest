/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],

  theme: {
    extend: {
      colors:{
        primaryColor: '#3bb77e',

        secondaryColor: '#d9f7e8',
        darkSecondaryColor: '#bce3c9',
        content:'#7e7e7e',
        'my-orange':"#ffc107",
        btnColor:'#27a56c'

    },
    },

    container: {
      center: true,
  },

  },
  plugins: [],
}
