/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBlue: 'rgb(10,31,54)',
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  screens: {
    sm: '480px',
    md: '768px',
    lg: '1020px',
    xl: '1440px',
  },
  plugins: [],
}
