const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    mode: "production",
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/dist/",
        filename: "rabbit.min.js",
        library: "rabbit",
        libraryTarget: "umd",
        umdNamedDefine: true,
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    // css-loader
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                        },
                    },
                    //自动添加不同浏览器样式前缀
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            plugins: [autoprefixer()],
                        },
                    },
                ],
            },
            {
                // 将 Less 文件编译为 CSS 文件
                test: /\.less$/,
                use: [
                    //分离样式文件
                    { loader: MiniCssExtractPlugin.loader },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "less-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    //自动添加不同浏览器样式前缀
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            plugins: [autoprefixer()],
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/i,
                use: [{
                    loader: "url-loader",
                    options: {
                        // 文件命名
                        name: "[name].[ext]",
                        outputPath: "style/images/",
                        // 小于 2k 的图片转成 base64 编码
                        limit: 2024,
                    },
                }, ],
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/i,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 4096,
                        name: "[name]_[hash:5].[ext]",
                        outputPath: "style/fonts/",
                    },
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
    plugins: [
        //分离出css文件
        new MiniCssExtractPlugin({
            filename: "style/rabbit.css",
            chunkFilename: "[id].css",
            ignoreOrder: false,
        }),
        new UglifyJSPlugin({
            uglifyOptions: {
                parallel: true,
                sourceMap: true,
                //删除注释
                comments: false,
                //删除console 和 debugger  删除警告
                warnings: false,
                drop_debugger: true,
                drop_console: true,
                beautify: true,
            },
        }),
    ],
};