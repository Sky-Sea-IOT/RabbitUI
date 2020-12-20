const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: 'rabbit.min.js',
        library: 'rabbit',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true,
            parallel: true,
        }),
        new CompressionPlugin({
            filename: 'rabbit.min.js.gz[query]',
            algorithm: 'gzip',
            test: /\.(js|css)$/,
            threshold: 10240,
            minRatio: 0.8,
        }),
        //分离出css文件
        new MiniCssExtractPlugin({
            filename: 'styles/rabbit.css',
            chunkFilename: '[id].css',
            ignoreOrder: false,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
    ],
});