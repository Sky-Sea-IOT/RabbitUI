const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.less$/i,
                use: [
                    //分离样式文件
                    { loader: MiniCssExtractPlugin.loader },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        // 文件命名
                        name: '[name].[ext]',
                        outputPath: 'images/',
                        // 小于 2k 的图片转成 base64 编码
                        limit: 2024,
                    },
                }, ],
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 4096,
                        name: '[name]_[hash:5].[ext]',
                        outputPath: 'style/fonts/',
                    },
                },
            },
            {
                test: /\.(html|tpl)$/,
                use: {
                    loader: 'html-loader',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts'],
    },
    plugins: [new webpack.optimize.ModuleConcatenationPlugin()],
};