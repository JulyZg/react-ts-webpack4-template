const {
    resolve
} = require("path");
const {
    merge
} = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const config = {
    mode: "production",
    output: {
        filename: "js/[name].js",
        path: resolve(__dirname, "../build")
    },
    devServer: {
        // 项目构建后的路径
        contentBase: resolve(__dirname, 'src'),
        // 开启gzip压缩
        compress: true,
        //端口号
        port: 8888,
        //自动打开浏览器
        open: true,
    }
}

module.exports = merge(baseConfig, config);