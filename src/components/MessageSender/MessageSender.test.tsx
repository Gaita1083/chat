import {shallow} from 'enzyme';
import * as React from 'react';
import MessageSender from './MessageSender';

const setup = () => {
  return shallow(<MessageSender />)
};

describe('MessageSender component', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });
});
