const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'output')
  },
  mode: 'none',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/index.html')
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      //   {
      //     test: /\.js$/,
      //     loader: path.resolve(__dirname, 'loaders', 'loaderA')
      //   },
      //   {
      //     test: /\.js$/,
      //     loader: path.resolve(__dirname, 'loaders', 'loaderB')
      //   },
      //   {
      //     test: /\.js$/,
      //     loader: path.resolve(__dirname, 'loaders', 'loaderC'),
      //     options: {
      //       name: 'loaderKing',
      //       size: 1000
      //     }
      //   },
      {
        test: /\.js$/,
        loader: path.resolve(__dirname, 'loaders', 'babelLoader'),
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  }
}
