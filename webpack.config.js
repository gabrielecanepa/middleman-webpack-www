const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './source/assets/javascripts/main.js',
    home: './source/assets/javascripts/home.js',
    docs: './source/assets/javascripts/docs.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  }
};
