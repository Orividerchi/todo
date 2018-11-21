export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';
export const SET_ORDER = 'SET_ORDER';
export const SET_ORDER_SUCCESS = 'SET_ORDER_SUCCESS';
export const SET_ORDER_FAILURE = 'SET_ORDER_FAILURE';

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
export const setOrder = (name, count, adress, number) => ({
  type: SET_ORDER,
  name,
  count,
  adress,
  number,
});
export const setOrderSuccess = () => ({
  type: SET_ORDER_SUCCESS,
});
export const setOrderFailure = error => ({
  type: SET_ORDER_FAILURE,
  error,
});
