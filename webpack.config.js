const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/glow.js',
  output: {
    filename: 'glow.js',
    path: path.resolve(__dirname, 'build'),
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }
    ]
  }
//    plugins: [
//    new webpack.optimize.UglifyJsPlugin({
//     minimize: false,
//     compress: false
//    })
//  ]
};