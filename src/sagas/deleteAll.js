import firebase from 'firebase';
import { call, put, takeEvery } from 'redux-saga/effects';

const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
const DELETE_USER_COMPLETED_TODOS_REQUEST = 'DELETE_USER_COMPLETED_TODOS_REQUEST';
const DELETE_USER_COMPLETED_TODOS_RESPONSE = 'DELETE_USER_COMPLETED_TODOS_RESPONSE';
const DELETE_USER_COMPLETED_TODOS_FAILURE_RESPONSE = 'DELETE_USER_COMPLETED_TODOS_FAILURE_RESPONSE';

/**
 * @returns {Promise} function
 * @param {array} todos todo list
 */
function promise(todos) {
  const result = new Promise((resolve, reject) => {
    const ref = firebase.database().ref();
    const newTodos = {};
    todos.reduce((prev, todo) => {
      if (todo.completed) {
        newTodos[`/${todo.id}`] = null;
      }
      return null;
    }, 0);
    ref.update(newTodos)
      .then(resolve(newTodos))
      .catch(reject(new Error()));
  });
  return result;
}

/**
 * @param {action} args todo list
 * @returns {void}
 */
function* deleteAllCompletedTodos(args) {
  try {
    const result = yield call(promise, args.todos);
    yield put({ type: DELETE_USER_COMPLETED_TODOS_RESPONSE, todos: result });
    yield put({ type: GET_TODOS_REQUEST });
  } catch (e) {
    yield put({ type: DELETE_USER_COMPLETED_TODOS_FAILURE_RESPONSE, error: e });
  }
}

/**
 * @returns {void}
 */
export default function* listenDeleteUserCompletedTodosRequests() {
  yield takeEvery(DELETE_USER_COMPLETED_TODOS_REQUEST, deleteAllCompletedTodos);
}
