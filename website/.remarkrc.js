module.exports = {
  plugins: [
    [
      '@react-native-website/remark-lint-no-broken-external-links',
      {
        skipUrlPatterns: [
          // False positive, flagged as a bot and rate limited
          'www.apkfiles.com',
        ],
        baseUrl: 'https://reactnative.dev/docs',
      },
    ],
  ],
};
