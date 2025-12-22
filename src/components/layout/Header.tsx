import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCartOutlined, HomeOutlined, LogoutOutlined } from '@ant-design/icons';
import { logout } from '../../store/auth/authSlice';
import { selectIsAuthenticated, selectUser } from '../../store/auth/selectors';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { ROUTES } from '../../constants';
import type { MenuProps } from 'antd';
import type { AuthUser } from '../../store/auth/authContract';

const { Header: AntHeader } = Layout;
const { Text } = Typography;

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const authUser = useAppSelector(selectUser);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate(ROUTES.LOGIN);
  };

  // Extract username from various possible response structures
  const getUsername = (user: AuthUser | null): string | null => {
    if (!user) return null;
    
    // Priority 1: Check if response is a User object with name (backend returns user directly)
    if (user.response && typeof user.response === 'object') {
      const response = user.response as any;
      // Check if response has name directly
      if (response.name && typeof response.name === 'string') {
        return response.name;
      }
      // Check if response has user object with name
      if (response.user?.name && typeof response.user.name === 'string') {
        return response.user.name;
      }
    }
    
    // Priority 2: Check if user.user exists (original structure)
    if (user.user?.name) {
      return user.user.name;
    }
    
    return null;
  };

  const username = getUsername(authUser);

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
    <AntHeader style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div className="logo" style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', marginRight: '20px' }}>
        Shopping Cart
      </div>
      <Menu 
        theme="dark" 
        mode="horizontal" 
        items={menuItems} 
        style={{ flex: 1, minWidth: 0 }} 
      />
      <div style={{ color: 'white', fontSize: '16px', fontWeight: 500 }}>
        {isAuthenticated && username ? (
          <Text style={{ color: 'white' }}>Welcome {username}</Text>
        ) : null}
      </div>
    </AntHeader>
  );
};

export default Header;
