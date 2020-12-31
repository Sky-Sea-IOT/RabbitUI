/**
 * 公共配置
 */

const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    sourceMap: true,
                },
                exclude: /node_modules/,
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                },
            },
            {
                test: /\.css$/i,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    {
                        loader: "'autoprefixer-loader'",
                    },
                ],
            },
            {
                test: /\.less$/i,
                use: [
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
                            lessOptions: {
                                javascriptEnabled: true,
                            },
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
                        name: '[name].[ext]',
                        outputPath: 'fonts/',
                        // outputPath: 'styles/fonts/',  打包的时候替换为这个
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
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        //分离出css文件
        new MiniCssExtractPlugin({
            filename: 'rabbit.css',
            // filename: 'styles/rabbit.css',  打包的时候替换为这个
            chunkFilename: '[id].css',
            ignoreOrder: false,
        }),
    ],
};