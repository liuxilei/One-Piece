const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        overlay: true,
        contentBase: path.join(__dirname, './release'), //跟目录
        open: true, //自动打开浏览器
        port: 6789, //端口
        proxy: {
            '/api/*': {
                target: 'http://localhost:1234'
            }
        }
    }
});