const { mergeConfig } = require('vite');

module.exports = {
  core: { builder: '@storybook/builder-vite' },

  stories: [
    '../src/app/**/*.stories.mdx',
    '../src/app/**/*.stories.@(js|jsx|ts|tsx)',
    '../shared/ui/src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: ['@storybook/addon-essentials', '@chakra-ui/storybook-addon'],

  features: {
    emotionAlias: false,
  },

  async viteFinal(config, { configType }) {
    return mergeConfig(config, {});
  },

  docs: {
    autodocs: true
  },
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'apps/rv1/vite.config.ts',
      },
    },
  },
};

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
