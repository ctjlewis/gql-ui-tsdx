import React, { FC } from 'react';
import { GqlIdView } from '..';
import { generateTemplates } from './utils/templates';

const IdViewExample: FC = ({ children, ...props }) => {
  return (
    <GqlIdView>
      <h2>Example goes here</h2>
      {JSON.stringify({ children, props }, null, 2)}
    </GqlIdView>
  );
}

export const [
  UserByUsername,
  PostByID
] = generateTemplates(IdViewExample, 2);

export default {
  title: 'Use/View single result by ID',
  component: GqlIdView,
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