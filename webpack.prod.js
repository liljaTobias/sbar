const { merge } = require("webpack-merge")
const common = require('./webpack.common')
const path = require("path")

const { InjectManifest } = require("workbox-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
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
    ]
})