import axios from 'axios';

export const per_page = 12;

axios.defaults.baseURL = 'https://pixabay.com/api';
axios.defaults.params = {
  key: '40307640-7973a3901061c45f7abf976c4',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page,
};

export const fetchImages = async (query, page) => {
  const response = await axios.get(`/?q=${query}&page=${page}`);
  return response.data;
};
