import firebase from 'firebase';
import { call, put, takeEvery } from 'redux-saga/effects';
import currentUser from '../firebase/user';

const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';
const ADD_TODO_RESPONSE = 'ADD_TODO_RESPONSE';
const ADD_TODO_FAILURE_RESPONSE = 'ADD_TODO_FAILURE_RESPONSE';
const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';

/**
 * @returns {void}
 * @param {string} text todo value
 */
function promise(text) {
  const result = new Promise((resolve, reject) => {
    const ref = firebase.database().ref('/').push();
    const todo = {
      id: ref.key,
      text,
      completed: false,
      userId: currentUser.uid,
    };
    ref.set(todo)
      .then(() => resolve(todo))
      .catch(e => reject(e));
  });
  return result;
}

/**
 * @returns {error} e
 * @param {action} args text of new todo
 */
function* add(args) {
  try {
    const result = yield call(promise, args.text);
    yield put({ type: ADD_TODO_RESPONSE, todo: result });
    yield put({ type: GET_TODOS_REQUEST });
  } catch (e) {
    yield put({ type: ADD_TODO_FAILURE_RESPONSE, error: e });
  }
}

/**
 * @returns {void}
 */
export default function* listenAllAddTodoRequests() {
  yield takeEvery(ADD_TODO_REQUEST, add);
}
