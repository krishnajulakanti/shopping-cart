import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { fetchProducts, fetchProductById } from './productSlice';
import {
  selectProducts,
  selectProductLoading,
  selectProductError,
  selectSelectedProduct,
} from './selectors';

const useProduct = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectProducts);
  const loading = useSelector(selectProductLoading);
  const error = useSelector(selectProductError);
  const selectedItem = useSelector(selectSelectedProduct);

  const loadProducts = useCallback(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const loadProductById = useCallback(
    (id) => {
      dispatch(fetchProductById(id));
    },
    [dispatch]
  );

  return {
    items,
    loading,
    error,
    selectedItem,
    loadProducts,
    loadProductById,
  };
};

export default useProduct;
