import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('test on GifGrid component', () => {
  const category = 'cat';
  let wrapper;

  test('should render the component', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should show items when useFetchGifs to load images', () => {
    const gifs = [
      {
        id: 'abc',
        url: 'http://localhost:4000/cualquiercosa.jpg',
        title: 'Una imagen imaginaria',
      },
      {
        id: 'eca',
        url: 'http://localhost:4000/cualquierotracosa.jpg',
        title: 'Una imagen imaginaria más',
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false); // no loading paragraph
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
