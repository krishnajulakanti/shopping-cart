// User types
export interface User {
  id?: number;
  name: string;
  email: string;
  password?: string;
}

export interface AuthUser {
  user?: User;
  isLoggedIn?: boolean;
  isUserCreated?: boolean;
  isUserFound?: boolean;
  message?: string;
  status?: number;
}

// Product types
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

// Cart types
export interface CartItem extends Product {
  quantity: number;
}

// Auth types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

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

export interface ProductState {
  items: Product[];
  selectedItem: Product | null;
  loading: boolean;
  error: string | null;
}

export interface CartState {
  items: CartItem[];
}

export interface RootState {
  auth: AuthState;
  product: ProductState;
  cart: CartState;
}

