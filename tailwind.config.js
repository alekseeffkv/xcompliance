/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('./static/images/github-mark-light-64px.png')",
      },
      colors: {
        primary: '#24292f',
      },
    },
  },
  plugins: [],
};
