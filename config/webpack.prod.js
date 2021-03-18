const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
	.BundleAnalyzerPlugin;

module.exports = merge(common, {
	mode: "production", //设置process.env.NODE_ENV为"production"
	devtool: "cheap-module-source-map",
	plugins: [
		new BundleAnalyzerPlugin(),
	],
});
