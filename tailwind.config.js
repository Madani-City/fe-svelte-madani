/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
