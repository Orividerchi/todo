import { all, call } from 'redux-saga/effects';
import listenAllAddTodoRequests from './addTodo';
import listenDeleteUserCompletedTodosRequests from './deleteAll';
import listenAllDeleteTodoRequests from './deleteTodo';
import listenAllUpdateTodoRequests from './updateTodo';
import listenAllGetTodosRequests from './getTodos';
import listenAllToggleTodoRequest from './toggleTodo';
import listenAllLogOutRequests from './logout';

/**
 * @returns {void}
 * @param {string} text todo value
 */
export default function* rootSaga() {
  const saga = yield all([
    call(listenDeleteUserCompletedTodosRequests),
    call(listenAllAddTodoRequests),
    call(listenAllDeleteTodoRequests),
    call(listenAllUpdateTodoRequests),
    call(listenAllGetTodosRequests),
    call(listenAllToggleTodoRequest),
    call(listenAllLogOutRequests),
  ]);
  return saga;
}
