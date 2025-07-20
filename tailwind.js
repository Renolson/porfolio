// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Make sure all your component files (like Footer.jsx) are included here
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Common pattern for React/Vite
    // Add any other paths where you use Tailwind classes
  ],
  theme: {
    extend: {
      fontFamily: {
        // 🚨 The font family name must match exactly what Google Fonts provides
        //   In this case, 'Dancing Script' is two words, so it needs quotes.
        'dancing-script': ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
};