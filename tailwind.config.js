const plugin = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
module.exports = {
  content: ['./src/**/*.{index,html,js}'],
  theme: {
    container: {
      center: true,
      padding: {
        default: ".5rem",
        sm: "1rem",
      },
    },
    fontFamily: {
      sans: ['DM Sans', 'system-ui', 'sans-serif'],
      
    },

    extend: {
      keyframes: {
        slideIn: {
          '0%': {
            opacity: 0,
            transform: "translateX(-20px)",
          },
          '100%': {
            opacity: 1,
            transform: "translateX(0)",
          },
          },
     
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
        
          },
          },
        },
        animation: {
          ["slide-in"]: "slideIn .4s ease-in-out forwards",
          ["fade-in"]: "fadeIn .4s ease-in-out forwards",
       },
      colors: {
     verde: {
       200: '#ACEF75',
       300: '#91EE77',
       400: '#17E880',
       700: '#2E482C',
       800: '#16281F',
       900: '#0F1C15',
       950: '#030504',
     }
    }
    }
  },
  plugins: [plugin(({addUtilities}) => {
    addUtilities({
      ['.animate-1']: {
       "animation-delay": "100ms",
      },
      ['.animate-2']: {
       "animation-delay": "200ms",
      },
      ['.animate-3']: {
       "animation-delay": "300ms",
      },
      ['.animate-4']: {
       "animation-delay": "400ms",
      },
    });

  })],
};

  
