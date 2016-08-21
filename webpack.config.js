var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        'main': './src/scripts/index.js',
        'main.min': './src/scripts/index.js',
    },
    output: {
        path: './build/scripts/',
        filename: '[name].js'
    },
    bundles: [
        {
            name: 'homepage',
            files: [
                './apps/homepage/scripts/index.js',
            ]
        }
    ],
    module: {
        loaders: [
            { 
                test: /\.html$/,
                loader: 'html' 
            },
            {
                test: /\.js$/,
                loader: 'ng-annotate',
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin ({
            include: /\.min\.js$/,
            compress: {
                drop_console: false
            }
        })
    ]
}