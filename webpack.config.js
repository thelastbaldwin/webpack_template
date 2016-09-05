var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve('src/js'),
  entry: './app.js',
  output: {
    path: path.resolve('build/'),
    publicPath: '/public/',
    filename: 'js/bundle.js'
  },
  plugins: [
    new ExtractTextPlugin("css/styles.css")
  ],
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
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style-loader','css-loader!autoprefixer-loader')
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!sass-loader')
      },
      {
        test: /\.(png|jpe?g|gif|ttf|eot)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=80000'
      }
    ]
  },
  watch: true
}
