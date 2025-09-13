import React, { useEffect, useRef } from 'react';
import { Form, Input, Button, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks';

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const { user, loginUser, loading, error } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.isLoggedIn) {
      navigate('/products');
    } else if (user?.isUserFound === false || user?.isLoggedIn !== undefined) {
      alert(user?.message);
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
    navigate('/auth/register');
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px' }}>
      <Card style={{ width: '30%' }}>
        <h1>Login</h1>
        <Form onFinish={handleSubmit}>
          <Form.Item label="Email" name="email">
            <Input ref={emailRef} required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password ref={passwordRef} required />
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
