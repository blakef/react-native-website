module.exports = {
  plugins: [
    [
      '@react-native-website/remark-lint-no-broken-external-links',
      {
        skipUrlPatterns: [
          // False positive, flagged as a bot and rate limited
          'www.apkfiles.com',
          // TODO: replace the 2048 example repository with another suitable project
          'github.com/JoelMarcey',
        ],
        baseUrl: 'https://reactnative.dev/docs',
      },
    ],
  ],
};
