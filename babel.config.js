module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.d.ts',
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
          '.jpg',
          '.jpeg',
          '.png',
          '.svg',
          '.gif',
          '.txt',
        ],
        alias: {
          '@app/components': './src/components/',
          '@app/views': './src/views/',
          '@app/assets': './src/assets/',
          '@app/routes': './src/routes/',
          '@app/services': './src/services/',
          '@app/store': './src/store/',
          '@app/theme': './src/theme/',
          '@app/types': './src/types/',
          '@app/utils': './src/utils/',
        },
      },
    ],
    ['react-native-paper/babel'],
    ['react-native-reanimated/plugin'],
  ],
};
