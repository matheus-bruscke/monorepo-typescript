const Solid = require("vite-plugin-solid")
const path = require('path')

module.exports = {

  core: {
    builder: "storybook-builder-vite"
  },

  framework: "@storybook/html",

  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],

  typescript: { reactDocgen: false },
  extends: ['./tsconfig.json'],

  viteFinal: async (config, { configType }) => {
    config.plugins = config.plugins || []

    config.plugins.unshift(
      Solid({ hot: false }),
    )

    config.resolve.alias = config.resolve.alias || []

    config.resolve.alias.push(
      { find: '@components', replacement: path.resolve(__dirname, '../src/') },
      { find: '@styles', replacement: path.resolve(__dirname, '../../styles/src/') },
    )

    return config
  },
}