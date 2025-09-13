import React, { Suspense } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './styles/App.css';
import { useAuth } from './features/auth';
import AuthRoutes from './routes/AuthRoutes';
import MainRoutes from './routes/MainRoutes';

function App() {
  const { user } = useAuth();

  return (
    <div>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route 
              path="/*" 
              element={user?.isLoggedIn ? <MainRoutes /> : <Navigate replace to="/auth/login" />} 
            />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
