import { apiClient } from '../../api/apiClient';
import { productsUrl } from './apiRoutes';
import type { Product } from './productContract';

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const products = await apiClient.get<Product[]>(productsUrl.getProducts);
    return products;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch products';
    throw new Error(errorMessage);
  }
}

export const fetchProductById = async (id: number | string): Promise<Product> => {
  try {
    const url = typeof productsUrl.getProductById === 'function'
      ? productsUrl.getProductById(id)
      : `${productsUrl.getProductById}/${id}`;

    const product = await apiClient.get<Product>(url);
    return product;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch product';
    throw new Error(errorMessage);
  }
}
