import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        spectro: '#F8E56C',
        havoc: '#E649A6',
        fusion: '#F0744E',
        aero: '#74F3B6',
        electro: '#B46BFF',
        glacio: '#41AEFB',
        fiveStar: '#F5D736',
        fourStar: '#B46BFF',
        threeStar: '#369BF9',
        twoStar: '#21B627',
        oneStar: '#CCD1D6'
      },
      fontFamily: {
        sans: ['Inter Variable', ...defaultTheme.fontFamily.sans]
      }
    },
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1280px'
      }
    }
  },

  plugins: []
} as Config;
