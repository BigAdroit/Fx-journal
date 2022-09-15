/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.html"],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      fontFamily: {
        'rubik' : ['Rubik', 'sans-serif'],
        'lato' : ['Lato', 'sans-serif'],
        'opensans' : [' Open Sans', 'sans-serif']
      },
      colors: {
        'deep-blue': '#010c48',
        'blue' : '#0c34f0',
        'blue-shade-one' : '#0026c2',
        'gray-shade-one' : '#f3f5fe',
        'gray-shade-two' : '#d7edf8',
        'white' : '#ffffff',
        'black-shade-one' : '#0b0b16',
        'gray-shade-three' :  '#828ca0'
      }
    },
  },
  plugins: [require("daisyui")],
}
