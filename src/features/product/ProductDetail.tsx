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
import { addItem } from '../../store/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { ROUTES, MESSAGES } from '../../constants';

const { Title, Text, Paragraph } = Typography;

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const selectedItem = useAppSelector(selectSelectedProduct);
  const loading = useAppSelector(selectProductLoading);
  const error = useAppSelector(selectProductError);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductByIdAsync(id));
    }
  }, [id, dispatch]);

  const handleAddToCart = () => {
    if (selectedItem) {
      dispatch(addItem(selectedItem));
      navigate(ROUTES.CART);
    }
  };

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

  if (!selectedItem) {
    return (
      <div style={{ padding: '20px' }}>
        <Alert title="Product not found" type="warning" showIcon />
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
        <Space orientation="vertical" size="large" style={{ width: '100%' }}>
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
