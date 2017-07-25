var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// add this to plugins array to debug size issues
// var BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  context: path.resolve('src/'),
  entry: {
     app: './js/app.jsx',
     utils: './js/utils.js'
  },
  devtool: "cheap-module-source-map",
  output: {
    path: path.resolve('lib/'),
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
    rules : [
      {
        test: /\.jsx?$/,
        enforce: "pre",
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          failOnError: true
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!autoprefixer-loader'
        })
      },
      {
        test: /\.(png|jpe?g|gif|ttf|eot|woff2?|svg)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=80000'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  watch: true
};
