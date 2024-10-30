
module.exports = {
  ...require('@repo/eslint-config/eslint-next.js'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
}