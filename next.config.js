const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withOffline = require('next-offline');

const { parsed: localEnv } = require('dotenv').config();

const nextConfig = {
  target: 'serverless',
  transformManifest: manifest => ['/'].concat(manifest), // add the homepage to the cache
  workboxOpts: {
    cleanupOutdatedCaches: true,
    swDest: '/sw.js',
    generateInDevMode: true,
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
        urlPattern: /^https?.*api.omaralbeik.com/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'api-calls',
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 24 * 60 * 60,
            purgeOnQuotaError: true
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin(localEnv)
  ]
};

const hasOffline = withOffline(nextConfig);
const hasImages = withImages(hasOffline);
const hasCSS = withCSS(hasImages)

module.exports = hasCSS;
