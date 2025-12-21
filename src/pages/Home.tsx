import React from 'react';
import { Typography } from 'antd';
import { selectUser, selectIsAuthenticated } from '../store/auth/selectors';
import { useAppSelector } from '@/store/hooks';

const { Title } = Typography;

const Home: React.FC = () => {
  const user = useAppSelector(selectUser);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

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
