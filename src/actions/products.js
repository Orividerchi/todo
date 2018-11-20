export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';

export const getProducts = () => ({
  type: GET_PRODUCTS,
});
export const getProductsSuccess = productList => ({
  type: GET_PRODUCTS_SUCCESS,
  productList,
});
export const getProductsFailure = error => ({
  type: GET_PRODUCTS_FAILURE,
  error,
});
