const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development', // Set mode to 'development'
  entry: {
    index: './index.js',       // Entry point for the Home page
    list: './list.js',         // Entry point for the List page
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js', // [name] will be replaced by the entry point name (e.g., index.bundle.js, list.bundle.js)
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    // Generate index.html
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html', // Output file name
      chunks: ['index'],      // Include only the 'index' entry point
    }),
    // Generate list.html
    new HtmlWebpackPlugin({
      template: './list.html',
      filename: 'list.html',  // Output file name
      chunks: ['list'],       // Include only the 'list' entry point
    }),
    // Extract CSS into separate files
    new MiniCssExtractPlugin({
      filename: '[name].styles.css', // [name] will be replaced by the entry point name (e.g., index.styles.css, list.styles.css)
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    open: true, // Automatically open the browser
  },
};