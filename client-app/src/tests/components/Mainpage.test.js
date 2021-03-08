import React from 'react';
import { shallow } from 'enzyme';
import Mainpage from '../../components/Mainpage/Mainpage';

describe('Mainpage component', () => {
  it('renders title', () => {
    const wrapper = shallow(<Mainpage />);
    const text = wrapper.find('h1');
    expect(text.text()).toBe('VisitTampere API');
  });
});
