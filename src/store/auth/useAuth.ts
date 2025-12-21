import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { login, logout, register, clearError } from './authSlice';
import { selectUser, selectAuthLoading, selectAuthError, selectIsAuthenticated } from './selectors';
import type { AppDispatch } from '../index';
import type { LoginCredentials, RegisterData } from '../../types';

const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(selectUser);
  const loading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const loginUser = useCallback(
    (credentials: LoginCredentials) => {
      dispatch(login(credentials));
    },
    [dispatch]
  );

  const logoutUser = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  const registerUser = useCallback(
    (data: RegisterData) => {
      dispatch(register(data));
    },
    [dispatch]
  );

  const clearAuthError = useCallback(() => {
    dispatch(clearError());
  }, [dispatch]);

  return {
    user,
    loading,
    error,
    isAuthenticated,
    loginUser,
    logoutUser,
    registerUser,
    clearAuthError,
  };
};

export default useAuth;

