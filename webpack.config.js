const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./source/assets/javascripts/main.js",
    docs: "./source/assets/javascripts/docs.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
