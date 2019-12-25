const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withOffline = require('next-offline');
const webpack = require('webpack');
const { parsed: localEnv } = require('dotenv').config();

const config = {
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    return config
  }
}

const hasOffline = withOffline(config);
const hasImages = withImages(hasOffline);
const hasCSS = withCSS(hasImages)

module.exports = hasCSS;
