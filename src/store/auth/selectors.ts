import type { RootState } from '../../types';
import type { AuthUser } from './authContract';

export const selectUser = (state: RootState): AuthUser | null => state.auth.user;

export const selectAuthLoading = (state: RootState): boolean => state.auth.loading;

export const selectAuthError = (state: RootState): string | null => state.auth.error;

export const selectIsAuthenticated = (state: RootState): boolean => !!state.auth.user?.isLoggedIn;
