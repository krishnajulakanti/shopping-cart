import React, { useEffect } from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { loginAsync } from '../store/auth/authThunks';
import { logout, clearError } from '../store/auth/authSlice';
import {
  selectUser,
  selectAuthLoading,
  selectAuthError,
  selectIsAuthenticated,
} from '../store/auth/selectors';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { ROUTES } from '../constants';
import type { LoginCredentials } from '../store/auth/authContract';

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const loading = useAppSelector(selectAuthLoading);
  const error = useAppSelector(selectAuthError);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const navigate = useNavigate();
  const [form] = Form.useForm<LoginCredentials>();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(ROUTES.HOME);
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (error) {
      message.error(error);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  useEffect(() => {
    if (user?.message && !user?.isLoggedIn) {
      message.warning(user.message);
    }
  }, [user]);

  const handleSubmit = async (values: LoginCredentials) => {
    await dispatch(loginAsync(values));
  };

  const handleRegister = () => {
    navigate(ROUTES.REGISTER);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px' }}>
      <Card style={{ width: '30%' }}>
        <h1>Login</h1>
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              Login
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type="link" onClick={handleRegister} block>
              Don't have an account? Register
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
