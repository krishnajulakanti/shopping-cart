import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { List, Card, Spin, Alert } from 'antd';
import useProduct from '../features/product/hooks';
import { ROUTES, MESSAGES } from '../constants';

const Products = () => {
  const { items, loadProducts, loading, error } = useProduct();

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
        <Spin size="large" tip={MESSAGES.LOADING} />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '20px' }}>
        <Alert message={MESSAGES.ERROR} description={error} type="error" showIcon />
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Products</h1>
      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4 }}
        dataSource={items}
        renderItem={(item) => (
          <List.Item>
            <Card
              title={item?.title}
              hoverable
              cover={
                <img
                  alt={item?.title}
                  src={item?.image}
                  style={{ height: '200px', objectFit: 'contain', padding: '10px' }}
                />
              }
            >
              <p>
                <strong>Price:</strong> ₹ {item?.price}
              </p>
              <Link to={`${ROUTES.PRODUCTS}/${item.id}`}>View Details</Link>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Products;