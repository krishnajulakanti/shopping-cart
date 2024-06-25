import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../App';

const Home = lazy(() => import('../pages/Home'));
const ProductDetail = lazy(() => import('../pages/ProductDetail'));
const Cart = lazy(() => import('../pages/Cart'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const NotFound = lazy(() => import('../pages/NotFound'));

const AppRoutes = () => (
  <Router>
    <App>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </App>
  </Router>
);

export default AppRoutes;
