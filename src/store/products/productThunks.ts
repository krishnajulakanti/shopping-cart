import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts, fetchProductById } from './productService';

export const fetchProductsAsync = createAsyncThunk(
  'product/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const products = await fetchProducts();
      return products;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch products';
      return rejectWithValue(errorMessage);
    }
  }
);


export const fetchProductByIdAsync = createAsyncThunk(
  'product/fetchProductById',
  async (id: number | string, { rejectWithValue }) => {
    try {
      const product = await fetchProductById(id);
      return product;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch product';
      return rejectWithValue(errorMessage);
    }
  }
);
