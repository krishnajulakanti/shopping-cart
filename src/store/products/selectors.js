export const selectProducts = (state) => state.product.items;

export const selectProductLoading = (state) => state.product.loading;

export const selectProductError = (state) => state.product.error;

export const selectSelectedProduct = (state) => state.product.selectedItem;

export const selectProductById = (state, productId) =>
  state.product.items.find((product) => product.id === productId);

