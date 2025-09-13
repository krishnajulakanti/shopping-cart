// Contains API calls and related logic.

import axios from 'axios';
import { API_BASE_URL, LOCAL_API_BASE_URL } from '../constants';

const fetchProductsList = () => axios.get(`${API_BASE_URL}/products`);
const fetchProductListById = (id) => axios.get(`${API_BASE_URL}/products/${id}`);
const loginApi = (credentials) => axios.get(`${LOCAL_API_BASE_URL}/users`);
const registerApi = (data) => axios.post(`${LOCAL_API_BASE_URL}/users`, data);

export { fetchProductsList, fetchProductListById, loginApi, registerApi };

// const api = fetch('https://fakestoreapi.com');

// export const fetchProducts = () => api.get('/products');
// export const fetchProducts = () => fetch('https://fakestoreapi.com/products');
// export const fetchProductById = (id) => api.get(`/products/${id}`);
// export const login = (credentials) => api.post('/auth/login', credentials);
// export const register = (data) => api.post('/auth/register', data);

// export default fetchProducts;