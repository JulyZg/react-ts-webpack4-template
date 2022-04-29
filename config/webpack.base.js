const {
    resolve
} = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/index.tsx",
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /.(jpg|png|gif)$/,
                loader: "url-loader",
                options: {
                    limit: 1024 * 8,
                    name: "[hash:10].[ext]",
                    esModule: false
                }
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.(js|ts|tsx)$/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-react", "@babel/preset-typescript"]
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],
    // 资源和入口起点超过指定文件限制
    performance: {
        hints: false
    },
    resolve: {
        extensions: ['.js', '.tsx']
    }
}