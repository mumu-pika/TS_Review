const path = require('path')

module.exports = {
  entry: './src/app.ts',
  output: {
    // filename: 'bundle.[contenthash].js',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist'
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
  mode: 'development',
  devtool: 'inline-source-map',
}
