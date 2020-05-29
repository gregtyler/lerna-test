const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.js', '../src/components/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-knobs/register', '@storybook/addon-a11y/register'],
  webpackFinal: async config => {
    // do mutation to the config

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
};
