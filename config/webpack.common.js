const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.ts',
    },
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: /node_modules/,
            use: {
                loader: 'ts-loader',
            },
        }, ],
    },
    resolve: {
        extensions: ['.js', '.ts'],
    },
    plugins: [
        new CleanWebpackPlugin({
            root: path.resolve(__dirname, './dist'),
            verbose: true,
            dry: false,
        }),
        //分离出css文件
        new MiniCssExtractPlugin({
            filename: 'style/rabbit.css',
            chunkFilename: '[id].css',
            ignoreOrder: false,
        }),
    ],
};