import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { List, Card } from 'antd';
import useProduct from '../hooks';

const Products = () => {
  const { items, loadProducts, loading, error } = useProduct();

  useEffect(() => {
    loadProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Products</h1>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={items}
        renderItem={(item) => (
          <List.Item>
            <Card title={item?.title}>
              <img src={item?.image} alt="cong" style={{ height: '100px', width: '100px' }} />
              <p>Price: ₹ {item?.price}</p>
              <Link to={`/products/${item.id}`}>View Details</Link>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Products;
