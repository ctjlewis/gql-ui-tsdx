import { addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

addParameters({
  viewMode: 'docs',
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  options: {
    storySort: {
      method: 'alphabetical'
    }
  },
};
