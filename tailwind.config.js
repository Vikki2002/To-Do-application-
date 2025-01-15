/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        eater: ['Eater', 'cursive'],
        jersey: ['Jersey 15', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        rye: ['Rye', 'cursive'],
      },
    },
  },
  plugins: [],
}

