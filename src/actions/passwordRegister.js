const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_RESPONSE = 'SIGN_UP_RESPONSE';
const SIGN_UP_FAILURE_RESPONSE = 'SIGN_UP_FAILURE_RESPONSE';

export const signUpRequest = (email, password) => ({
  type: SIGN_UP_REQUEST,
  email,
  password,
});
export const signUpResponse = user => ({
  type: SIGN_UP_RESPONSE,
  user,
});
export const signUpFailureResponse = error => ({
  type: SIGN_UP_FAILURE_RESPONSE,
  error,
});
