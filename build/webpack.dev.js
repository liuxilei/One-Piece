const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
	mode: "development",
	devtool: "cheap-module-eval-source-map",
	devServer: {
		compress: true, //为每个静态文件开启 gzip compression
		overlay: true, //出现编译器错误或警告时，在浏览器中显示全屏覆盖。 如果只想显示编译器错误
		contentBase: path.join(__dirname, "./release"), //跟目录
		useLocalIp: true, //使用本地ip打开当前服务，避免打开0.0.0.0:4399访问不到的问题
		open: true, //自动打开浏览器
		host: "0.0.0.0", //服务器可从外部访问
		port: 4399, //端口
		proxy: {
			"/api/*": {
				target: "http://localhost:1234",
			},
		},
	},
});
