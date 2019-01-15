var path = require('path');

// add this to plugins array to debug size issues
// var BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const HtmlWebPackPlugin = require("html-webpack-plugin");

//copies the index.html to dist and adds the appropriate link and script tags
const htmlPlugin = new HtmlWebPackPlugin({
  template: "index.html",
  filename: "index.html"
});

module.exports = {
  mode: 'development',
  context: path.resolve('src/'),
  entry: {
     app: './js/app.jsx'
    //  utils: './js/utils.js'
  },
  devtool: "cheap-module-source-map",
  output: {
    // filename: './js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  plugins: [
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
