module.exports = {
  important: true,
  prefix: 'tw-',
  purge: {
    enabled: false,
    content: ['./src/**/*.{html,ts}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'main': 'Raleway',
      'secondary': 'Merriweather'
    },
    fontSize: {
      'xs': ['10px', '150%'], // Format: '{{name}}': '{{size}}' | ['{{size}}', '{{line-height}}']
      'sm': ['11px', '150%'],
      'lg': ['12px', '150%'],
      'base': ['13px', '150%'],
      'xl': ['14px', '150%'],
      '2xl': ['16px', '150%'],
      '3xl': ['18px', '150%'],
      '4xl': ['21px', '150%'],
      '5xl': ['24px', '150%'],
      '6xl': ['32px', '150%'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
