var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: [
    "babel-polyfill",
    "./src/entry.js"
  ],
  output: {
    publicPath: "/",
    filename: "index.js"
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, "src"),
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        }
      }
    ]
  }
};
