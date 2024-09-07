/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.pug"
  ],
  theme: {
    extend: {
      width: {
        '500' : '500px',
        '300' : '300px',
      },
      heigh: {
        '500' : '500px',
        '300' : '300px',
      },
      colors: {
        'myred' : '#cc1730',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

