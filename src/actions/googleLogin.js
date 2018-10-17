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
