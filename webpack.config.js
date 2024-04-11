const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/js/index.js',
    index2: './src/js/index2.js',
    myComponent: './src/js/my-component.js',
    // 添加其他入口文件
  },
  output: {
    filename: 'js/[name].[contenthash].js', // 输出文件放在dist/js下
    path: path.resolve(__dirname, 'dist'),
    clean: true,  // 清理旧文件
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // 可以在这里添加更多文件类型的处理规则，例如处理图片或转译JSX
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index'],  // 仅包含index入口的块
      hash: true,
    }),
    new HtmlWebpackPlugin({
      template: './src/demo.html',
      filename: 'demo.html',
      chunks: ['index2'],  // 仅包含index2入口的块
      hash: true,
    }),
    new HtmlWebpackPlugin({
      template: './src/404.html',
      filename: '404.html',
      chunks: [],  // 不包含js文件
      hash: true,
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
      watch: true,
    },
    hot: true,
  },
};
