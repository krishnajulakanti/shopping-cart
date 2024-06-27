import React, { useRef, useState } from 'react';
import { Form, Input, Button, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import useAuth from '../features/auth/hooks';

const Register = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const { user, registerUser, loading, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = () => {
    let data = {
      email: emailRef.current.input.value,
      password: passwordRef.current.input.value,
      name: nameRef.current.input.value
    }
    registerUser(data);
    navigate('/login');
  };

  const handleLogin = () => {
    navigate('/login');
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px' }}>
      <Card style={{ width: '30%' }}>
        <h1>Register</h1>
        <Form onFinish={handleSubmit}>
          <Form.Item label="Name" name="name">
            <Input ref={nameRef} required/>
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input ref={emailRef} required/>
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password ref={passwordRef} required/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Submit
            </Button> &nbsp;
            <Button type="primary" danger onClick={handleLogin}> Login </Button>
          </Form.Item>
          {error && <p>{error}</p>}
        </Form>
      </Card>
    </div>
  );
};

export default Register;
