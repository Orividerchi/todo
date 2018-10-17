import firebase from 'firebase';
import { call, put, takeEvery } from 'redux-saga/effects';

const PASSWORD_SIGN_IN_REQUEST = 'PASSWORD_SIGN_IN_REQUEST';
const PASSWORD_SIGN_IN_RESPONSE = 'PASSWORD_SIGN_IN_RESPONSE';
const PASSWORD_SIGN_IN_FAILURE_RESPONSE = 'PASSWORD_SIGN_IN_FAILURE_RESPONSE';

/**
 * @returns {Promise} result
 * @param {string} email user email
 * @param {string} password user password
 */
function promise(email, password) {
  const result = new Promise((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then((signIn) => {
      resolve(signIn.user);
    }).catch((e) => {
      alert(e);
      reject(e);
    });
  });
  return result;
}

/**
 * @returns {void}
 * @param {action} args action
 */
function* passwordLogin(args) {
  try {
    const result = yield call(promise, args.email, args.password);
    yield put({ type: PASSWORD_SIGN_IN_RESPONSE, user: result });
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
