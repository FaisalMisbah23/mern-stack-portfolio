/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderColor: ['active', 'focus'],
      screens: {
        'max-w-[768px]': { max: '768px' },
        'max-w-[600px]': { max: '600px' },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.before-ellipsis': {
          content: "'...'",
          position: 'absolute',
          bottom: '0',
          right: '0',
        },
      });
    },
  ],
}