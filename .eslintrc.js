module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:react-native/all',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'react-native'],
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-undef': ['off'],
    'no-unused-vars': ['off'],
    'react-native/no-color-literals': ['off'],
    'react-native/sort-styles': ['off'],
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            semi: true,
            jsxSingleQuote: true,
            trailingComma: 'es5',
            bracketSpacing: true,
            bracketSameLine: true,
            arrowParens: 'always',
            endOfLine: 'auto',
          },
          {
            usePrettierrc: false,
          },
        ],
      },
    },
  ],
};
