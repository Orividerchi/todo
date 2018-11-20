import { fork } from 'redux-saga/effects';
import listenAllAddTodoRequests from './addTodo';
import listenDeleteUserCompletedTodosRequests from './deleteAll';
import listenAllDeleteTodoRequests from './deleteTodo';
import listenAllUpdateTodoRequests from './updateTodo';
import listenAllGoogleSignInRequests from './googleLogin';
import listenAllPasswordLoginRequests from './passwordLogin';
import listenAllSignUpRequests from './passwordRegister';
import listenAllGetTodosRequests from './getTodos';
import listenAllToggleTodoRequest from './toggleTodo';
import listenAllGetProductsRequests from './products';

/**
 * @returns {void}
 * @param {string} text todo value
 */
export default function* rootSaga() {
  yield fork(listenDeleteUserCompletedTodosRequests);
  yield fork(listenAllAddTodoRequests);
  yield fork(listenAllDeleteTodoRequests);
  yield fork(listenAllUpdateTodoRequests);
  yield fork(listenAllGoogleSignInRequests);
  yield fork(listenAllPasswordLoginRequests);
  yield fork(listenAllSignUpRequests);
  yield fork(listenAllGetTodosRequests);
  yield fork(listenAllToggleTodoRequest);
  yield fork(listenAllGetProductsRequests);
}
