import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

const config: webpack.Configuration = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "[name].min.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"],
    alias: {
      components: path.resolve(__dirname, "..", "src/components"),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Address Book",
      meta: {
        viewport: "width=device-width,initial-scale=1.0",
      },
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 4000,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [
                require("autoprefixer")({ grid: true }),
                require("cssnano")({ preset: "default" }),
              ],
              minimize: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              data: `@import "src/css/partials/_variables";`,
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|otf|svg|png|jpg)$/,
        loader: "file-loader",
      },
      {
        test: /\.(woff|woff2)$/,
        loader: "url-loader",
      },
    ],
  },
};

export default config;
