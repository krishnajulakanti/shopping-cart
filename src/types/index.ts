import type { AuthState } from '@/store/auth/authContract';
import type { CartState } from '@/store/cart/cartContract';
import type { ProductState } from '@/store/products/productContract';

// API Response types
export interface ApiResponse<T> {
  data: T;
  status?: number;
  message?: string;
}

// Redux State types
export interface RootState {
  auth: AuthState;
  product: ProductState;
  cart: CartState;
}
