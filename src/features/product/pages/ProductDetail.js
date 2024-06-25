import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '../hooks';

const ProductDetail = () => {
  const { id } = useParams();
  const { selectedItem, loadProductById, loading, error } = useProduct();

  useEffect(() => {
    loadProductById(id);
  }, [id, loadProductById]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{selectedItem?.name}</h1>
      <p>{selectedItem?.description}</p>
      <p>Price: ${selectedItem?.price}</p>
    </div>
  );
};

export default ProductDetail;
