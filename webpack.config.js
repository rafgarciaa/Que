const path = require("path");

module.exports = {
  entry: [
    'regenerator-runtime/runtime',
    path.join(__dirname, "frontend", "que.jsx")
  ],
  
  output: {
    path: path.join(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
        exclude: /node_modules/
      }
    ]
  }
};
