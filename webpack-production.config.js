// TODO: fix everything!

// var WebpackStrip = require('strip-loader');
// var webpack = require("webpack");
// var config = require('./webpack.config.js');
// var stripLoader = {
//   test: [/\.jsx?$/],
//   exclude: /node_modules/,
//   loader: WebpackStrip.loader('console.log')
// };

// var nodeEnv = new webpack.DefinePlugin({
//   "process.env" : {
//     "NODE_ENV" : JSON.stringify("production")
//   }
// });

// var prodPlugins = [
//   nodeEnv,
//   // new webpack.optimize.UglifyJsPlugin({
//   //   compress: {warnings: false},
//   //   comments: false,
//   //   minimize: false
//   // }),
//   new webpack.optimize.AggressiveMergingPlugin()
// ]

// config.mode = 'production';
// config.module.rules.push(stripLoader);

// config.plugins = config.plugins.concat(prodPlugins);
// config.watch = false;

// module.exports = config;
