// User types
export interface User {
  id?: number;
  name: string;
  email: string;
  password?: string;
}

export interface AuthUser {
  user?: User;
  response?: User; // Backend response - User object from API
  token?: string; // JWT token from backend
  isLoggedIn?: boolean;
  isUserCreated?: boolean;
  isUserFound?: boolean;
  message?: string;
  status?: number;
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

// Auth State
export interface AuthState {
  user: AuthUser | null;
  loading: boolean;
  error: string | null;
}
