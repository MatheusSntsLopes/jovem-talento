module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'import/first': 'off',
    'no-param-reassign': 'off',
    'Unable to resolve path to module ': 'off',
    'no-restricted-syntax': 'off',
    camelcase: 'off',
    'no-unused-vars': 'off',
    'no-underscore-dangle': 'off',
    'class-methos-use-this': 'off',
    'quote-props': 'off',
  },
};
