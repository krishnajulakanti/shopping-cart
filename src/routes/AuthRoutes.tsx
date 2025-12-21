import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Spin } from 'antd';
import { ROUTES, MESSAGES } from '../constants';

const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const NotFound = lazy(() => import('../pages/NotFound'));

const AuthRoutes: React.FC = () => (
  <Suspense fallback={<Spin size="large" tip={MESSAGES.LOADING} />}>
    <Routes>
      <Route path="/" element={<Navigate replace to={ROUTES.LOGIN} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

export default AuthRoutes;

