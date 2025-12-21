import React from 'react';
import { Typography } from 'antd';
import useAuth from '../features/auth/hooks';

const { Title } = Typography;

const Home = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Title level={1}>Welcome to the Home Page</Title>
      {user?.user?.name && <Title level={3}>Hello, {user.user.name}!</Title>}
    </div>
  );
};

export default Home;
