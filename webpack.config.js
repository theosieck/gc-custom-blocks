const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    "./assets/js/editor.blocks": "./blocks/index.js"
    // './assets/js/frontend.blocks' : './blocks/frontend.js',
  },
  output: {
    path: path.resolve(__dirname),
    filename: "[name].js"
  },
  devtool: "cheap-eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@wordpress/default"],
            plugins: [
              [
                "@babel/transform-react-jsx",
                { pragma: "wp.element.createElement" }
              ]
            ]
          }
        }
      }
    ]
  }
};
