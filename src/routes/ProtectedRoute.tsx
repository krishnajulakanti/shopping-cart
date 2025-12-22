import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Spin } from 'antd';
import { selectIsAuthenticated, selectAuthLoading } from '../store/auth/selectors';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { ROUTES, MESSAGES } from '../constants';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const loading = useAppSelector(selectAuthLoading);
  const token = localStorage.getItem('token');

  // Check if token exists but user is not authenticated (e.g., page refresh)
  useEffect(() => {
    if (token && !isAuthenticated && !loading) {
      // Token exists but user state is not set - could add token validation here
      // For now, we rely on the auth state from Redux
    }
  }, [token, isAuthenticated, loading]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
        <Spin size="large" />
        <span style={{ marginLeft: '12px' }}>{MESSAGES.LOADING}</span>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
