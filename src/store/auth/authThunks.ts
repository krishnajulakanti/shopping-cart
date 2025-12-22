import { createAsyncThunk } from '@reduxjs/toolkit';
import { login as loginService, register as registerService } from './authService';
import { MESSAGES } from '../../constants';
import type { LoginCredentials, RegisterData, AuthUser } from './authContract';

/**
 * Async thunk to login user
 * Flow: Thunk -> Service -> API Routes -> apiClient -> API
 */
export const loginAsync = createAsyncThunk(
  'auth/login',
  async (credentials: LoginCredentials, { rejectWithValue }) => {
    try {
      const result = await loginService(credentials);
      return { ...result, message: MESSAGES.LOGIN_SUCCESS } as AuthUser;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : MESSAGES.LOGIN_INVALID;
      return rejectWithValue(errorMessage);
    }
  }
);

/**
 * Async thunk to register user
 * Flow: Thunk -> Service -> API Routes -> apiClient -> API
 */
export const registerAsync = createAsyncThunk(
  'auth/register',
  async (data: RegisterData, { rejectWithValue }) => {
    try {
      const result = await registerService(data);
      return result as AuthUser;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Registration failed';
      return rejectWithValue(errorMessage);
    }
  }
);

