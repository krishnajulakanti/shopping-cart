import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, Spin, Alert, Space, Typography } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import useProduct from '../hooks/index';
import useCart from '../../cart/hooks/index';
import { ROUTES, MESSAGES } from '../../../constants';

const { Title, Text, Paragraph } = Typography;

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { selectedItem, loadProductById, loading, error } = useProduct();
  const { addItemToCart } = useCart();

  useEffect(() => {
    if (id) {
      loadProductById(id);
    }
  }, [id, loadProductById]);

  const handleAddToCart = () => {
    if (selectedItem) {
      addItemToCart(selectedItem);
      navigate(ROUTES.CART);
    }
  };

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

  if (!selectedItem) {
    return (
      <div style={{ padding: '20px' }}>
        <Alert message="Product not found" type="warning" showIcon />
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Card
        cover={
          <img
            alt={selectedItem?.title}
            src={selectedItem?.image}
            style={{ height: '400px', objectFit: 'contain', padding: '20px' }}
          />
        }
      >
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Title level={2}>{selectedItem?.title}</Title>
          <Text strong style={{ fontSize: '24px', color: '#1890ff' }}>
            Price: ₹ {selectedItem?.price}
          </Text>
          <Paragraph>{selectedItem?.description}</Paragraph>
          <Text>
            <strong>Category:</strong> {selectedItem?.category}
          </Text>
          <Text>
            <strong>Rating:</strong> {selectedItem?.rating?.rate} ({selectedItem?.rating?.count} reviews)
          </Text>
          <Button
            type="primary"
            size="large"
            icon={<ShoppingCartOutlined />}
            onClick={handleAddToCart}
            block
          >
            Add to Cart
          </Button>
        </Space>
      </Card>
    </div>
  );
};

export default ProductDetail;






///////////////////////////////////////////////////////////////////////////////////////////////

// const ProductDetail = () => {
//   const { id } = useParams();
//   const { selectedItem, loadProductById, loading, error } = useProduct();

//   useEffect(() => {
//     loadProductById(id);
//   }, [id]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <h1>{selectedItem?.title}</h1>
//       <p>{selectedItem?.description}</p>
//       <p>Price: ${selectedItem?.price}</p>
//     </div>
//   );
// };

// export default ProductDetail;