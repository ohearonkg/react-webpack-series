const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: "./public/index.html",
      minify: true,
      title: "Webpack Starter Example"
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        include: path.resolve(__dirname, "src"),
        use: {
          loader: "babel-loader",
          options: {
            babelrc: true
          }
        }
      },
      {
        test: /\.css$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          {
            // Vendor Prefixing CSS for Cross
            // Browser Support
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [
                require('postcss-flexbugs-fixes')(),
                // Without any Options Defaults to
                // Stage 2
                require("postcss-preset-env")({
                  autoprefixer: {
                    grid: true
                  }
                }),
                require("postcss-normalize")
              ]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
