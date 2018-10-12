import firebase from 'firebase';

export const requestGoogleLogin = () => ({
  type: 'REQUEST_GOOGLE_LOGIN',
});
export const responseGoogleLogin = user => ({
  type: 'RESPONSE_GOOGLE_LOGIN',
  user,
});
export const failureResponseGoogleLogin = error => ({
  type: 'FAILURE_RESPONSE_GOOGLE_LOGIN',
  error,
});
export const googleLogin = () => async (dispatch) => {
  dispatch(requestGoogleLogin());
  try {
    const result = await new Promise((resolve) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then((newUser) => {
        resolve(newUser.user);
      });
    });
    if (!result) {
      throw new Error();
    }
    return dispatch(responseGoogleLogin(result));
  } catch (e) {
    return dispatch(failureResponseGoogleLogin(e));
  }
};
