const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
	.BundleAnalyzerPlugin;

module.exports = merge(common, {
	mode: "production",
	devtool: "cheap-module-source-map",
	plugins: [
		// 定义环境变量为生产环境， 代码中使用： process.env.NODE_ENV === 'production' 来判断
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("production"),
			IS_DEVELOPMETN: false,
		}),
		new BundleAnalyzerPlugin(),
	],
});
