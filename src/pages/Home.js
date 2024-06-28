import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectUser } from '../features/auth/redux/authSlice';
import useAuth from '../features/auth/hooks';

const Home = () => {

  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/auth/login');
    }
  }, [user, navigate]);

  if (!user) {
    return null; // or a loading spinner
  }

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {/* Add your home page content here */}
    </div>
  );
};

export default Home;
