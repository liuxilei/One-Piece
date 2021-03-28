const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const { SERVER_HOST, SERVER_PORT } = require("../constants");
const proxySetting = require('../setProxy.js')


module.exports = merge(common, {
	target: "web",
	output: {
		publicPath: "/",
	},
	mode: "development", //设置process.env.NODE_ENV为"development"
	devtool: "inline-source-map",
	devServer: {
		compress: true, //为每个静态文件开启 gzip compression
		overlay: true, //出现编译器错误或警告时，在浏览器中显示全屏覆盖。 如果只想显示编译器错误
		useLocalIp: true, //使用本地ip打开当前服务，避免打开0.0.0.0:4399访问不到的问题
		open: true, //自动打开浏览器
		host: SERVER_HOST, //服务器可从外部访问
		port: SERVER_PORT, //指定端口，默认是8080
        stats: 'errors-only', // 终端仅打印 error
        clientLogLevel: 'silent', // 日志等级
		proxy: {
            ...proxySetting
		},
		historyApiFallback: true,
        hot: true, //热更新
	}
});
