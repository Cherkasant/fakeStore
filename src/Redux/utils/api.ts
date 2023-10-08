import axios from 'axios';

export const url = 'https://fakestoreapi.com/';
export const TOKEN_KEY = 'token';

export const getAllProducts = async () => {
  const response = await axios.get(url + 'products');
  return response.data;
};

export const getSingleProduct = async (id: number) => {
  const response = await axios.get(url + `products/${id}`);
  return response.data;
};
