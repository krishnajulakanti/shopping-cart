import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/styles/App.css';
import AppRoutes from './routes';
import useAuth from './features/auth/hooks';
import AuthRoutes from './routes/AuthRoutes';
import { Layout } from 'antd';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const { Content } = Layout;

function App() {
  const { user } = useAuth();

  return (
    <div>
      <Router>
        <AuthRoutes />
        {user?.isLoggedIn && <Layout>
          <Header />
          <Content className="app-content">
            <AppRoutes />
          </Content>
          <Footer />
        </Layout>}
      </Router>
    </div>
  );
}

export default App;