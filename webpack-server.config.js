// webpack.config.js
const path = require("path")

module.exports = {
    watchOptions: {
        ignored: /node_modules/,
    },
    devtool: false,
    mode: 'development',
    entry: "./App.jsx",
    externalsType: 'commonjs',
    externals: {
        'react': 'react'
    },
    output: {
        publicPath: "/",
        path: path.resolve(__dirname),
        filename: "server.bundle.js",
        library: {
            type: 'commonjs'
        }
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        envName: "development"
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
}
