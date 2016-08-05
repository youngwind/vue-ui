/**
 * Created by youngwind on 16/8/1.
 */

var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    watch: true,
    entry: {
        index: ['./index.js'],
        example: ['./example/example.js']
    },
    output: {
        path: __dirname + '/dist',
        filename: "[name].js"
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: "eslint-loader",
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.html/,
                loader: "raw-loader"
            },
            {
                test: /\.scss/,
                loader: "style-loader!css-loader!sass-loader"
            },
            {
                test: /\.css/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: './example/example.html'}
        ], {})
    ]
};
