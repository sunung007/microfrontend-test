const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  output: "export",

  webpack(config, options) {
    const { isServer } = options;

    config.optimization.runtimeChunk = false;
    config.output.publicPath = "auto";

    if (!isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "docs",
          filename: "static/chunks/remoteEntry.js",
          exposes: {
            "./DataComponent": "./modules/DataComponent.tsx",
          },
        })
      );
    }

    return config;
  },
};
