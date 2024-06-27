import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../features/auth/hooks';

const { Header: AntHeader } = Layout;

const Header = () => {

  const { logoutUser } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    logoutUser();
    navigate('/')
  }

  return (
    <AntHeader>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/products">Products</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/cart">Cart</Link>
        </Menu.Item>
        <Menu.Item key="4" onClick={logout}>Logout</Menu.Item>
      </Menu>
    </AntHeader>
  )
};

export default Header;
