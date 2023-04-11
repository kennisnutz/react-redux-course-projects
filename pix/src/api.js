import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID Faa8xX0NwUr0krtiFJwRTwMBrE8jzTabchrqWWpuDU0',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
