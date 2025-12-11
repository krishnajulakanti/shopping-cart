import React from 'react';
import { List, Button, Card } from 'antd';
import useCart from '../hooks';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../redux/cartSlice';

const Cart = () => {
  const totalAmount = useSelector(selectCartTotal);

  const { items, removeItemFromCart, incrementQuantityInCart, decrementQuantityInCart, clearCartItems } = useCart();

  return (
    <div>
      <h1>Shopping Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <List
            dataSource={items}
            renderItem={(item) => (
              <List.Item>
                <div key={item?.id} className="cart-item" style={{ height: '100%', width: '20%' }}>
                  <Card title={item?.title} >
                    <img src={item?.image} alt="cong" style={{ height: '100px', width: '100px' }} />
                    <p>Price: ₹ {item?.price}</p>
                    <p>Quantity: {item?.quantity}</p>
                    <p>Total: ₹ {item?.price * item?.quantity}</p>
                    <Button onClick={() => incrementQuantityInCart(item)}>+</Button>
                    <Button onClick={() => decrementQuantityInCart(item)}>-</Button>
                    <Button onClick={() => removeItemFromCart(item)}>Remove Item</Button>
                  </Card>
                </div>
              </List.Item>
            )}
          />
          <Button onClick={clearCartItems}>Clear Cart</Button>
          <h2>Total Amount: ₹ {totalAmount}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
