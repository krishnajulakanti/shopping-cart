import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header: AntHeader } = Layout;

const Header = () => (
  <AntHeader>
    <div className="logo" />
    <Menu theme="dark" mode="horizontal">
      <Menu.Item key="1">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/cart">Cart</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/login">Login</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/register">Register</Link>
      </Menu.Item>
    </Menu>
  </AntHeader>
);

export default Header;
