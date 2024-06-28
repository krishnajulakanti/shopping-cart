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

  const menuItems = [
    {
      key: '1',
      label: <Link to="/">Home</Link>,
    },
    {
      key: '2',
      label: <Link to="/products">Products</Link>,
    },
    {
      key: '3',
      label: <Link to="/cart">Cart</Link>,
    },
    {
      key: '4',
      label: 'Logout',
      onClick: logout,
    },
  ];

  return (
    <AntHeader>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" items={menuItems} />
    </AntHeader>
  )
};

export default Header;
