/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/svg/**/*.{js,ts,jsx,tsx}',
    './public/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily:{'Poppins': ['"Poppins"'],},
      colors: {
        'licexdark': {
          darkblue: "#02041A",
          lightblue: "#313346",
          steel: "#D3D8E8"
        },
        'licexlight': {
          shadowgray: "#D7DBDE",
          lightblue: "#D1EAFF"
        },
        'licex': {
          blue: "#005498",
          gray: "#777E82"
        },
      },
    },
  },
  plugins: [],
}
