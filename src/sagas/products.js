import firebase from 'firebase';
import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_PRODUCTS, getProductsSuccess, getProductsFailure } from '../actions/products';

/**
 * @returns {Promise} result
 */
function promise() {
  const result = new Promise((resolve, reject) => {
    const ref = firebase.database().ref('/products/');
    ref
      .once('value', (snapshot) => {
        resolve(snapshot.val());
      })
      .catch(e => reject(new Error(e)));
  });
  console.log(result);
  return result;
}

/**
 * @returns {void}
 */
function* getTodos() {
//   console.losg('+');
  try {
    const result = yield call(promise);
    // const mappedTodos = Object.keys(result).map(key => result[key]);
    console.log(result);
    yield put(getProductsSuccess(result));
  } catch (e) {
    yield put(getProductsFailure(e));
  }
}

/**
 * @returns{void}
 */
export default function* listenAllGetProductsRequests() {
  yield takeEvery(GET_PRODUCTS, getTodos);
}
