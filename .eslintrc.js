/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path');

module.exports = {
  root: true,
  extends: ['@cleartax'],
  settings: {
    'import/resolver': {
      typescript: {
        directory: resolve(__dirname, 'tsconfig.json'),
      },
    },
  },
};
