import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCartOutlined, HomeOutlined, LogoutOutlined } from '@ant-design/icons';
import useAuth from '../../store/auth/useAuth';
import { ROUTES } from '../../constants';
import type { MenuProps } from 'antd';

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  const { logoutUser, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate(ROUTES.PRODUCTS);
  };

  const menuItems: MenuProps['items'] = [
    {
      key: '1',
      icon: <HomeOutlined />,
      label: <Link to={ROUTES.PRODUCTS}>Products</Link>,
    },
    {
      key: '2',
      icon: <ShoppingCartOutlined />,
      label: <Link to={ROUTES.CART}>Cart</Link>,
    },
    {
      key: '3',
      icon: <LogoutOutlined />,
      label: 'Logout',
      onClick: handleLogout,
      disabled: !isAuthenticated,
    },
  ];

  return (
    <AntHeader style={{ display: 'flex', alignItems: 'center' }}>
      <div className="logo" style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', marginRight: '20px' }}>
        Shopping Cart
      </div>
      <Menu theme="dark" mode="horizontal" items={menuItems} style={{ flex: 1, minWidth: 0 }} />
    </AntHeader>
  );
};

export default Header;

