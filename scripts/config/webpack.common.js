const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackBar = require("webpackbar");
const { isDev, PROJECT_PATH } = require('../constants');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: resolve(PROJECT_PATH, "./src/index.tsx"),
    output: {
        filename: `js/[name]${isDev ? '' : '.[hash:8]'}.js`,
        path: resolve(PROJECT_PATH, "./dist")
    },
    resolve: {
        alias: {
            "@": resolve(PROJECT_PATH, "./src"),
        },
        extensions: [".ts", ".tsx", ".jsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?|ts|js|jsx$/,
                loader: 'babel-loader',
                options: { cacheDirectory: true },
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10 * 1024,
                            name: '[name].[contenthash:8].[ext]',
                            outputPath: 'assets/images',
                        },
                    },
                ],
                type: "javascript/auto",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[contenthash:8].[ext]',
                            outputPath: 'assets/fonts',
                        },
                    }
                ],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.less$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            sourceMap: isDev,
                            localIdentName: "[local]___[hash:base64:5]",
                        },
                    },
                    {
                        loader: "less-loader",
                        options: {
                            sourceMap: isDev,
                            strictMath: true,
                            noIeCompat: true,
                        },
                    },
                    "postcss-loader",
                ],
            },
            {
                test: /\.scss/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                    "postcss-loader",
                ],
            },
            {
                test: /\.svg$/,
                loader: "svg-inline-loader",
            },
        ],
    },

    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: resolve(PROJECT_PATH, './public/index.html'),
            filename: 'index.html',
            cache: false
        }),
        new WebpackBar({
            name: isDev ? '正在启动' : '正在打包',
            color: '#fa8c16',
        }),
        //检查ts类型，并报错
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                configFile: resolve(PROJECT_PATH, './tsconfig.json'),
            },
        }),
        //热更新
        new webpack.HotModuleReplacementPlugin(),
        // new CopyPlugin({
        //     patterns: [
        //         {
        //             context: resolve(PROJECT_PATH, './public'),
        //             from: '*',
        //             to: resolve(PROJECT_PATH, './dist'),
        //             toType: 'dir',
        //         },
        //     ],
        // }),
    ],
};
