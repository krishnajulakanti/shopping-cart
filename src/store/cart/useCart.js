import { useDispatch, useSelector } from 'react-redux';
import { addItem, incrementQuantity, decrementQuantity, removeItem, clearCart } from './cartSlice';
import { selectCartItems, selectCartTotal, selectCartItemCount } from './selectors';

const useCart = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const itemCount = useSelector(selectCartItemCount);

  const addItemToCart = (item) => {
    dispatch(addItem(item));
  };

  const removeItemFromCart = (item) => {
    dispatch(removeItem(item));
  };

  const incrementQuantityInCart = (item) => {
    dispatch(incrementQuantity(item.id));
  };

  const decrementQuantityInCart = (item) => {
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



















//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import { useDispatch, useSelector } from 'react-redux';
// import { addItem, removeItem, clearCart } from '../redux/cartSlice';

// const useCart = () => {
//   const dispatch = useDispatch();
//   const cartState = useSelector((state) => state.cart);

//   const addItemToCart = (item) => {
//     dispatch(addItem(item));
//   };

//   const removeItemFromCart = (item) => {
//     dispatch(removeItem(item));
//   };

//   const clearCartItems = () => {
//     dispatch(clearCart());
//   };

//   return {
//     ...cartState,
//     addItemToCart,
//     removeItemFromCart,
//     clearCartItems,
//   };
// };

// export default useCart;