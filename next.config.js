/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    if (dev) {
      // Configure the server port
     // config.devServer.port = 3000; // Replace with your desired server port
    } else {
      // Configure the client port
      config.output.publicPath = '/_next/';
      config.output.hotUpdateMainFilename = 'static/webpack/[fullhash].[runtime].hot-update.json';
      config.output.hotUpdateChunkFilename = 'static/webpack/[id].[fullhash].[runtime].hot-update.js';
    }

    return config;
  },
};

module.exports = nextConfig;
