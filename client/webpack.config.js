var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        "webpack-dev-server/client?http://localhost:1111",
        "./src/js/app.js"
    ],
    output: {
        path: "./dist/js/",
        publicPath: "/dist/js/",
        filename: "app.js"
    },
    devServer: {
        inline: true,
        hot: true,
        port: 1111
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel"
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ],
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('../../dist/css/style.css', {
            allChunks: true
        }),
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
}
