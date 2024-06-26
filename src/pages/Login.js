import React, { useEffect, useRef, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import useAuth from '../features/auth/hooks';

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const { user, loginUser, loading, error } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user, 'user4')
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

  return (
    <div>
      <h1>Login</h1>
      <Form onFinish={handleSubmit}>
        <Form.Item label="Email" name="email">
          <Input ref={emailRef}/>
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password ref={passwordRef}/>
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
