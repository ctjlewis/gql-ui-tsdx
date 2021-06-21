import { useAuth0 } from '@auth0/auth0-react';
import React, { FC, useEffect } from 'react';
import { GqlFilterView } from '..';
import { GqlProvider } from '../components/GqlProvider';
import { GQL_CONFIG } from './utils/config';
import { generateTemplates } from './utils/templates';

const LoginRedirecter = () => {
  const { loginWithRedirect } = useAuth0();

  useEffect(
    () => (loginWithRedirect({
      screen_hint: 'signup'
    }), void 0),
    []
  );
  return (
    <div></div>
  );
}

const SignInButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button onClick={() => loginWithRedirect({
      screen_hint: 'signup'
    })}>Sign in</button>
  );
}

const FilterViewExample: FC = ({ children, ...props }) => {
  return (
    <GqlProvider {...GQL_CONFIG}>
      {/* <SignInButton /> */}
      <GqlFilterView>
        <h2>Example goes here</h2>
        {/* {JSON.stringify({ children, props }, null, 2)} */}
      </GqlFilterView>
    </GqlProvider>
  );
}

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const [
  UsersByState,
  UsersByAvailability
] = generateTemplates(FilterViewExample, 2);

export default {
  title: 'Use/View results by filter',
  component: GqlFilterView,
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