import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import './assets/styles/App.css';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';

function AuthRoutes() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default AuthRoutes;