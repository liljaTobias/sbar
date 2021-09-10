const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { GenerateSW, InjectManifest } = require("workbox-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, "build"),
        filename: "index.bundle.js",
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    mode: process.env.NODE_ENV || "development",
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    devServer: {
        port: 9000,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                type: 'asset/resource'
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
        new InjectManifest({
            swSrc: path.resolve(
                __dirname,
                'src/service-worker.js'
            ),
            swDest: "service-worker.js"
        }),
        new CopyPlugin({
            patterns: [
                { from: "src/manifest.json", to: "manifest.json" },
                { from: "src/images/icon-192x192.png", to: "images/icon-192x192.png" },
                { from: "src/images/icon-192x192.png", to: "images/icon-512x512.png" }
            ]
        })
    ],
};