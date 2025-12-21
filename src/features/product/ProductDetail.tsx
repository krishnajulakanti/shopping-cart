import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, Spin, Alert, Space, Typography } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { fetchProductByIdAsync } from '../../store/products/productThunks';
import {
  selectSelectedProduct,
  selectProductLoading,
  selectProductError,
} from '../../store/products/selectors';
import useCart from '../../store/cart/useCart';
import { ROUTES, MESSAGES } from '../../constants';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

const { Title, Text, Paragraph } = Typography;

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const selectedItem = useAppSelector(selectSelectedProduct);
  const loading = useAppSelector(selectProductLoading);
  const error = useAppSelector(selectProductError);
  const { addItemToCart } = useCart();

  useEffect(() => {
    if (id) {
      dispatch(fetchProductByIdAsync(id));
    }
  }, [id, dispatch]);

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
            alt={selectedItem.title}
            src={selectedItem.image}
            style={{ height: '400px', objectFit: 'contain', padding: '20px' }}
          />
        }
      >
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Title level={2}>{selectedItem.title}</Title>
          <Text strong style={{ fontSize: '24px', color: '#1890ff' }}>
            Price: ₹ {selectedItem.price}
          </Text>
          <Paragraph>{selectedItem.description}</Paragraph>
          <Text>
            <strong>Category:</strong> {selectedItem.category}
          </Text>
          {selectedItem.rating && (
            <Text>
              <strong>Rating:</strong> {selectedItem.rating.rate} ({selectedItem.rating.count} reviews)
            </Text>
          )}
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
