/** @type {import('tailwindcss').Config} */

const daisyui = require('daisyui');

module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};