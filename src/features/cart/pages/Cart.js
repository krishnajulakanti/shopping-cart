import React from 'react';
import { List, Button } from 'antd';
import useCart from '../hooks';

const Cart = () => {
  const { items, removeItemFromCart, clearCartItems } = useCart();

  return (
    <div>
      <h1>Shopping Cart</h1>
      <List
        dataSource={items}
        renderItem={(item) => (
          <List.Item>
            <div>{item.name}</div>
            <div>${item.price}</div>
            <Button onClick={() => removeItemFromCart(item)}>Remove</Button>
          </List.Item>
        )}
      />
      <Button onClick={clearCartItems}>Clear Cart</Button>
    </div>
  );
};

export default Cart;
