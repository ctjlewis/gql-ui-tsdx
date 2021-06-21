import React from 'react';
import * as ReactDOM from 'react-dom';
import { GqlForm } from '../src';

describe('GqlForm', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GqlForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
