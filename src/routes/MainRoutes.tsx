import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout, Spin } from 'antd';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProtectedRoute from './ProtectedRoute';
import { ROUTES, MESSAGES } from '../constants';

const Home = lazy(() => import('../pages/Home'));
const Products = lazy(() => import('../pages/Products'));
const ProductDetail = lazy(() => import('../features/product/ProductDetail'));
const Cart = lazy(() => import('../pages/Cart'));
const NotFound = lazy(() => import('../pages/NotFound'));

const { Content } = Layout;

const MainRoutes: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Content className="app-content">
        <Suspense fallback={<Spin size="large" tip={MESSAGES.LOADING} />}>
          <Routes>
            <Route path={ROUTES.HOME} element={<Navigate replace to={ROUTES.PRODUCTS} />} />
            <Route path="/home" element={<Navigate replace to={ROUTES.PRODUCTS} />} />
            <Route path={ROUTES.PRODUCTS} element={<Products />} />
            <Route path={`${ROUTES.PRODUCTS}/:id`} element={<ProductDetail />} />
            <Route
              path={ROUTES.CART}
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
          </Routes>
        </Suspense>
      </Content>
      <Footer />
    </Layout>
  );
};

export default MainRoutes;

