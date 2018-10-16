import firebase from 'firebase';

const PASSWORD_SIGN_IN_REQUEST = 'PASSWORD_SIGN_IN_REQUEST';
const PASSWORD_SIGN_IN_RESPONSE = 'PASSWORD_SIGN_IN_RESPONSE';
const PASSWORD_SIGN_IN_FAILURE_RESPONSE = 'PASSWORD_SIGN_IN_FAILURE_RESPONSE';

export const passwordSignInRequest = (email, password) => ({
  type: PASSWORD_SIGN_IN_REQUEST,
  email,
  password,
});
export const passwordSignInResponse = user => ({
  type: PASSWORD_SIGN_IN_RESPONSE,
  user,
});
export const passwordSignInFailureResponse = error => ({
  type: PASSWORD_SIGN_IN_FAILURE_RESPONSE,
  error,
});
export const passwordLogin = (email, password) => async (dispatch) => {
  dispatch(passwordSignInRequest(email, password));
  const result = await new Promise((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then((signIn) => {
      resolve(signIn.user);
    }).catch((e) => {
      alert(e);
      reject(e);
      return dispatch(passwordSignInFailureResponse(e));
    });
  });
  return dispatch(passwordSignInResponse(result));
};
