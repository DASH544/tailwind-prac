/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*html','.build/js/*.js'],
  theme: {
    extend: {
      'keyframes':
      {
        'open-menu':
        {
          '0%':{transform:'ScaleY(0)'},
          '80%':{transform:'ScaleY(1.2)'},
          '100%':{transform:'ScaleY(1)'},
        }
      },
      'animation':
      {
        'open-menu':'open-menu ease-in-out 0.5s forwards',
      }
    },
  },
  plugins: [],
}

