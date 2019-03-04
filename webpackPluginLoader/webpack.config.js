const path = require('path');
// const UploadPlugin = require('./webpackPlugins/UploadPlugin.js');
const QiniuUploadPlugin = require('./webpackPlugins/QiniuUploadPlugin.js');
module.exports = {
    mode: 'development',
    entry: {
        build : './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['test1']
                    }
                }
            }
        ]
    },
    plugins: [
        // new UploadPlugin(),
        new QiniuUploadPlugin()
    ]
    /**
     module: {
         rules: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: "babel-loader"
         }]
     }
     */
}