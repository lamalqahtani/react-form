/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#020617',
        secondary: '#f1f5f9',
        warning: '#dc2626',
        notification :'#FF2E63',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

