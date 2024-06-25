import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useProduct from '../hooks';
import useCart from '../../cart/hooks';
import { Button, Card } from 'antd';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { selectedItem, loadProductById, loading, error } = useProduct();
  const { addItemToCart } = useCart();

  useEffect(() => {
    loadProductById(id);
  }, [id]);

  const navigateToCart = (selectedItem) => {
    addItemToCart(selectedItem)
    navigate('/cart');
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ height: '100%', width: '20%' }}>
      <Card title={selectedItem?.title}>
        <img src={selectedItem?.image} alt="cong" style={{ height: '50%', width: '30%' }} />
        <p>Price: ₹ {selectedItem?.price}</p>
        <p>{selectedItem?.description}</p>
        <p>Category: {selectedItem?.category}</p>
        <Button onClick={() => navigateToCart(selectedItem)}>Add to Cart</Button>
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