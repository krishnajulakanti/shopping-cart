/**
 * API Routes for Products
 * Defines all product-related API endpoints
 */

// External API routes (Fake Store API)
export const externalProductRoutes = {
  getProducts: 'https://fakestoreapi.com/products',
  getProductById: (id: number | string) => `https://fakestoreapi.com/products/${id}`,
};

// Local API routes (through proxy)
export const localProductRoutes = {
  getProducts: '/api/products',
  getProductById: (id: number | string) => `/api/products/${id}`,
};

// Default to external routes
export const productsUrl = externalProductRoutes;
