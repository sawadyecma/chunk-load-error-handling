const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type { import('webpack').Configuration } */
module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  // react-routerのため
  devServer: {
    historyApiFallback: true,
  },
};
