/* eslint-disable valid-jsdoc */
import firebase from 'firebase';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  GET_PRODUCTS,
  getProductsSuccess,
  getProductsFailure,
  SET_ORDER,
  setOrderFailure,
  setOrderSuccess,
} from '../actions/products';
import currentUser from '../firebase/user';

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
  return result;
}
/**
 * @returns {void}
 * @param {any} text a
 */
function promisePush(name, count, adress, number) {
  const result = new Promise((resolve, reject) => {
    const ref = firebase
      .database()
      .ref('/orders/')
      .push();
    const order = {
      id: ref.key,
      name,
      count,
      adress,
      number,
      completed: false,
      userId: currentUser.uid,
    };
    ref
      .set(order)
      .then(() => resolve(order))
      .catch(e => reject(e));
  });
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
    yield put(getProductsSuccess(result));
  } catch (e) {
    yield put(getProductsFailure(e));
  }
}

/**
 * @returns {void}
 * @param {any} param0 action
 */
function* setOrder({
  name, count, adress, number,
}) {
  try {
    yield call(promisePush, name, count, adress, number);
    yield put(setOrderSuccess());
  } catch (e) {
    yield put(setOrderFailure(e));
  }
}
/**
 * @returns{void}
 */
export default function* listenAllGetProductsRequests() {
  yield takeEvery(GET_PRODUCTS, getTodos);
  yield takeEvery(SET_ORDER, setOrder);
}
