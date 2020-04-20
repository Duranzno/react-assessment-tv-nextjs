module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.{test,spect,stories,story}.js$/,
      loader: 'ignore-loader',
    });
    return config;
  },
};
