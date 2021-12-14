// eslint-disable-next-line no-undef
module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/no-var-requires': 0,
    'react/no-unescaped-entities': 'off',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
};
