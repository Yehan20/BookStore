/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        greenColor:'#152c18'

      },
      spacing: {
        'custom': '5em', // Replace with your desired padding value
      },
      fontSize: {
        'heading-very-large': '4rem',
        'heading-large': '3.2rem', // Replace with your desired font size value
        'heading-medium':'2.1rem',
        'text-buttons':'1.4rem'
      },
    },
  },
  plugins: [],
}

