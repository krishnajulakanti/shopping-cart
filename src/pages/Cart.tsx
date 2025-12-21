import React from 'react';
import { Row, Col, Button, Card, Empty, Space, Typography } from 'antd';
import { MinusOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
  clearCart,
} from '../store/cart/cartSlice';
import {
  selectCartItems,
  selectCartTotal,
} from '../store/cart/selectors';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { MESSAGES } from '../constants';

const { Title, Text } = Typography;

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const total = useAppSelector(selectCartTotal);

  if (items.length === 0) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <Empty description={MESSAGES.CART_EMPTY} />
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <Title level={1}>Shopping Cart</Title>
      <Row gutter={[16, 16]}>
        {items.map((item) => (
          <Col key={item.id} xs={24} sm={24} md={12} lg={8} xl={8}>
            <Card
              title={item.title}
              hoverable
              style={{ width: '100%' }}
              cover={
                <img
                  alt={item.title}
                  src={item.image}
                  style={{ height: '200px', objectFit: 'contain', padding: '10px' }}
                />
              }
              actions={[
                <Button
                  key="decrement"
                  icon={<MinusOutlined />}
                  onClick={() => dispatch(decrementQuantity(item.id))}
                  disabled={item.quantity <= 1}
                />,
                <Text key="quantity" strong>
                  {item.quantity}
                </Text>,
                <Button
                  key="increment"
                  icon={<PlusOutlined />}
                  onClick={() => dispatch(incrementQuantity(item.id))}
                />,
                <Button
                  key="remove"
                  danger
                  icon={<DeleteOutlined />}
                  onClick={() => dispatch(removeItem(item))}
                >
                  Remove
                </Button>,
              ]}
            >
              <Space orientation="vertical" style={{ width: '100%' }}>
                <Text>
                  <strong>Price:</strong> ₹ {item.price}
                </Text>
                <Text>
                  <strong>Quantity:</strong> {item.quantity}
                </Text>
                <Text>
                  <strong>Subtotal:</strong> ₹ {item.price * item.quantity}
                </Text>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
      <div style={{ marginTop: '20px', textAlign: 'right', padding: '20px', background: '#f5f5f5' }}>
        <Space orientation="vertical" align="end" size="large">
          <Button danger onClick={() => dispatch(clearCart())}>
            Clear Cart
          </Button>
          <Title level={3}>
            Total Amount: ₹ {total.toFixed(2)}
          </Title>
        </Space>
      </div>
    </div>
  );
};

export default Cart;
