/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        officespacesabuja: {
          gold: '#6110B1',       // Satin Gold
          goldBright: '#b39266', // Slightly deeper gold for high-visibility light mode hover
          dark: '#ffffff',       // Swapped to pure white canvas
          surface: '#f8f9fa',    // Soft warm grey for luxury card backgrounds
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-jakarta)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};