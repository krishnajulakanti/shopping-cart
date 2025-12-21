import { apiClient } from '../../api/apiClient';
import { authRoutes } from './apiRoutes';
import type { User, LoginCredentials, RegisterData } from './authContract';

/**
 * Login user
 * Uses apiRoutes to get the correct endpoint, then apiClient.get
 */
export const login = async (credentials: LoginCredentials): Promise<{ user: User; isLoggedIn: boolean }> => {
  try {
    const users = await apiClient.get<User[]>(authRoutes.login);
    
    if (users.length) {
      const user = users.find(
        (element) => element.email === credentials.email && element.password === credentials.password
      );
      if (user) {
        return { user, isLoggedIn: true };
      }
      throw new Error('Invalid email or password.');
    }
    throw new Error('User not registered.');
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Login failed';
    throw new Error(errorMessage);
  }
};

/**
 * Register user
 * Uses apiRoutes to get the correct endpoint, then apiClient.post
 */
export const register = async (data: RegisterData): Promise<{ isUserCreated: boolean }> => {
  try {
    const response = await apiClient.post<User>(authRoutes.register, data);
    if (response) {
      return { isUserCreated: true };
    }
    throw new Error('Registration failed.');
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Registration failed';
    throw new Error(errorMessage);
  }
};

