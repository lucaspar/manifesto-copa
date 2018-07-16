const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');
const path = require("path");

// GET CONFIG FROM .ENV
require('dotenv').config();
process_env = {};
Object.keys(process.env).map( k => process_env[k] = JSON.stringify(process.env[k]) );

// CONSOLE SUMMARY
console.log('\n-----------');
console.log("APP:\t\t", process.env.appName);
console.log("VERSION:\t", process.env.version);
console.log("ENVIRONMENT:\t", process.env.environment);
console.log('-----------\n\n');

// WEBPACK SETTINGS
module.exports = function (env, argv) {
    return {

        mode: process.env ? process.env.environment : 'production',
        devtool: process.env && process.env.environment === 'production' ? 'source-maps' : 'eval',
        context: path.join(__dirname, "/src"),
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            watchContentBase: true,
            compress: true,
            lazy: false,
            open: true,
            overlay: true,
            host: '0.0.0.0',
            port: 1337,
        },
        entry: {
            app: "./main.js",
        },
        output: {
            path: path.join(__dirname, "/dist"),
            filename: "[name].bundle.js",
        },
        plugins: [
            new VueLoaderPlugin(),
            new webpack.DefinePlugin({
                'process.env': process_env
            }),
            new CopyWebpackPlugin([
                { from: '../static' }
            ]),
        ],
        node: {
            fs: "empty",
        },
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@': path.join(__dirname, "/src"),
                'vue$': 'vue/dist/vue.esm.js'
            },
        },
        module: {
            rules: [{
                    test: /\.jsx?$/,
                    exclude: /^node_modules$/,
                    use: [{
                        loader: "babel-loader",
                        options: {
                            presets: ["env"],
                            plugins:[ 'transform-object-rest-spread' ],
                        },
                    }],
                },
                {
                    test: /index\.html$/,
                    loader: "file-loader",
                    options: {
                        name: "index.html",
                    }
                },
                {
                    test: /\.css$/,
                    use: ['vue-style-loader', 'style-loader', 'css-loader'],
                },
                {
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', "sass-loader"],
                },
                {
                    test: /\.vue$/,
                    loader: "vue-loader",
                },{
                    test: /\.(png|jpg|webp|gif|ico)$/,
                    use: "url-loader",
                },{
                    test: /\.svg$/,
                    use: "file-loader",
                },
            ],
        },

    };
};