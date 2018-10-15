import firebase from 'firebase';

const REQUEST_PASSWORD_LOGIN = 'REQUEST_PASSWORD_LOGIN';
const RESPONSE_PASSWORD_LOGIN = 'RESPONSE_PASSWORD_LOGIN';
const FAILURE_RESPONSE_PASSWORD_LOGIN = 'FAILURE_RESPONSE_PASSWORD_LOGIN';

export const requestPasswordLogin = (email, password) => ({
  type: REQUEST_PASSWORD_LOGIN,
  email,
  password,
});
export const responsePasswordLogin = user => ({
  type: RESPONSE_PASSWORD_LOGIN,
  user,
});
export const failureResponsePasswordLogin = error => ({
  type: FAILURE_RESPONSE_PASSWORD_LOGIN,
  error,
});
export const passwordLogin = (email, password) => async (dispatch) => {
  dispatch(requestPasswordLogin(email, password));
  const result = await new Promise((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then((signIn) => {
      resolve(signIn.user);
    }).catch((e) => {
      alert(e);
      reject(e);
      return dispatch(failureResponsePasswordLogin(e));
    });
  });
  return dispatch(responsePasswordLogin(result));
};
