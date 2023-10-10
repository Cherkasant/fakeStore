import axios from 'axios';
import { PostProduct, ProductType } from '../Types/products';

export const url = 'https://fakestoreapi.com/';
export const TOKEN_KEY = 'token';

export async function getAllProducts() {
  try {
    const response = await axios.get(url + 'products');
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export function getSingleProduct(id: number | undefined): Promise<ProductType> {
  return typeof id === 'undefined'
    ? Promise.reject(new Error('Invalid id'))
    : axios.get(url + `products/${id}`).then((res) => res.data);
}

export async function addNewProduct(data: PostProduct) {
  try {
    const response = await axios.post(url + 'products', data);
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function updateProduct(data: PostProduct, id: number) {
  try {
    const response = await axios.put(url + `products/${id}`, data);
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function deleteProduct(id: number) {
  try {
    const response = await axios.delete(url + `products/${id}`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
}
