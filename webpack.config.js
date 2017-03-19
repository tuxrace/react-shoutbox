var webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: ['react', 'react-dom', 'react-router', 'redux', 'firebase']
  },
  output: {
    path: __dirname,
    filename: '[name].build.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devtool: '#source-map',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor')
  ],
  devServer: {
    historyApiFallback: true
  }
}
