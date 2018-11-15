const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve('./build'),
    },
    devServer: {
        contentBase: './build',
        port: 3000,
        compress: true,// 服务器压缩
        open: true, // 自动打开浏览器
        hot: true   // 热更新
    },
    module: {},     // 模块配置
    plugins: [
        new CleanWebpackPlugin(['./build']),       // 清除文件
        new webpack.HotModuleReplacementPlugin(),  // 结合devServer的hot使用，必须在HtmlWebpackPlugin之前引入
        new HtmlWebpackPlugin({
            filename: 'index.html',             // 文件重命名
            template: './src/index.html',
            title: 'webpack模板',
            minify: {
                removeAttributeQuotes: true,    // 去除引号
                collapseWhitespace: true        // 去除空格
            },
            hash: true                          // 给js增加hash，类似js?235423453245

        }),
    ], 
    resolve: {}     // 配置解析
    
};