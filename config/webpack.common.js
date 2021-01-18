const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackBar = require("webpackbar");

module.exports = {
	output: {
		filename: "bundle.js",
	},
	resolve: {
		alias: {
			"@": path.join(__dirname, "../src"),
		},
		extensions: [".js", ".jsx"],
	},
	module: {
		rules: [
			{
				test: /\.(png|jpg|gif)$/i,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 8192,
						},
					},
				],
				type: "javascript/auto",
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: ["file-loader"],
			},
			{
				test: /\.ico$/,
				use: ["url-loader"],
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
							localIdentName: "[local]___[hash:base64:5]",
						},
					},
					{
						loader: "less-loader",
						options: {
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
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env"],
						},
					},
					"eslint-loader",
				],
			},
			{
				test: /\.svg$/,
				loader: "svg-inline-loader",
			},
		],
	},

	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: "index.html",
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css",
		}),
		new WebpackBar(),
	],
};
