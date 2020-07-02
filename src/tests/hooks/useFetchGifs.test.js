import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('test over useFetchGifs', () => {
  test('should return the initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('mood')
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('should return an array of images and true on loading', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('mood')
    );

    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
