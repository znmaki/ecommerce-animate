/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        'ads':'150px 810px 240px 150px',
        'ads-mini': 'repeat(3, 264px)'
      },
      gridTemplateRows:{
        'ads':'repeat(2, 340px)',
        'ads-mini': 'repeat(2, 88.8px)'
      }
    },
  },
  plugins: [],
}
