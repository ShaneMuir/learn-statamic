module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
    theme: {
        colors: {
            gray: {
                '100': '#14161F',
                '200': '#1D2129',
                '300': '#35373F',
                '400': '#40424a',
                '500': '#8E8E8E',
                '600': '#AEABAB',
                '700': '#C3BFBF',
                '800': '#C3BFBF',
                '900': '#C3BFBF'
            },
            'red': '#DC183C',
            'red-dark': '#B33B51',
            'green': '#21FA90',
            'orange': '#FACC14',
            'orange-dark': '#F08A1E',
            'blue': '#009FFD',
            'blue-dark': '#008ADA',
            'aqua': '#A2E5AC',
            'yellow': '#FFF5B5',
            'purple': '#7A28CB',
            'black': 'black',
            'pink': '#FF6EA3',
            'white': 'white',
            'transparent': 'transparent',
        },
        extend: {
            borderColor: ({ theme }) => ({
                DEFAULT: theme('colors.gray.300')
            }),
            boxShadow: {
                'highlight': 'rgb(255 255 255 / 25%) 0px 1px 1px 0px inset, rgb(0 0 0 / 25%) 0px 4px 8px 0px',
                'glow-up': '0 -33px 55px -32px rgb(255 255 255 / 20%)',
                'glow': '0 2px 98px 7px rgba(211,82,105,0.27)',
                'glow-red': '0 2px 98px 7px rgba(211,82,105,0.27)',
                'glow-blue': '0 2px 98px 7px rgba(0, 159, 253, 0.27)'
            },
            fontFamily: {
                'sans': ['Inter', 'sans-serif']
            },
            fontSize: {
                '2xs': '.625rem',
                '8xl': '88px',
                '9xl': ['8rem', '.825'],
            }
        },
    },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
