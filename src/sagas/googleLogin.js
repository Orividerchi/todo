import firebase from 'firebase';
import { call, put, takeEvery } from 'redux-saga/effects';

const GOOGLE_SIGN_IN_REQUEST = 'GOOGLE_SIGN_IN_REQUEST';
const GOOGLE_SIGN_IN_RESPONSE = 'GOOGLE_SIGN_IN_RESPONSE';
const GOOGLE_SIGN_IN_FAILURE_RESPONSE = 'GOOGLE_SIGN_IN_FAILURE_RESPONSE';

/**
 * @returns {Promise} result
 */
function promise() {
  const result = new Promise((resolve, reject) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(newUser => resolve(newUser.user))
      .catch(e => reject(e));
  });
  return result;
}

/**
 * @returns {void}
 */
function* googleSignIn() {
  try {
    const result = yield call(promise);
    yield put({ type: GOOGLE_SIGN_IN_RESPONSE, user: result });
  } catch (e) {
    yield put({ type: GOOGLE_SIGN_IN_FAILURE_RESPONSE, error: e });
  }
}

/**
 * @returns {void}
 */
export default function* listenAllGoogleSignInRequests() {
  yield takeEvery(GOOGLE_SIGN_IN_REQUEST, googleSignIn);
}
