module.exports = {
  purge: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
      ...theme('colors'),
      'fons': '#fd9853',
      'nav': '#daf7a6'
      }),
      fontFamily: {
        panteres:['"New Rocker"', 'cursive']
      },
      fontSize: {
        'base': ['20px'],
        'md': ['1.5em'],
        'lg': ['50px'],
        'xl': ['55px'],
        'xl2': ['55px'],
        'xl3': ['96px']
      },
      margin: {
        'sm':'10px',
        'md': '20px',
      },
      padding: {
        'sm':'10px',
        'md':'15px',
        'lg': '20px',
        'xl': '30px',
        'xl2': '35px'
      },
      gridTemplateColumns: {
        'portada': '1fr 3fr 1fr',
      },
      gridTemplateRows: {
        'portada': 'auto auto 50px auto 50px',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
