// This file is kept for backward compatibility
// Main routing is now handled by MainRoutes.js and AuthRoutes.js
export { default as MainRoutes } from './MainRoutes';
export { default as AuthRoutes } from './AuthRoutes';
export { default as ProtectedRoute } from './ProtectedRoute';





// import React, { Suspense, lazy } from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';

// const Home = lazy(() => import('../pages/Home'));
// const Products = lazy(() => import('../pages/Products'));
// const ProductDetail = lazy(() => import('../features/product/pages/ProductDetail'));
// const Cart = lazy(() => import('../pages/Cart'));
// const NotFound = lazy(() => import('../pages/NotFound'));

// const AppRoutes = () => (
//   <Suspense fallback={<div>Loading...</div>}>
//     <Routes>
//       <Route path="/" element={<Navigate replace to="/home" />} />
//       <Route path="/home" element={<Home />} />
//       <Route path="/products" element={<Products />} />
//       <Route path="/products/:id" element={<ProductDetail />} />
//       <Route path="/cart" element={<Cart />} />
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   </Suspense>
// );

// export default AppRoutes;





// // import React, { Suspense, lazy } from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// // const Home = lazy(() => import('../pages/Home'));
// // const Products = lazy(() => import('../pages/Products'));
// // const ProductDetail = lazy(() => import('../features/product/pages/ProductDetail'));
// // const Cart = lazy(() => import('../pages/Cart'));
// // const Login = lazy(() => import('../pages/Login'));
// // const Register = lazy(() => import('../pages/Register'));
// // const NotFound = lazy(() => import('../pages/NotFound'));

// // const AppRoutes = () => (
// //   <Suspense fallback={<div>Loading...</div>}>
// //     <Routes>
// //       <Route path="/" element={<Home />} />
// //       <Route path="/products" element={<Products />} />
// //       <Route path="/products/:id" element={<ProductDetail />} />
// //       <Route path="/cart" element={<Cart />} />
// //       <Route path="/login" element={<Login />} />
// //       <Route path="/register" element={<Register />} />
// //       <Route path="*" element={<NotFound />} />
// //     </Routes>
// //   </Suspense>
// // );

// // export default AppRoutes;