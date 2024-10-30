const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'prettier',
    require.resolve('@vercel/style-guide/eslint/next'),
    'turbo',
    'next',
    'airbnb',
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  plugins: ['only-warn', '@typescript-eslint', 'import'],
  settings: {
    // 'import/resolver': {
    //   alwaysTryTypes: false,
    //   typescript: {
    //     project,
    //   },
    // },
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  rules: {
    'react/function-component-definition': [
      2,
      {
        // namedComponents: 'arrow-function',
      },
    ],
    '@next/next/no-html-link-for-pages': 'off',
  },
  overrides: [
    {
    //Now we enable eslint-plugin-testing-library rules or preset only for matching files!
      env: {
        // jest: true,
      },
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react', 'plugin:jest/recommended'],
      rules: {
        'import/no-extraneous-dependencies': [
          'off',
          { devDependencies: ['**/?(*.)+(spec|test).[jt]s?(x)'] },
        ],
      },
    },
  ],
  ignorePatterns: [
    '**/*.js',
    '**/*.json',
    'node_modules',
    'public',
    'styles',
    '.next',
    'coverage',
    'dist',
    '.turbo',
    '*.config.mjs'
  ],
}
