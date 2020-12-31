const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = merge(common, {
    devtool: 'eval-source-map',
    entry: {
        app: path.resolve(__dirname, '../test/main.ts'),
    },
    output: {
        path: path.resolve(__dirname, '../test/dist'),
        publicPath: '',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
    },
    devServer: {
        contentBase: '../test/',
        port: 8085,
        open: true,
        hot: true,
        inline: true,
        progress: true,
        compress: true,
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            filename: path.resolve(__dirname, '../test/dist/index.html'),
            template: path.resolve(__dirname, '../test/message/index.html'),
        }),
        new FriendlyErrorsPlugin(),
    ],
});