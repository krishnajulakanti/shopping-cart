import React from 'react';
import { Navigate } from 'react-router-dom';
import { selectIsAuthenticated, selectAuthLoading } from '../store/auth/selectors';
import { useAppSelector } from '@/store/hooks';
import { ROUTES } from '../constants';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const loading = useAppSelector(selectAuthLoading);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
