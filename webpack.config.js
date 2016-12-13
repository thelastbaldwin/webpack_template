var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve('src/'),
  entry: {
     app: './js/app.jsx',
    utils: './js/utils.js'
  },
  output: {
    path: path.resolve('build/'),
    publicPath: '/public/',
    filename: './js/[name].js'
  },
  plugins: [
    new ExtractTextPlugin("./css/styles.css")
  ],
  devServer: {
    contentBase: 'public'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],
    loaders : [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader')
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
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  watch: true
};
