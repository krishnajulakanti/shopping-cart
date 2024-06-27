import React, { useEffect, useRef, useState } from 'react';
import { Form, Input, Button, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import useAuth from '../features/auth/hooks';

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const { user, loginUser, loading, error } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.length) {
      let isLoggedIn = user.some(
        (element) => element.email === emailRef.current.input.value && element.password === passwordRef.current.input.value);
      if(isLoggedIn) {
        navigate('/');
      } else {
        alert('Login credentials are incorrect')
      }
    }
  }, [user])

  const handleSubmit = async () => {
    let data = {
      email: emailRef.current.input.value,
      password: passwordRef.current.input.value
    }
    await loginUser(data);
  };

  const handleRegister = () => {
    navigate('/register');
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px'}}>
      <Card style={{ width: '30%' }}>
        <h1>Login</h1>
        <Form onFinish={handleSubmit}>
          <Form.Item label="Email" name="email">
            <Input ref={emailRef} required/>
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password ref={passwordRef} required/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Login
            </Button> &nbsp;
            <Button type="primary" danger onClick={handleRegister}> Register </Button>
          </Form.Item>
          {error && <p>{error}</p>}
        </Form>
      </Card>
    </div>
  );
};

export default Login;
