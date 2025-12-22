import { apiClient } from '../../api/apiClient';
import { authRoutes } from './apiRoutes';
import type { User, LoginCredentials, RegisterData } from './authContract';

/**
 * Login user
 * Uses apiRoutes to get the correct endpoint, then apiClient.post
 * Returns user data and token if available
 */
export const login = async (credentials: LoginCredentials): Promise<{ response: User; isLoggedIn: boolean; token?: string }> => {
  try {
    const response = await apiClient.post<User & { token?: string }>(authRoutes.login, credentials);
    
    if (!response) {
      throw new Error('Invalid response from server');
    }

    // Extract token if present in response
    const { token, ...userData } = response;
    
    // Store token in localStorage if provided
    if (token) {
      localStorage.setItem('token', token);
    }

    return { 
      response: userData as User, 
      isLoggedIn: true,
      token 
    };
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
    if (response.success) {
      return { isUserCreated: true };
    }
    throw new Error('Registration failed.');
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Registration failed';
    throw new Error(errorMessage);
  }
};

