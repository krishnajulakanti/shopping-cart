import axios from 'axios';
import { API_BASE_URL, FAKE_STORE_API_URL } from '../constants';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common errors
    if (error.response) {
      // Server responded with error status
      return Promise.reject(error);
    } else if (error.request) {
      // Request made but no response
      return Promise.reject(new Error('Network error. Please check your connection.'));
    } else {
      // Something else happened
      return Promise.reject(error);
    }
  }
);

// Product API calls
export const fetchProductsList = () => axios.get(`${FAKE_STORE_API_URL}/products`);
export const fetchProductListById = (id) => axios.get(`${FAKE_STORE_API_URL}/products/${id}`);

// Auth API calls
export const loginApi = (credentials) => api.get('/users');
export const registerApi = (data) => api.post('/users', data);

// Auth service with business logic
export const authService = {
  login: async (credentials) => {
    const response = await loginApi(credentials);
    if (response.data.length) {
      const user = response.data.find(
        (element) => element.email === credentials.email && element.password === credentials.password
      );
      if (user) {
        return { user, isLoggedIn: true };
      }
      throw new Error('Invalid email or password.');
    }
    throw new Error('User not registered.');
  },
  register: async (data) => {
    const response = await registerApi(data);
    if (response.data) {
      return { isUserCreated: true };
    }
    throw new Error('Registration failed.');
  },
};

export default api;