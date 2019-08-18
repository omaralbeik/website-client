const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withOffline = require('next-offline');

const nextConfig = {
  target: 'serverless',
  transformManifest: manifest => ['/'].concat(manifest), // add the homepage to the cache
  workboxOpts: {
    cleanupOutdatedCaches: true,
    swDest: '/sw.js',
    include: [/\.html$/, /\.js$/],
    runtimeCaching: [
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'images',
          expiration: {
            maxEntries: 50
          }
        }
      },
      {
        urlPattern: /^https?:((?!api\.).)*$/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 10,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          }
        }
      }
    ]
  }
};

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
