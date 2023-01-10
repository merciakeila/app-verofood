module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
          ],
          root: ['./src'],
          alias: {
            images: './src/assets/images',
            screens: './src/screens',
            components: './src/components',
            constants: './src/constants',
            hooks: './src/hooks',
            utils: './src/utils',
            navigation: './src/navigation',
            types: './types.tsx'
          }
        }
      ]
    ]
  };
};