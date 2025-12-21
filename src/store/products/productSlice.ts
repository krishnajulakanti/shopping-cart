import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProductsAsync, fetchProductByIdAsync } from './productThunks';
import type { Product, ProductState } from './productContract';

const initialState: ProductState = {
  items: [],
  selectedItem: null,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    clearSelectedProduct: (state) => {
      state.selectedItem = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Products
      .addCase(fetchProductsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || action.error.message || 'Failed to fetch products';
      })
      // Fetch Product By ID
      .addCase(fetchProductByIdAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductByIdAsync.fulfilled, (state, action: PayloadAction<Product>) => {
        state.loading = false;
        state.selectedItem = action.payload;
        state.error = null;
      })
      .addCase(fetchProductByIdAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || action.error.message || 'Failed to fetch product';
      });
  },
});

export const { clearSelectedProduct, clearError } = productSlice.actions;
export default productSlice.reducer;
