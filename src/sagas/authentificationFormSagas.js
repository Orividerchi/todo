import { all, call } from 'redux-saga/effects';
import listenAllGoogleSignInRequests from './googleLogin';
import listenAllPasswordLoginRequests from './passwordLogin';
import listenAllSignUpRequests from './passwordRegister';

/**
 * @returns {void}
 * @param {string} text todo value
 */
export default function* rootSaga() {
  const saga = yield all([
    call(listenAllGoogleSignInRequests),
    call(listenAllPasswordLoginRequests),
    call(listenAllSignUpRequests),
  ]);
  return saga;
}
