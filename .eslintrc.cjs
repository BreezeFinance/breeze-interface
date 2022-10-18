module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    project: './tsconfig.json',
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': [0],
    '@typescript-eslint/strict-boolean-expressions': [0],
    '@typescript-eslint/no-floating-promises': [0],
    '@typescript-eslint/return-await': [0],
    'react/react-in-jsx-scope': [0]
  }
}
