/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path');

module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['@cleartax'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  settings: {
    'import/resolver': {
      typescript: {
        directory: resolve(__dirname, 'tsconfig.json'),
      },
    },
  },
};
