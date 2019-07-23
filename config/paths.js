const path = require('path')

const root = path.resolve(__dirname, '..')
const nodeModules = path.resolve(root, 'node_modules')
const src = path.resolve(root, 'src')
const build = path.resolve(root, 'build')
const appPublic = path.resolve(root, 'public')
const appIndexHtml = path.resolve(appPublic, 'index.html')
const eslintCfg = path.resolve(root, '.eslintrc')

module.exports = {
  nodeModules,
  src,
  build,
  appPublic,
  appIndexHtml,
  eslintCfg,
}
