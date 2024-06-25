import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useProduct from '../hooks';
import useCart from '../../cart/hooks';
import { Button } from 'antd';

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
    <div>
      <h1>{selectedItem?.title}</h1>
      <p>Price: ${selectedItem?.price}</p>
      <Button onClick={() => navigateToCart(selectedItem)}>Add to Cart</Button>
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