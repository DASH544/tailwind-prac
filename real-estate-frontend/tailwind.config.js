/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      fontSize:
      {
        sm: '.75rem',
        base: '.875rem',
        md:'1rem',
        lg: '1.25rem',
        xl:'1.5rem',
        '2xl': '1.75rem',
        '3xl': '2.25rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      }
    },
  },
  plugins: [],
}

