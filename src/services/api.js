import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '40307640-7973a3901061c45f7abf976c4';
const per_page = 12;

const fetchImages = async (query, page) => {
  const searchParams = new URLSearchParams({
    q: query,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page,
    page,
  });

  const response = await axios.get(`${BASE_URL}/?${searchParams}`);
  return response.data;
};

export { fetchImages, per_page };
