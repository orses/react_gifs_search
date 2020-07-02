import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('test on GifExpertApp', () => {
  let wrapper = shallow(<GifExpertApp />);

  test('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should show a list of categories', () => {
    const categories = ['mood', 'happy'];
    wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});
