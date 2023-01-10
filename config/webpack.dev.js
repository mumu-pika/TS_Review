const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/app.ts',
  output: {
    path: path.resolve(__dirname, '../dist'),
    // filename: 'bundle.[contenthash].js',
    filename: 'bundle.js',
    clean: true, //自动清空, 原理: 在打包前，path整个内容清空，再进行打包

  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 模板, 以public/index.html文件创建新的html文件
      // 新的html文件特点：1、结构和原来一致，2、自动引入打包输出的资源
      template: path.resolve(__dirname, '../public/index.html'),
    }),
  ],
  mode: 'development',
  devtool: 'inline-source-map',
}
