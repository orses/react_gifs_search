import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('test on AddCategory', () => {
  const setCategories = jest.fn();
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should change the value on the input field', () => {
    const input = wrapper.find('input');
    input.simulate('change', {
      target: {
        value: 'Changing data',
      },
    });
  });

  test('should not submit data if input value are empty', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('should call setCategories and clean up the input field', () => {
    // 1º simulate input change
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'New data in input field' } });

    // 2º simulate a submit action
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    // 3º setCategories must being called one time and we a function
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    // 4º set input field as empty
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
