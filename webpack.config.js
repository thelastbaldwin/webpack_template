var path = require('path');

// add this to plugins array to debug size issues
// var BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

//copies the index.html to dist and adds the appropriate link and script tags
const htmlPlugin = new HtmlWebPackPlugin({
  template: "index.html",
  filename: "index.html"
});

const cleanWebpackPlugin = new CleanWebpackPlugin(['dist'])

module.exports = {
  mode: 'development',
  context: path.resolve('src/'),
  entry: {
     app: './js/app.jsx'
  },
  devtool: "cheap-module-source-map",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  plugins: [
    cleanWebpackPlugin,
    htmlPlugin
  ],
  module: {
    rules : [
      {
        test: /\.jsx?$/,
        enforce: "pre",
        exclude: [/dist/, /node_modules/],
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'eslint-loader',
            options: {
              failOnError: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/, /dist/],
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              }
            },
            {
              loader: 'postcss-loader'
            }
          ]
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
