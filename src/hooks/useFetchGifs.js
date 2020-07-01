import { useState, useEffect } from 'react';
import getGifs from '../helpers/getGifs';

export const useFetchGifs = category => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  // se ejecuta al montarse, pero no al renderizarse dado que tiene una dependencia declarada y se le ha pasado category, que en este componente nunca cambia
  useEffect(() => {
    getGifs(category).then(images =>
      setState({
        data: images,
        loading: false,
      })
    );
  }, [category]);

  return state;
};
