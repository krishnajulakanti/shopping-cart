import type { RootState } from '../../types';
import type { CartItem } from './cartContract';

export const selectCartItems = (state: RootState): CartItem[] => state.cart.items;

export const selectCartTotal = (state: RootState): number =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export const selectCartItemCount = (state: RootState): number =>
  state.cart.items.reduce((count, item) => count + item.quantity, 0);

export const selectCartItemById = (state: RootState, itemId: number): CartItem | undefined =>
  state.cart.items.find((item) => item.id === itemId);
