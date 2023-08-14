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
        barlow: ['Barlow', 'sans-serif'],
        barlowsemi: ['"Barlow Semi Condensed"'],
      },
      colors: {
        primary: '#FCCD25',
      },
    },
  },
  plugins: [],
}
