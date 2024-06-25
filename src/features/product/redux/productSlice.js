import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../api';

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  const response = await api.fetchProducts();
  return response.data;
});

export const fetchProductById = createAsyncThunk('product/fetchProductById', async (id) => {
  const response = await api.fetchProductById(id);
  return response.data;
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedItem = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
