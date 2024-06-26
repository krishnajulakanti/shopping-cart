import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectUser } from '../features/auth/redux/authSlice';
import useAuth from '../features/auth/hooks';
import { Button } from 'antd';

const Home = () => {
  const { user } = useAuth();

  // const user = useSelector(selectUser);
  const navigate = useNavigate();

  // useEffect(() => {
  //     navigate('/');
  // }, []);
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) {
    return null; // or a loading spinner
  }

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to={'/products'}>Products</Link>
      {/* Add your home page content here */}
    </div>
  );
};

export default Home;
