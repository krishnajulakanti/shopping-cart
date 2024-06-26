import React, { useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks';

const Login = () => {
  const { user, loginUser, loading, error } = useAuth();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleSubmit = async () => {
    await loginUser(credentials);
    if (user) {
      // navigate('/');
    console.log(user, 'user')
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <Form onFinish={handleSubmit}>
        <Form.Item label="Email" name="email">
          <Input
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
          />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Login
          </Button>
        </Form.Item>
        {error && <p>{error}</p>}
      </Form>
    </div>
  );
};

export default Login;
