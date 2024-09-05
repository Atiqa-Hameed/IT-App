/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6A54F4',
        black: '#000000',
        white: '#FFFFFF',
      },
      fontFamily: {
        dubai: ['Dubai', 'sans-serif'],
        sans: ['Roboto', 'sans-serif'],  
        
      },
    },
  },
  plugins: [],
}

