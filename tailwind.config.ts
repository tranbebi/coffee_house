import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        karlar:['kalar', 'sans-serif']
      },
      colors: {
        'light-coffee':'#C89F94',
        'light-coffee2':'#BCBAB8',
        'coffee':{
          200:'#C89F94',
          400:'#A25F4B',
          600:'#744838',
        }

      },
      keyframes: {
        sliderDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        // fadeIn:{
        //   from:{opacty:0},
        //   to:{opacty:1}
        // }
      },
      animation:{
        sliderDown:'sliderDown .6s ease-in-out',
        fadeIn:'fadeIn 0.5s ease-in-out',
      },
      backgroundImage:{
        'sider-bg-halloween':'url("/img/halloween.jpg")',
        'silder-bg':'url("/img/coffee_gau_silder.jpg")',
        'product-card1':'url("/img/story1.jpg")',
        'product-card2':'url("/img/story2.jpg")',
      }
    },  
  },
  plugins: [],
} satisfies Config;
