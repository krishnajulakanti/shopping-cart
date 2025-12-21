import React from 'react';
import { List, Button, Card, Empty, Space, Typography } from 'antd';
import { MinusOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import useCart from '../store/cart/useCart';
import { MESSAGES } from '../constants';

const { Title, Text } = Typography;

const Cart = () => {
  const { items, total, removeItemFromCart, incrementQuantityInCart, decrementQuantityInCart, clearCartItems } =
    useCart();

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
      <List
        grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 3, xl: 3, xxl: 3 }}
        dataSource={items}
        renderItem={(item) => (
          <List.Item>
            <Card
              title={item?.title}
              hoverable
              style={{ width: '100%' }}
              cover={
                <img
                  alt={item?.title}
                  src={item?.image}
                  style={{ height: '200px', objectFit: 'contain', padding: '10px' }}
                />
              }
              actions={[
                <Button
                  key="decrement"
                  icon={<MinusOutlined />}
                  onClick={() => decrementQuantityInCart(item)}
                  disabled={item.quantity <= 1}
                />,
                <Text key="quantity" strong>
                  {item?.quantity}
                </Text>,
                <Button
                  key="increment"
                  icon={<PlusOutlined />}
                  onClick={() => incrementQuantityInCart(item)}
                />,
                <Button
                  key="remove"
                  danger
                  icon={<DeleteOutlined />}
                  onClick={() => removeItemFromCart(item)}
                >
                  Remove
                </Button>,
              ]}
            >
              <Space direction="vertical" style={{ width: '100%' }}>
                <Text>
                  <strong>Price:</strong> ₹ {item?.price}
                </Text>
                <Text>
                  <strong>Quantity:</strong> {item?.quantity}
                </Text>
                <Text>
                  <strong>Subtotal:</strong> ₹ {item?.price * item?.quantity}
                </Text>
              </Space>
            </Card>
          </List.Item>
        )}
      />
      <div style={{ marginTop: '20px', textAlign: 'right', padding: '20px', background: '#f5f5f5' }}>
        <Space direction="vertical" align="end" size="large">
          <Button danger onClick={clearCartItems}>
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




//////////////////////////////////////////////////////////////////////////////////////////////////////////////








// const Cart = () => {
// const { items, removeItemFromCart, clearCartItems } = useCart();

//   return (
//     <div>
//       <h1>Shopping Cart</h1>
//       <List
//         dataSource={items}
//         renderItem={(item) => (
//           <List.Item>
//             <div>{item.name}</div>
//             <div>₹{item.price}</div>
//             <Button onClick={() => removeItemFromCart(item)}>Remove</Button>
//           </List.Item>
//         )}
//       />
//       <Button onClick={clearCartItems}>Clear Cart</Button>
//     </div>
//   );
// };

// export default Cart;