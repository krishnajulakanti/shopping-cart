// Contains API calls and related logic.

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
});

export const fetchProducts = () => api.get('/products');
export const fetchProductById = (id) => api.get(`/products/${id}`);
export const login = (credentials) => api.post('/auth/login', credentials);
export const register = (data) => api.post('/auth/register', data);

export default api;
