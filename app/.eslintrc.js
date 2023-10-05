module.exports = {
  root: true,
  plugins: [
    'react',
    '@typescript-eslint/eslint-plugin',
    'unused-imports',
    'jest',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  extends: [
    '@react-native',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  root: true,
  settings: {
    'import/resolver': {
      node: {
        paths: ['./src'],
      },
      'babel-module': {},
    },
  },
  ignorePatterns: [
    'package.js',
    'package-lock.json',
    '.eslintrc.js',
    'tsconfig.json',
    'yarn.lock',
    'node_modules',
    'metro.config.js',
  ],
  // parserOptions: {
  //   ecmaFeatures: {
  //     jsx: true,
  //   },
  //   ecmaVersion: 2018,
  //   sourceType: 'module',
  // },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'error',

    //interface
    '@typescript-eslint/consistent-type-exports': 'warn',
    //no console logs
    'no-console': 'error',
    //enum duplicates
    '@typescript-eslint/no-duplicate-enum-values': 'warn',
    //dynamic delete from object
    '@typescript-eslint/no-dynamic-delete': 'warn',
    //empty interfaces
    '@typescript-eslint/no-empty-interface': 'error',
    //type ANY
    '@typescript-eslint/no-explicit-any': 'off',
    //promisses
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-floating-promises': 'off',

    //unsave returns
    '@typescript-eslint/no-unsafe-return': 'off',
    //empty export
    '@typescript-eslint/no-useless-empty-export': 'warn',
    //no vars allowed
    '@typescript-eslint/no-var-requires': 'error',
    //enum always with value
    // '@typescript-eslint/prefer-enum-initializers': 'error',
    //for of in array
    '@typescript-eslint/prefer-for-of': 'warn',
    //requests function type
    '@typescript-eslint/prefer-function-type': 'error',
    //includes in array
    '@typescript-eslint/prefer-includes': 'warn',
    //require await in promisses
    'require-await': 'off',
    '@typescript-eslint/require-await': 'error',
    //unused imports and vars
    'no-unused-vars': 'off',
    // or "@typescript-eslint/no-unused-vars": "off",
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': 'error',
    //template expressions
    '@typescript-eslint/restrict-template-expressions': 'off',
    //unsave assigments
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    ///
    '@typescript-eslint/restrict-plus-operands': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
