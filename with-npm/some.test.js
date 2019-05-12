import React from 'react';
import { shallow } from 'enzyme';

const Component = () => (
  <div>
      <h1 id="title">I am Groot</h1>
  </div>
)

describe('React component test with Enzyme', () => {
   it('renders without crashing', () => {
      shallow(<Component />);
    });
});
