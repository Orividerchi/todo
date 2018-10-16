import firebase from 'firebase';

const GOOGLE_SIGN_IN_REQUEST = 'GOOGLE_SIGN_IN_REQUEST';
const GOOGLE_SIGN_IN_RESPONSE = 'GOOGLE_SIGN_IN_RESPONSE';
const GOOGLE_SIGN_IN_FAILURE_RESPONSE = 'GOOGLE_SIGN_IN_FAILURE_RESPONSE';

export const googleSignInRequest = () => ({
  type: GOOGLE_SIGN_IN_REQUEST,
});
export const googleSignInResponse = user => ({
  type: GOOGLE_SIGN_IN_RESPONSE,
  user,
});
export const googleSignInFailureResponse = error => ({
  type: GOOGLE_SIGN_IN_FAILURE_RESPONSE,
  error,
});
export const googleSignIn = () => async (dispatch) => {
  dispatch(googleSignInRequest());
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
    return dispatch(googleSignInResponse(result));
  } catch (e) {
    return dispatch(googleSignInFailureResponse(e));
  }
};
