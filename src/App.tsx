import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/styles/App.css';
import MainRoutes from './routes/MainRoutes';
import AuthRoutes from './routes/AuthRoutes';
import { MESSAGES } from './constants';

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>{MESSAGES.LOADING}</div>}>
        <Routes>
          <Route path="/auth/*" element={<AuthRoutes />} />
          <Route path="/*" element={<MainRoutes />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;

