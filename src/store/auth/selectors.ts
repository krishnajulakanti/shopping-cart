import type { RootState } from '../../types';

export const selectUser = (state: RootState) => state.auth.user;

export const selectAuthLoading = (state: RootState) => state.auth.loading;

export const selectAuthError = (state: RootState) => state.auth.error;

export const selectIsAuthenticated = (state: RootState) => !!state.auth.user?.isLoggedIn;

