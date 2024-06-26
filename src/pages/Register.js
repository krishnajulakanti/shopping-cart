import React, { useRef, useState } from 'react';
import { Form, Input, Button } from 'antd';
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

  return (
    <div>
      <h1>Register</h1>
      <Form onFinish={handleSubmit}>
        <Form.Item label="Name" name="name">
          <Input ref={nameRef}/>
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input ref={emailRef}/>
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password ref={passwordRef}/>
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
