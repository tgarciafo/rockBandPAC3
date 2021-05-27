module.exports = {
  purge: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'orange': '#fd9853',
        'llima': '#daf7a6'
      }),
      borderColor: theme => ({
        ...theme('colors'),
        'llima': '#daf7a6'
      }),
      width: {
        '35':'35%'
      },
      borderWidth: {
        'base':'2.5px'
      },
      fontFamily: {
        'newRocker':['"New Rocker"', 'cursive']
      },
      fontSize: {
        'sm': ['1.25em'],
        'base': ['20px'],
        '35': ['35px'],
        'md': ['1.5em'],
        'lg': ['50px'],
        'xl': ['55px'],
        'xl2': ['55px'],
        'xl3': ['96px'],
        'card-title' : ['1.25rem']
      },
      margin: {
        'sm':'10px',        
        'md': '20px'
      },
      padding: {
        'xs': '8px',
        's': '25px',
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
      lineHeight: {
        'tight': '1.2'
       },
      textColor: theme => theme('colors'),
        textColor: {
        'red': '#fc1b35',
        'light-gray': '#6c757d',
        'gray': '#737373',
        'black': '#191919',
      }
    }
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          }
        }
      })
    },
    require('tailwindcss-base-buttons')({
      baseClass: '.button',
      colors: {
        theme: {
          primary: {
            background: '#000',
            text: '#fff', 
            borderWidth: '1px',
            activeBackground: '#000',
         /* activeBorderWidth: '1px',
            activeBorderColor: '#fff', */
            hoverBackground: '#d3cccc',
         /* hoverBorderColor: '#000',
            hoverBorderWidth: '1px', */
            hoverText: '#fc1b35'
          }
        }
      }
    }),
    require('tailwindcss-text-fill-stroke')()
  ],
}
