const {
    resolve
} = require("path");
const {
    merge
} = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const config = {
    output: {
        filename: "js/[name].[contenthash:10].js",
        path: resolve(__dirname, "../build")
    },
    mode: "development"
}

module.exports = merge(baseConfig, config);