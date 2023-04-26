/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  externals: {
    "@nivo/colors": "@nivo/colors",
    "d3-color": "d3-color",
  },
};

module.exports = nextConfig
