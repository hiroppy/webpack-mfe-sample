'use strict';

const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  output: {
    publicPath: 'http://localhost:8081/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'page1',
      library: { type: 'var', name: 'page1' },
      filename: 'page1RemoteEntry.js',
      exposes: {
        Page: './src/index.js',
      },
      shared: ['react'],
    }),
  ],
};
