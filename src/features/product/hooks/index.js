import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, fetchProductById } from '../redux/productSlice';

const useProduct = () => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product);

  const loadProducts = () => {
    dispatch(fetchProducts());
  };

  const loadProductById = (id) => {
    dispatch(fetchProductById(id));
  };

  return {
    ...productState,
    loadProducts,
    loadProductById,
  };
};

export default useProduct;
