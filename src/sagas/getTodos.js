import firebase from 'firebase';
import { call, put, takeEvery } from 'redux-saga/effects';
import currentUser from '../firebase/user';

const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
const GET_TODOS_RESPONSE = 'GET_TODOS_RESPONSE';
const GET_TODOS_FAILURE_RESPONSE = 'GET_TODOS_FAILURE_RESPONSE';

/**
 * @returns {Promise} result
 */
function promise() {
  const result = new Promise((resolve, reject) => {
    const ref = firebase.database().ref('/');
    ref.orderByChild('userId').equalTo(currentUser.uid).once('value', (snapshot) => {
      resolve(snapshot.val());
    }).catch(e => reject(new Error(e)));
  });
  return result;
}

/**
 * @returns {void}
 */
function* getTodos() {
  try {
    const result = yield call(promise);
    const mappedTodos = Object
      .keys(result)
      .map(key => result[key]);
    yield put({ type: GET_TODOS_RESPONSE, todos: mappedTodos });
  } catch (e) {
    yield put({ type: GET_TODOS_FAILURE_RESPONSE, error: e });
  }
}

/**
 * @returns{void}
 */
export default function* listenAllGetTodosRequests() {
  yield takeEvery(GET_TODOS_REQUEST, getTodos);
}
