import type { AuthUser } from '@/store/auth/authContract';
import type { CartState } from '@/store/cart/cartContract';
import type { ProductState } from '@/store/products/productContract';

// API Response types
export interface ApiResponse<T> {
  data: T;
  status?: number;
  message?: string;
}

// Redux State types
export interface AuthState {
  user: AuthUser | null;
  loading: boolean;
  error: string | null;
}

export interface RootState {
  auth: AuthState;
  product: ProductState;
  cart: CartState;
}
