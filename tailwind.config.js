/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.pug"
  ],
  theme: {
    extend: {
      colors: {
        'myred' : '#cc1730',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

