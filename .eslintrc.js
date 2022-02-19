module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:github/recommended',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    node: true,
  },
  plugins: ['github'],
  rules: {
    'eslint-comments/no-use': 'off',
    'filenames/match-regex': 'off',
    'i18n-text/no-en': 'off',
  },
};
