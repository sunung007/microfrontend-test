const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json");

module.exports = {
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "host",
          filename: "remoteEntry.js",
          remotes: {
            web: "web@http://localhost:3001/_next/static/chunks/remoteEntry.js",
            docs: "docs@http://localhost:3002/_next/static/chunks/remoteEntry.js",
          },
          shared: {
            react: { singleton: true },
            "react-dom": { singleton: true },
            "react/": {
              singleton: true,
            },
          },
        }),
      ],
    },
  },
};

export {};
