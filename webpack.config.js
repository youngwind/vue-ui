/**
 * Created by youngwind on 16/8/1.
 */

module.exports = {
    watch: true,
    entry: './index.js',
    output: {
        path: __dirname + '/dist',
        filename: "index.js"
    },
    module: {
        loaders: [
            {
                test: /\.html/,
                loader: "raw-loader"
            },
            {
                test: /\.scss/,
                loader: "style-loader!css-loader!sass-loader"
            }
        ]
    },
    externals: {
        "vue": 'Vue'
    }
};
