const colors = require('tailwindcss/colors');

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        general: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      colors: {
        'primary-light': colors.orange[200],
        'secondary-light': colors.green[100],
        'ternary-light': colors.slate[200],
        'primary-dark': colors.slate[900],
        'secondary-dark': colors.gray[800],
        'ternary-dark': colors.indigo[900],
      },
    },
  },
  plugins: [],
};
