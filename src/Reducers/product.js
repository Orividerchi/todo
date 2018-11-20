import { GET_PRODUCTS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_SUCCESS } from '../actions/products';

const initialState = {
  list: [],
};

/**
 * @param {array} state - previous state
 * @param {object} action - action
 * @returns {array} new state
 */
export default function products(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return Object.assign({}, state, {
        list: [],
      });
    case GET_PRODUCTS_SUCCESS:
      return Object.assign({}, state, {
        list: action.productList,
      });
    case GET_PRODUCTS_FAILURE:
      return Object.assign({}, state, {
        list: [],
      });
    default:
      return state;
  }
}
