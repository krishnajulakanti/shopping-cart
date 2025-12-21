import React from 'react';
import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import { ROUTES } from '../constants';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" icon={<HomeOutlined />} onClick={() => navigate(ROUTES.PRODUCTS)}>
          Back to Products
        </Button>
      }
    />
  );
};

export default NotFound;

