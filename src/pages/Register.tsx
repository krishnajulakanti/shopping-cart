import React, { useEffect } from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { registerAsync } from '../store/auth/authThunks';
import { clearError } from '../store/auth/authSlice';
import { selectUser, selectAuthLoading, selectAuthError } from '../store/auth/selectors';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { ROUTES, MESSAGES } from '../constants';
import type { RegisterData } from '../store/auth/authContract';

const Register: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const loading = useAppSelector(selectAuthLoading);
  const error = useAppSelector(selectAuthError);
  const navigate = useNavigate();
  const [form] = Form.useForm<RegisterData>();

  useEffect(() => {
    if (user?.isUserCreated) {
      message.success(MESSAGES.REGISTER_SUCCESS);
      navigate(ROUTES.LOGIN);
    }
  }, [user, navigate]);

  useEffect(() => {
    if (error) {
      message.error(error);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  const handleSubmit = async (values: RegisterData) => {
    await dispatch(registerAsync(values));
  };

  const handleLogin = () => {
    navigate(ROUTES.LOGIN);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px' }}>
      <Card style={{ width: '30%' }}>
        <h1>Register</h1>
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>
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
            rules={[
              { required: true, message: 'Please input your password!' },
              { min: 6, message: 'Password must be at least 6 characters!' },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              Register
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type="link" onClick={handleLogin} block>
              Already have an account? Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Register;
