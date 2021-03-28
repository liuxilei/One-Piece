const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;

module.exports = merge(common, {
    mode: "production", //设置process.env.NODE_ENV为"production"
    devtool: "cheap-module-source-map",
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
            ignoreOrder: false,
        }),
        new BundleAnalyzerPlugin(),
    ],
});