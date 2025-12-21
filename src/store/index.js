import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../store/auth/authSlice';
import productReducer from '../store/products/productSlice';
import cartReducer from '../store/cart/cartSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    cart: cartReducer,
  },
});

export default store;
