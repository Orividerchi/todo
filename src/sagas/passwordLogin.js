
import { call, put, takeEvery } from 'redux-saga/effects';

const PASSWORD_SIGN_IN_REQUEST = 'PASSWORD_SIGN_IN_REQUEST';
const PASSWORD_SIGN_IN_RESPONSE = 'PASSWORD_SIGN_IN_RESPONSE';
const PASSWORD_SIGN_IN_FAILURE_RESPONSE = 'PASSWORD_SIGN_IN_FAILURE_RESPONSE';

/**
 * @returns {Promise} result
 * @param {string} username user email
 * @param {string} password user password
 */
function promise(username, password) {
  const url = String('http://localhost:8080/login');
  const data = { username, password };
  const result = fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
  }).then(response => response, error => error);
  return result;
}

/**
 * @returns {void}
 * @param {action} args action
 */
function* passwordLogin(args) {
  try {
    const result = yield call(promise, args.email, args.password);
    console.log(result);
    if (result.status === 200) {
      yield put({ type: PASSWORD_SIGN_IN_RESPONSE, user: result });
    } else {
      throw (result.statusText);
    }
  } catch (e) {
    yield put({ type: PASSWORD_SIGN_IN_FAILURE_RESPONSE, error: e });
  }
}

/**
 * @returns {void}
 */
export default function* listenAllPasswordLoginRequests() {
  yield takeEvery(PASSWORD_SIGN_IN_REQUEST, passwordLogin);
}
