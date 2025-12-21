import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../store/auth/useAuth';
import { ROUTES } from '../constants';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return children;
};

export default ProtectedRoute;

