module.exports = {
  ...require('@repo/eslint-config/eslint-server'),
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
}
