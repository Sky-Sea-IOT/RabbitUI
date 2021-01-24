/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
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
                    sourceMap: true
                },
                exclude: /node_modules/
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            },
            {
                test: /\.css$/i,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' }
                ]
            },
            {
                test: /\.less$/i,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true,
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    },
                    { loader: 'postcss-loader' }
                ]
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
                        limit: 2024
                    }
                }]
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 4096,
                        name: '[name].[ext]',
                        outputPath: 'styles/fonts/'
                    }
                }
            },
            {
                test: /\.(html|tpl)$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        //分离出css文件
        new MiniCssExtractPlugin({
            filename: 'styles/rabbit.css',
            chunkFilename: '[id].css',
            ignoreOrder: false
        })
    ],
    // 抽离出来的第三方插件库需要删掉，不发布
    optimization: {
        splitChunks: {
            minSize: 30000, //提取出的chunk的最小大小
            cacheGroups: {
                default: {
                    name: 'common',
                    chunks: 'initial',
                    minChunks: 2, //模块被引用2次以上的才抽离
                    priority: -20
                },
                vendors: {
                    //拆分第三方库（通过npm|yarn安装的库）
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor/vendor',
                    chunks: 'initial',
                    priority: -10
                }
            }
        }
    }
};