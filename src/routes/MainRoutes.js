import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'antd';
import Header from '../commons/components/Header';
import Footer from '../commons/components/Footer';
import useAuth from '../features/auth/hooks';

const Home = lazy(() => import('../pages/Home'));
const Products = lazy(() => import('../features/product/pages/Products'));
const ProductDetail = lazy(() => import('../features/product/pages/ProductDetail'));
const Cart = lazy(() => import('../features/cart/pages/Cart'));
const NotFound = lazy(() => import('../pages/NotFound'));

const { Content } = Layout;

const MainRoutes = () => {
  // const { user } = useAuth();

  return (
    <Layout>
      <Header />
      <Content className="app-content">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Navigate replace to="/products" />} />
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Content>
      <Footer />
    </Layout>
  );
};

export default MainRoutes;
