// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'], // Default sans-serif
          serif: ['Lora', 'serif'],    // For headings
        },
        colors: {
          // Define your custom beige color if needed, or use existing grays
          // You can find exact hex codes from tools if you want to match perfectly
          'custom-beige': '#F2EBE5', // A warm, light beige similar to the image
          'dark-text': '#2A2A2A', // A very dark gray, almost black
        },
      },
    },
    plugins: [],
  }