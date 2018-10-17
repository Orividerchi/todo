import firebase from 'firebase';
import { call, put, takeEvery } from 'redux-saga/effects';

const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
const UPDATE_TODO_REQUEST = 'UPDATE_TODO_REQUEST';
const UPDATE_TODO_RESPONSE = 'UPDATE_TODO_RESPONSE';
const UPDATE_TODO_FAILURE_RESPONSE = 'UPDATE_TODO_FAILURE_RESPONSE';

/**
 * @returns {Promise} result
 * @param {Object} todo todo item
 */
function promise(todo) {
  const result = new Promise((resolve, reject) => {
    const ref = firebase.database().ref(`${todo.id}`).child('text');
    const newText = todo.text;
    ref.set(newText)
      .then(() => resolve(newText))
      .catch(e => reject(e));
  });
  return result;
}

/**
 * @returns {void}
 * @param {action} args action
 */
function* updateTodo(args) {
  try {
    const result = yield call(promise, args.todo);
    yield put({ type: UPDATE_TODO_RESPONSE, todo: result });
    yield put({ type: GET_TODOS_REQUEST });
  } catch (e) {
    yield put({ type: UPDATE_TODO_FAILURE_RESPONSE, error: e });
  }
}

/**
 * @returns {void}
 */
export default function* listenAllUpdateTodoRequests() {
  yield takeEvery(UPDATE_TODO_REQUEST, updateTodo);
}
