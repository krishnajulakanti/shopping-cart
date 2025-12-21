import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Spin, Alert } from 'antd';
import { fetchProductsAsync } from '../store/products/productThunks';
import {
  selectProducts,
  selectProductLoading,
  selectProductError,
} from '../store/products/selectors';
import { ROUTES, MESSAGES } from '../constants';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

const Products: React.FC = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectProducts);
  const loading = useAppSelector(selectProductLoading);
  const error = useAppSelector(selectProductError);

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
        <Spin size="large" />
        <span style={{ marginLeft: '12px' }}>{MESSAGES.LOADING}</span>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '20px' }}>
        <Alert title={MESSAGES.ERROR} description={error} type="error" showIcon />
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Products</h1>
      <Row gutter={[16, 16]}>
        {items.map((item) => (
          <Col key={item.id} xs={24} sm={12} md={8} lg={6} xl={6}>
            <Card
              title={item.title}
              hoverable
              cover={
                <img
                  alt={item.title}
                  src={item.image}
                  style={{ height: '200px', objectFit: 'contain', padding: '10px' }}
                />
              }
            >
              <p>
                <strong>Price:</strong> ₹ {item.price}
              </p>
              <Link to={`${ROUTES.PRODUCTS}/${item.id}`}>View Details</Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
