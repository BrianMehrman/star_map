const path = require("path");

module.exports = {
  context: __dirname,
  devtool: 'inline-source-map',
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    mainFields: ["module", "webpack", "web", "main"],
    extensions: [".js", ".jsx", ".json", "*"],
    alias: {
      src: path.resolve(__dirname, "src")
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
