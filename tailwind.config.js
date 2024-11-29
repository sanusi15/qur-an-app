/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#45B8AC',
        secondary: '#FFFFFF',
        myred: '#FF5349'
      },
      backgroundImage:{
        mosque: "url('./src/assets/img/mosque-siluet.png')",
      }
    },
  },
  plugins: [],
}

