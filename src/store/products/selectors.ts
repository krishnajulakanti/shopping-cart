import type { RootState } from '../../types';
import type { Product } from './productContract';

export const selectProducts = (state: RootState): Product[] => state.product.items;

export const selectProductLoading = (state: RootState): boolean => state.product.loading;

export const selectProductError = (state: RootState): string | null => state.product.error;

export const selectSelectedProduct = (state: RootState): Product | null => state.product.selectedItem;

export const selectProductById = (state: RootState, productId: number): Product | undefined =>
  state.product.items.find((product) => product.id === productId);
