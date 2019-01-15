const webpack = require("webpack");
const WebpackStrip = require('strip-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const config = require('./webpack.config.js');

const stripLoader = {
  loader: WebpackStrip.loader('debug', 'console.log')
};

const prodPlugins = [
    new MiniCssExtractPlugin({
      filename: "./css/styles[hash].css"
    }),
    new webpack.optimize.AggressiveMergingPlugin()
]

config.mode = 'production';
// config.module.rules[0] are js/jsx rules
config.module.rules[0].use.unshift(stripLoader);

/* 
 * config.module.rules[1].use[0] is the style-loader
 * overriding this rule generates an actual file
 */
config.module.rules[1].use[0] = {
  loader: MiniCssExtractPlugin.loader
}
config.plugins = config.plugins.concat(prodPlugins);
config.optimization = {
  minimizer: [new UglifyJsPlugin()]
};
config.watch = false;

delete config.devServer;

module.exports = config;
