const path = require('path')
const CleanPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './src/app.ts',
  output: {
    // filename: 'bundle.[contenthash].js',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
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
    // 在输出内容到output的file之前，先做清空处理
    new CleanPlugin.CleanWebpackPlugin()
  ],

  mode: 'production',
  // devtool: 'none', // 在生产模式下不用source-map
}
