import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { login, logout, register, clearError } from '../redux/authSlice';
import { selectUser, selectAuthLoading, selectAuthError, selectIsAuthenticated } from '../redux/selectors';

const useAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const loading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const loginUser = useCallback(
    (credentials) => {
      dispatch(login(credentials));
    },
    [dispatch]
  );

  const logoutUser = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  const registerUser = useCallback(
    (data) => {
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
