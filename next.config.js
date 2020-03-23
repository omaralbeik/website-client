/* eslint-disable import/no-extraneous-dependencies */

const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
const withOffline = require("next-offline");
const webpack = require("webpack");
const { parsed: localEnv } = require("dotenv").config();

const config = {
  // eslint-disable-next-line no-shadow
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    return config;
  },
};

const hasOffline = withOffline(config);
const hasImages = withImages(hasOffline);
const hasCSS = withCSS(hasImages);

module.exports = hasCSS;
