import firebase from 'firebase';

const REQUEST_GOOGLE_LOGIN = 'REQUEST_GOOGLE_LOGIN';
const RESPONSE_GOOGLE_LOGIN = 'RESPONSE_GOOGLE_LOGIN';
const FAILURE_RESPONSE_GOOGLE_LOGIN = 'FAILURE_RESPONSE_GOOGLE_LOGIN';

export const requestGoogleLogin = () => ({
  type: REQUEST_GOOGLE_LOGIN,
});
export const responseGoogleLogin = user => ({
  type: RESPONSE_GOOGLE_LOGIN,
  user,
});
export const failureResponseGoogleLogin = error => ({
  type: FAILURE_RESPONSE_GOOGLE_LOGIN,
  error,
});
export const googleLogin = () => async (dispatch) => {
  dispatch(requestGoogleLogin());
  try {
    const result = await new Promise((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .then(newUser => resolve(newUser.user))
        .catch(e => reject(e));
    });
    if (!result) {
      throw new Error();
    }
    return dispatch(responseGoogleLogin(result));
  } catch (e) {
    return dispatch(failureResponseGoogleLogin(e));
  }
};
