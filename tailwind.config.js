module.exports = {
  theme: {
    extend: {
      screens: {
        'dark-mode': { raw: '(prefers-color-scheme: dark)' },
      },
    },
  },
  variants: {
    gradients: ['responsive', 'hover'],
  },
  plugins: [
    require('tailwindcss-animatecss')({
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
      },
      variants: ['responsive'],
    }),
  ],
  purge: ['./src/**/*.css', './src/**/*.tsx', './src/*.css'],
}
