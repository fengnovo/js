const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './client/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve('./build'),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test:/\.(js|jsx)$/,
                use:['babel-loader'],
                exclude:/node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './build',
        port: 3000,
        compress: true,// 服务器压缩
        open: true, // 自动打开浏览器
        hot: true   // 热更新
    },
    plugins: [
        new CleanWebpackPlugin(['./build']),       // 清除文件
        new webpack.HotModuleReplacementPlugin(),  // 结合devServer的hot使用，必须在HtmlWebpackPlugin之前引入
        new HtmlWebpackPlugin({
            filename: 'index.html',             // 文件重命名
            template: './client/index.html',
            title: 'webpack模板',
            minify: {
                removeAttributeQuotes: true,    // 去除引号
                collapseWhitespace: true        // 去除空格
            },
            hash: true                          // 给js增加hash，类似js?235423453245

        }),
    ],
};