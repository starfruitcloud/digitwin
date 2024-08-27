const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");

module.exports = {
  // 指定入口文件
  entry: "./src/index.ts",

  // 开发模式使用，方便查错误
  devtool: "inline-source-map",

  // 指定打包文件所在目录
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  // 用来设置引用模块
  resolve: {
    extensions: [".ts", ".js"],
  },

  // 配置webpack的loader
  module: {
    rules: [{
        test: /.ts$/,
        use: 'raw-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.glsl$/,
        use: ['webpack-glsl-loader']
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: ['file-loader']
      }
    ],
  },

  // 配置webpack的插件
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "/public/index.html",
    }),
  ],
};