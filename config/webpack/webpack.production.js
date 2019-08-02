const Visualizer = require('webpack-visualizer-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const merge = require('webpack-merge')

const paths = require('../paths')

module.exports = merge(
  {
    mode: 'production',
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'all',
            test: paths.nodeModules,
            name: 'vendors',
            enforce: true,
          },
        },
      },
      minimizer: [new TerserPlugin()],
    },
    plugins: [
      new Visualizer({ filename: 'statistics.html' }),
    ],
  },
)
