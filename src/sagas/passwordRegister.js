import { call, put, takeEvery } from 'redux-saga/effects';
import { passwordSignInRequest } from '../actions/passwordLogin';

const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_RESPONSE = 'SIGN_UP_RESPONSE';
const SIGN_UP_FAILURE_RESPONSE = 'SIGN_UP_FAILURE_RESPONSE';

/**
 * @returns {Promise} result
 * @param {string} email user email
 * @param {string} password user password
 */
function promise(email, password) {
  const url = String('http://localhost:8080/reg');
  const data = { username: 'user1', password, mail: email };
  console.log(typeof url);
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
  });
}

/**
 * @returns {void}
 * @param {action} args action
 */
function* signUp(args) {
  try {
    const result = yield call(promise, args.email, args.password);
    yield put({ type: SIGN_UP_RESPONSE, user: result });
    yield put({ type: passwordSignInRequest, email: args.email, password: args.password });
  } catch (e) {
    yield put({ type: SIGN_UP_FAILURE_RESPONSE, error: e });
  }
}

/**
 * @returns {void}
 */
export default function* listenAllSignUpRequests() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}
