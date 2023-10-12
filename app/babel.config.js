module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['.'],
        alias: {
          '@images': './src/assets/images',
          '@buttons': './src/components/buttons',
          '@views': './src/views',
          '@forms': './src/forms',
          '@auth': './src/auth',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env.development',
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
  ],
};
