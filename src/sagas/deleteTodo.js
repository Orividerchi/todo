import firebase from 'firebase';
import { call, put, takeEvery } from 'redux-saga/effects';

const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
const DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST';
const DELETE_TODO_RESPONSE = 'DELETE_TODO_RESPONSE';
const DELETE_TODO_FAILURE_RESPONSE = 'DELETE_TODO_FAILURE_RESPONSE';

/**
 * @returns {Promise} function
 * @param {string} id todo id
 */
function promise(id) {
  const result = new Promise((resolve, reject) => {
    firebase.database().ref(`/${id}`).remove()
      .then(() => resolve('deleted'))
      .catch(e => reject(e));
  });
  return result;
}

/**
 * @returns {void}
 * @param {action} args action
 */
function* deleteTodo(args) {
  try {
    yield call(promise, args.id);
    yield put({ type: DELETE_TODO_RESPONSE });
    yield put({ type: GET_TODOS_REQUEST });
  } catch (e) {
    yield put({ type: DELETE_TODO_FAILURE_RESPONSE, error: e });
  }
}

/**
 * @returns {void}
 */
export default function* listenAllDeleteTodoRequests() {
  yield takeEvery(DELETE_TODO_REQUEST, deleteTodo);
}
