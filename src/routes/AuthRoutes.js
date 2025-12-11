import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const Login = lazy(() => import('../features/auth/pages/Login'));
const Register = lazy(() => import('../features/auth/pages/Register'));
const NotFound = lazy(() => import('../pages/NotFound'));

const AuthRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

export default AuthRoutes;







// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// // import './assets/styles/App.css';
// import Login from '../pages/Login';
// import Register from '../pages/Register';
// import Home from '../pages/Home';

// function AuthRoutes() {

//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     </div>
//   );
// }

// export default AuthRoutes;