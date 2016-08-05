/**
 * Created by youngwind on 16/8/1.
 */

module.exports = {
    watch: true,
    entry:{
        index:['./index.js'],
        example:['./example/example.js']
    },
    output: {
        path: __dirname + '/dist',
        filename: "[name].js"
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
    // externals: {
    //     "vue": 'Vue'
    // }
};
