const path = require('path')
const merge = require('webpack-merge')

const webpackBaseConfig = require('./webpack.base')

module.exports = (env) => {
  const webpackConfigPath = path.resolve(__dirname, `webpack.${env}.js`)
  // eslint-disable-next-line
  const webpackConfig = require(webpackConfigPath);

  return merge(
    webpackBaseConfig,
    webpackConfig,
  )
}
