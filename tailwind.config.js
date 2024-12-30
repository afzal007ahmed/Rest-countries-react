/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'dark-mode1' : 'rgba(32,45,54,255)' ,
        'dark-mode-2' : 'rgba(43,55,67,255)', 
        'custom-grey' : 'hsl(0, 0%, 98%)'
      }
    },
  },
  plugins: [],
}

