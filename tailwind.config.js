/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      fontFamily: {
        'fredoka': ['Fredoka One', 'sans-serif'],
        'cub':['Cubano', 'sans-serif'],
        'gil':['Gilroy','sans-serif'],
      },
      
    },
  },
  plugins: [
    require('daisyui'),
  ],
}