var path = require('path');

module.exports = {
  context: path.resolve('src/js'),
  entry: './app.js',
  output: {
    path: path.resolve('build/js'),
    publicPath: '/public/js/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'public'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],
    loaders : [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  watch: true
}
