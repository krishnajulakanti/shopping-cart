import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks';

const Register = () => {
  const { registerUser, loading, error } = useAuth();
  const [data, setData] = useState({ email: '', password: '', name: '' });
  const navigate = useNavigate();

  const handleSubmit = () => {
    registerUser(data).then(() => {
      navigate('/login');
    });
  };

  return (
    <div>
      <h1>Register</h1>
      <Form onFinish={handleSubmit}>
        <Form.Item label="Name" name="name">
          <Input
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Register
          </Button>
        </Form.Item>
        {error && <p>{error}</p>}
      </Form>
    </div>
  );
};

export default Register;
