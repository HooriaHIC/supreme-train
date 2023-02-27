/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    disableStaticImages: true,
    domains: ["photos.zillowstatic.com"]
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.(frag|vert|glsl)$/,
      exclude: /node_modules/,
      use: ['raw-loader', 'glslify-loader'],
    })

    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|otf|woff|woff2)$/,
      use: {
          loader: 'url-loader',
      }
    })

    return config;
  }
}

module.exports = nextConfig