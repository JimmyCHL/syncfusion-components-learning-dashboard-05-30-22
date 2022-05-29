// craco.config.js
// craco stands for "create react app configration OVERRIDE" TO customized react config without touching webpack and ejection.
module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};
