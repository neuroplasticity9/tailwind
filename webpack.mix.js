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
    ],
});



/*
 |--------------------------------------------------------------------------
 | Website
 |--------------------------------------------------------------------------
 */

mix
    .js('./src/app.js', './docs/assets/main.js')
    .sass('./src/app.scss', './docs/assets/main.css')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('./tailwind.config.js')],
    })
    .copyDirectory('./src/images','./docs/images')
    .copy('./src/app.html', './docs/index.html');