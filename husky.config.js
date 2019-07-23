module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'pre-commit': 'lint-staged -c lint-staged.config.js',
    'pre-push': "npm run 'test:coverage'",
  },
}
