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
      borderColor: theme => ({
        ...theme('colors'),
        'light': '#daf7a6'
      }),
      width: {
        '35':'35%'
      },
      borderWidth: {
        '5':'2.5px'
      },
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
      height: {
        'sm': '5px'
      },
      gridTemplateColumns: {
        'portada': '1fr 3fr 1fr',
        'portada-Desktop': 'repeat(2, .5fr) 45px repeat(3, .5fr)'
      },
      gridTemplateRows: {
        'portada': 'auto auto 50px auto 50px',
        'portada-Desktop': 'auto auto 2fr .5fr'
      },
      textColor: theme => theme('colors'),
     textColor: {
       'play': '#fc1b35'
     }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-base-buttons')({
      baseClass: '.button',
      colors: {
          theme: {
              primary: {
                  background: '#000',
                  text: '#fff', 
                  borderWidth: '1px',
                  activeBackground: '#000',
                  activeBorderWidth: '1px',
                  activeBorderColor: '#fff',
                  hoverBackground: '#d3cccc',
                  hoverBorderColor: '#000',
                  hoverBorderWidth: '1px',
                  hoverText: '#fc1b35'
              }
          }
      }
  }),
  require('tailwindcss-text-fill-stroke')()
  ],
}
