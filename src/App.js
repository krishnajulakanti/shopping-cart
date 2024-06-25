import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './features/product/pages/Home';
import ProductDetail from './features/product/pages/ProductDetail';
import Login from './features/auth/pages/Login';
import Register from './features/auth/pages/Register';
import Cart from './features/cart/pages/Cart';
import NotFound from './pages/NotFound';
import './assets/styles/App.css';

const { Content } = Layout;

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Header />
          <Content className="app-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Content>
          <Footer />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
