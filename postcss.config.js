module.exports = {
    //为了解决各家厂商css3规范的兼容问题，需要使用webpack提供的postcss-loader和autoprefixer插件
    plugins: [
        require("autoprefixer")
    ]
}