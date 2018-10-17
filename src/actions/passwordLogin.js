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
