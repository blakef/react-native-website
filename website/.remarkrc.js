module.exports = {
  plugins: [
    [
      'remark-lint-no-dead-urls',
      {
        // This feature is currently only supported in ^2.0.0 versions of check-links, which is strictly
        // ESM only. For now we have to exclude checking urls that redirect using 302/303s.
        gotOptions: {
          methodRewriting: true,
        },
        skipUrlPatterns: [
          // Returns 302/303 responses
          /developer\.android\.com/,
          // Has an CAPTCHA
          /apkfiles\.com/,
          /localhost/,
        ],
      },
    ],
  ],
};
