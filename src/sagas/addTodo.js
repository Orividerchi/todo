import { call, put, takeEvery } from 'redux-saga/effects';


const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';
const ADD_TODO_RESPONSE = 'ADD_TODO_RESPONSE';
const ADD_TODO_FAILURE_RESPONSE = 'ADD_TODO_FAILURE_RESPONSE';
const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';

/**
 * @returns {void}
 * @param {string} text todo value
 */
function promise(text) {
  const url = String('http://localhost:8080/todo/addtodo');
  const data = { todotitle: 'title', tododesc: text };
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
  })
    .then(response => response)
    .catch(e => e);
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
