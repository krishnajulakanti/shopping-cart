import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCartOutlined, HomeOutlined, LogoutOutlined } from '@ant-design/icons';
import { logout } from '../../store/auth/authSlice';
import { selectIsAuthenticated } from '../../store/auth/selectors';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { ROUTES } from '../../constants';
import type { MenuProps } from 'antd';

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate(ROUTES.LOGIN);
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
