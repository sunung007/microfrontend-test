const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],

  webpack(config, options) {
    const { isServer } = options;

    config.optimization.runtimeChunk = false;
    config.output.publicPath = "auto";

    if (!isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "web",
          filename: "static/chunks/remoteEntry.js",
          remotes: {
            docs: "docs@http://localhost:3002/_next/static/chunks/remoteEntry.js",
          },
          exposes: {},
        })
      );
    }

    return config;
  },
};
