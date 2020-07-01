require('dotenv').config();

const getGifs = async category => {
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&lang=es&rating=G&api_key=${API_KEY}`;
  const request = await fetch(url);
  const { data } = await request.json();

  const imagesData = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return imagesData;
};

export default getGifs;
