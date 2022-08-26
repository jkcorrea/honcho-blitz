// @ts-check
const { withBlitz } = require('@blitzjs/next');
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

const withVanillaExtract = createVanillaExtractPlugin({
  identifiers: process.env.NODE_ENV === 'development' ? 'debug' : 'short',
});

/**
 * @type {import('@blitzjs/next').BlitzConfig}
 **/
const config = {};

module.exports = withBlitz(withVanillaExtract(config));
