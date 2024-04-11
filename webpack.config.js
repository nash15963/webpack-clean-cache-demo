const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const { watch } = require('browser-sync');

module.exports = {
  entry: './src/js/index2.js',
  output: {
    filename: './src/js/index2.[contenthash].js', // 可以不執行 ES6 module 的模組語法
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // 可以在這裡添加更多文件類型的處理規則，例如處理圖片或轉譯JSX
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true,
    }),
    new HotModuleReplacementPlugin(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
      watch: true,
    },
    hot: true,
  },
};


// module.exports = {
//   entry: {
//     pageOne: './src/pageOne/index.js',
//     pageTwo: './src/pageTwo/index.js',
//     pageThree: './src/pageThree/index.js',
//   },
// };
