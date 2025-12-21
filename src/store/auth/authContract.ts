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
