const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  entry: './src/index.js',
  mode: 'production',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'https://jameswotherspoon.github.io/Portfolio-alt/'
    //clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: ['html-loader']
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader', 
          'css-loader',
          { 
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  "postcss-preset-env"
                ],
              },
            }
          },
          'sass-loader'
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
    title: 'James Wotherspoon',
    filename: './index.html',
    template: './src/index.html',
    favicon: "./src/img/favicon.png"
      }),
    new HtmlWebpackPlugin({
        title: 'James Wotherspoon',
        filename: './about.html',
        template: './src/about.html',
        favicon: "./src/img/favicon.png"
        }),
    new HtmlWebpackPlugin({
      title: 'James Wotherspoon',
      filename: './cv.html',
      template: './src/cv.html',
      favicon: "./src/img/favicon.png"
      }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    })
  ],
};