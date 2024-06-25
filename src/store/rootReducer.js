import { combineReducers } from 'redux';
import authReducer from '../features/auth/redux/authSlice';
import productReducer from '../features/product/redux/productSlice';
import cartReducer from '../features/cart/redux/cartSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  cart: cartReducer,
});

export default rootReducer;
