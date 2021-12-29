const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Fo development Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


/*
 |--------------------------------------------------------------------------
 | Website
 |--------------------------------------------------------------------------
 */

mix
   .js('./src/app.js', './assets/js/main.js')
   .sass('./src/app.scss', './assets/css/main.css')
   .options({
      postCss: [tailwindcss('./tailwind.config.js')],
   });
mix.copy('./src/index.html', './index.html');
