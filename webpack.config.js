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
    rules : [
      {
        test: /\.jsx?$/,
        enforce: "pre",
        exclude: /node_modules/,
        loader: 'eslint-loader'
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
