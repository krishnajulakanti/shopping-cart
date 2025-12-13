import React, { Suspense, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './assets/styles/App.css';
import useAuth from './features/auth/hooks';
import AuthRoutes from './routes/AuthRoutes';
import MainRoutes from './routes/MainRoutes';

function App() {
  const { user } = useAuth();

  return (
    <div style={{}}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* NO AUTH */}
            <Route path="/*" element={<MainRoutes />} />

            {/* AUTHENTICATION */}
            {/* <Route path="/*" element={user?.isLoggedIn ? <MainRoutes /> : <Navigate replace to="/auth/login" />} />
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path="/*" element={user?.isLoggedIn ? <MainRoutes /> : <AuthRoutes />} /> */}
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;




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



