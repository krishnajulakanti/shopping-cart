// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import './assets/styles/App.css';
// import AppRoutes from './routes';
// import useAuth from './features/auth/hooks';
// import AuthRoutes from './routes/AuthRoutes';
// import { Layout } from 'antd';
// import Header from './components/layout/Header';
// import Footer from './components/layout/Footer';

// const { Content } = Layout;

// function App() {
//   const { user } = useAuth();

//   return (
//     <div>
//       <Router>
//         <AuthRoutes />
//         {user?.isLoggedIn && <Layout>
//           <Header />
//           <Content className="app-content">
//             <AppRoutes />
//           </Content>
//           <Footer />
//         </Layout>}
//       </Router>
//     </div>
//   );
// }

// export default App;



import React, { Suspense, lazy } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './assets/styles/App.css';
import AppRoutes from './routes';
import useAuth from './features/auth/hooks';
import AuthRoutes from './routes/AuthRoutes';
import { Layout } from 'antd';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetail = lazy(() => import('./features/product/pages/ProductDetail'));
const Cart = lazy(() => import('./pages/Cart'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const NotFound = lazy(() => import('./pages/NotFound'));

const { Content } = Layout;


function App() {
  const { user } = useAuth();

  return (
    <div>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Navigate replace to={user?.isLoggedIn ? "/home" : "/login"} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={user?.isLoggedIn ? <Layout><Header /><Content className="app-content"><Home /></Content><Footer /></Layout> : <Navigate replace to="/login" />} />
            <Route path="/products" element={user?.isLoggedIn ? <Layout><Header /><Content className="app-content"><Products /></Content><Footer /></Layout> : <Navigate replace to="/login" />} />
            <Route path="/products/:id" element={user?.isLoggedIn ? <Layout><Header /><Content className="app-content"><ProductDetail /></Content><Footer /></Layout> : <Navigate replace to="/login" />} />
            <Route path="/cart" element={user?.isLoggedIn ? <Layout><Header /><Content className="app-content"><Cart /></Content><Footer /></Layout> : <Navigate replace to="/login" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;