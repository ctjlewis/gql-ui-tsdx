module.exports = {
  stories: ['../src/stories/**/*.stories.@(mdx|ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-links', 
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
        transcludeMarkdown: true,
      },
    },
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  }
};
