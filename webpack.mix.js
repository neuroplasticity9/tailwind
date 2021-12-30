const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

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


 mix.webpackConfig({
   plugins: [
       new BrowserSyncPlugin({
           files: [
               'src/**/*',
           ]
       })
   ]
});






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
   })
   .copy('./src/app.html', './index.html');