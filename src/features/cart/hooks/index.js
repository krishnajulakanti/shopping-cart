import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, clearCart } from '../redux/cartSlice';

const useCart = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);

  const addItemToCart = (item) => {
    dispatch(addItem(item));
  };

  const removeItemFromCart = (item) => {
    dispatch(removeItem(item));
  };

  const clearCartItems = () => {
    dispatch(clearCart());
  };

  return {
    ...cartState,
    addItemToCart,
    removeItemFromCart,
    clearCartItems,
  };
};

export default useCart;
