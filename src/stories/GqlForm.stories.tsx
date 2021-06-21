import React, { FC } from 'react';
import { GqlForm } from '..';
import { generateTemplates } from './utils/templates';

const FormExample: FC = ({ children, ...props }) => {
  return (
    <GqlForm>
      <h2>Example goes here</h2>
      {JSON.stringify({ children, props }, null, 2)}
    </GqlForm>
  );
}

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const [
  CreateUserForm,
  UpdateSettingsForm,
  UpdatePostForm
] = generateTemplates(FormExample, 3);

export default {
  title: 'Use/Edit data with a form',
  component: GqlForm,
  // argTypes: {
  //   children: {
  //     control: {
  //       type: 'text',
  //     },
  //   },
  // },
  // parameters: {
  //   controls: { expanded: true },
  // },
};