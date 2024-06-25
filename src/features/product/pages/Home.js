import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { List, Card } from 'antd';
import useProduct from '../hooks';

const Home = () => {
  const { items, loadProducts, loading, error } = useProduct();

  useEffect(() => {
    loadProducts();
    console.log(items, "items");
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
            <Card title={item.title}>
              <p>Price: ${item.price}</p>
              <Link to={`/product/${item.id}`}>View Details</Link>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Home;

// const items = [
//   { id: 1, name: 'Car', price: 10 },
//   { id: 2, name: 'Bike', price: 20 },
//   { id: 3, name: 'Lorry', price: 30 },
//   { id: 4, name: 'Jeep', price: 40 },
// ]