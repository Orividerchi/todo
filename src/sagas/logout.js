
import { call, put, takeEvery } from 'redux-saga/effects';

const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAIL = 'LOG_OUT_FAIL';

/**
 * @returns {Promise} result
 * @param {string} username user email
 * @param {string} password user password
 */
function promise() {
  const url = 'http://localhost:8080/users/logout';
  const result = fetch(url, {
    method: 'POST',
  }).then(response => response, error => error);
  return result;
}

/**
 * @returns {void}
 */
function* passwordLogin() {
  try {
    const result = yield call(promise);
    if (result.status === 200) {
      yield put({ type: LOG_OUT_SUCCESS, user: result });
    } else {
      throw (result.statusText);
    }
  } catch (e) {
    yield put({ type: LOG_OUT_FAIL, error: e });
  }
}

/**
 * @returns {void}
 */
export default function* listenAllLogOutRequests() {
  yield takeEvery(LOG_OUT_REQUEST, passwordLogin);
}
