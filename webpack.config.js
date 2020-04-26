const path = require("path");

module.exports = {
  context: __dirname,
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
  }
};
