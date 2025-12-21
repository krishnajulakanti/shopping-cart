import { useDispatch, useSelector } from 'react-redux';
import { addItem, incrementQuantity, decrementQuantity, removeItem, clearCart } from './cartSlice';
import { selectCartItems, selectCartTotal, selectCartItemCount } from './selectors';
import type { AppDispatch } from '../index';
import type { Product, CartItem } from '../../types';

const useCart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const itemCount = useSelector(selectCartItemCount);

  const addItemToCart = (item: Product) => {
    dispatch(addItem(item));
  };

  const removeItemFromCart = (item: CartItem) => {
    dispatch(removeItem(item));
  };

  const incrementQuantityInCart = (item: CartItem) => {
    dispatch(incrementQuantity(item.id));
  };

  const decrementQuantityInCart = (item: CartItem) => {
    dispatch(decrementQuantity(item.id));
  };

  const clearCartItems = () => {
    dispatch(clearCart());
  };

  return {
    items,
    total,
    itemCount,
    addItemToCart,
    removeItemFromCart,
    clearCartItems,
    incrementQuantityInCart,
    decrementQuantityInCart,
  };
};

export default useCart;

