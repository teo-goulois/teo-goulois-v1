const withTM = require('next-transpile-modules')(['gsap']);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      enforce: "pre",
      test: /\.(fs|vs|frag|vert|glsl)$/,
      loader: "raw-loader",
      exclude: /(node_modules)/,
    });

    return config;
  },
}

module.exports = withTM(nextConfig) 