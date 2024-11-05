module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "no-console": "warn",
    "react/prop-types": "off",
    "no-unused-vars":  "off",
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'max-len': [
      'warn',
      {
        code: 120,
      },
    ],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  ignorePatterns: ['src/abc', 'src/libs'],
};
