/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionDuration: {
        DEFAULT: '250ms',
      },
      animationDuration: {
        1500: '1500ms',
        2000: '2000ms',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
