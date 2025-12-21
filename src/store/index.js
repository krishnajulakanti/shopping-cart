import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/redux/authSlice';
import productReducer from '../features/product/redux/productSlice';
import cartReducer from '../features/cart/redux/cartSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    cart: cartReducer,
  },
});

export default store;
