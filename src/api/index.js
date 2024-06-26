// Contains API calls and related logic.

import axios from 'axios';

// const api = axios.create({
//   baseURL: 'https://fakestoreapi.com', // Replace with your API base URL
// });

const BASE_URL = 'http://localhost:5000';

const fetchProductsList = () => axios.get('https://fakestoreapi.com/products');
const fetchProductListById = (id) => axios.get(`https://fakestoreapi.com/products/${id}`);
const loginApi = (credentials) => axios.get(`${BASE_URL}/users`);
const registerApi = (data) => axios.post(`${BASE_URL}/users`, data);

export { fetchProductsList, fetchProductListById, loginApi, registerApi };

// const api = fetch('https://fakestoreapi.com');

// export const fetchProducts = () => api.get('/products');
// export const fetchProducts = () => fetch('https://fakestoreapi.com/products');
// export const fetchProductById = (id) => api.get(`/products/${id}`);
// export const login = (credentials) => api.post('/auth/login', credentials);
// export const register = (data) => api.post('/auth/register', data);

// export default fetchProducts;