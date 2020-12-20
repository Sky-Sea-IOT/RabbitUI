const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
        contentBase: '../dist',
    },
    plugins: [
        new CleanWebpackPlugin({
            root: path.resolve(__dirname, '../dist'),
            verbose: true,
            dry: false,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: path.join(__dirname, '../examples/dist/index.html'),
            template: path.join(__dirname, '../examples/index.html'),
        }),
        new FriendlyErrorsPlugin(),
    ],
});