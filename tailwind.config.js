/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/pageComponents/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      raleway: ['Raleway', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif']
    }
  },
  variants: {},
  plugins: []
};
