import firebase from 'firebase';

export const requestPasswordLogin = (email, password) => ({
  type: 'REQUEST_PASSWORD_LOGIN',
  email,
  password,
});
export const responsePasswordLogin = user => ({
  type: 'RESPONSE_PASSWORD_LOGIN',
  user,
});
export const failureResponsePasswordLogin = error => ({
  type: 'FAILURE_RESPONSE_PASSWORD_LOGIN',
  error,
});
export const passwordLogin = (email, password) => async (dispatch) => {
  dispatch(requestPasswordLogin(email, password));
  const result = await new Promise((resolve) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then((signIn) => {
      resolve(signIn.user);
    }).catch((e) => {
      alert(e);
      return dispatch(failureResponsePasswordLogin(e));
    });
  });
  return dispatch(responsePasswordLogin(result));
};
