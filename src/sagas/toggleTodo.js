import firebase from 'firebase';
import { call, put, takeEvery } from 'redux-saga/effects';

const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
const TOGGLE_TODO_REQUEST = 'TOGGLE_TODO_REQUEST';
const TOGGLE_TODO_RESPONSE = 'TOGGLE_TODO_RESPONSE';
const TOGGLE_TODO_FAILURE_RESPONSE = 'TOGGLE_TODO_FAILURE_RESPONSE';

/**
 * @returns {Promise} result
 * @param {Object} todo todo
 */
function promise(todo) {
  const result = new Promise((resolve, reject) => {
    const ref = firebase.database().ref(`/${todo.id}`).child('completed');
    const completed = !todo.completed;
    ref.set(completed).then(() => resolve(completed)).catch(e => reject(new Error(e)));
  });
  return result;
}

/**
 * @returns {void}
 * @param {action} args todo
 */
function* toggleTodo(args) {
  try {
    const result = yield call(promise, args.todo);
    yield put({ type: TOGGLE_TODO_RESPONSE, todo: result });
    yield put({ type: GET_TODOS_REQUEST });
  } catch (e) {
    yield put({ type: TOGGLE_TODO_FAILURE_RESPONSE, error: e });
  }
}

/**
 * @returns {void}
 */
export default function* listenAllToggleTodoRequest() {
  yield takeEvery(TOGGLE_TODO_REQUEST, toggleTodo);
}
