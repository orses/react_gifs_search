import getGifs from '../../helpers/getGifs';

describe('test with getGifs Fetch', () => {
  test('shoul retrieve 10 items', async () => {
    const gifs = await getGifs('Cat');

    expect(gifs.length).toBe(10);
  });

  test('shoul return an empty array if no category', async () => {
    const gifs = await getGifs('');

    expect(gifs.length).toBe(0);
  });
});
