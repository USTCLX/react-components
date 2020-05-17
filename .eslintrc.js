module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['prettier', 'prettier/@typescript-eslint', 'prettier/react'],
  globals: {},
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        jsxBracketSameLine: true,
        arrowParens: 'avoid',
        printWidth: 100,
      },
    ],
  },
};
