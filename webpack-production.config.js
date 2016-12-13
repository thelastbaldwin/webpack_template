var WebpackStrip = require('strip-loader');
var devConfig = require('./webpack.config.js');
var stripLoader = {
  test: [/\.jsx?$/],
  exclude: /node_modules/,
  loader: WebpackStrip.loader('console.log')
};

devConfig.module.loaders.push(stripLoader);
devConfig.watch = false;

module.exports = devConfig;
