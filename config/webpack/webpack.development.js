const webpack = require('webpack')
const merge = require('webpack-merge')

const paths = require('../paths')

module.exports = merge(
  {
    mode: 'development',
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
      contentBase: paths.appPublic,
      stats: 'errors-only',
      historyApiFallback: true,
      hot: true,
      port: '8080',
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
)
