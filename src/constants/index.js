// API Configuration
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';
export const FAKE_STORE_API_URL = 'https://fakestoreapi.com';

// Routes
export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  PRODUCT_DETAIL: '/products/:id',
  CART: '/cart',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  NOT_FOUND: '*',
};

// Messages
export const MESSAGES = {
  LOGIN_SUCCESS: 'User logged in successfully.',
  LOGIN_INVALID: 'Invalid email or password.',
  LOGIN_NOT_FOUND: 'User not registered.',
  REGISTER_SUCCESS: 'User created successfully.',
  CART_EMPTY: 'Your cart is empty',
  LOADING: 'Loading...',
  ERROR: 'Error:',
};

// Error Messages
export const ERROR_MESSAGES = {
  FETCH_PRODUCTS: 'Failed to fetch products',
  FETCH_PRODUCT: 'Failed to fetch product',
  LOGIN_FAILED: 'Login failed. Please try again.',
  REGISTER_FAILED: 'Registration failed. Please try again.',
};
