import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './assets/styles/App.css';
import AppRoutes from './routes';

const { Content } = Layout;

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Header />
          <Content className="app-content">
            <AppRoutes />
          </Content>
          <Footer />
        </Layout>
      </Router>
    </div>
  );
}

export default App;