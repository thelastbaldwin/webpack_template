var path = require('path');
// add this to plugins array to debug size issues
// var BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const HtmlWebPackPlugin = require("html-webpack-plugin");

//copies the index.html to dist and adds the appropriate link and script tags
const htmlPlugin = new HtmlWebPackPlugin({
  template: "index.html",
  filename: "index.html"
});

// TODO: determine if needed
const miniCSSPlugin = new MiniCssExtractPlugin({
  filename: "./css/styles.css"
});

module.exports = {
  mode: 'development',
  context: path.resolve('src/'),
  entry: {
     app: './js/app.jsx',
     utils: './js/utils.js'
  },
  devtool: "cheap-module-source-map",
  output: {
    filename: './js/[name].js'
  },
  plugins: [
    htmlPlugin
  ],
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
      //TODO: enhance with autoprefixer and other postCSS options
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ['style-loader', 'css-loader']
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
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080
  },
  watch: true
};
