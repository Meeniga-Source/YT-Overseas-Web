/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        border: '#e5e7eb', // your custom border color
      },
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // make sure this includes your component files
  ],
  plugins: [],
}


// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
      colors: {
        primary: 'hsl(270, 91%, 65%)',
        secondary: 'hsl(30, 100%, 60%)',
        accent: 'hsl(290, 91%, 70%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        fade: 'fadeIn 1s ease-out forwards',
        scaleIn: 'scaleIn 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        scaleIn: {
          '0%': { opacity: 0, transform: 'scale(0.9)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
