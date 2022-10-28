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
      keyframes: {
        'custom-bounce': {
          '0%, 100%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
