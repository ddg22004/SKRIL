/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-background': '#121212',
        'primary-text': '#FFFFFF',  
        'secondary-text': '#A3A3A3', 
      },
    },
  },
  plugins: [],
}

