const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAIL = 'LOG_OUT_FAIL';

export const logOutRequest = () => ({
  type: LOG_OUT_REQUEST,
});
export const logOutSuccess = user => ({
  type: LOG_OUT_SUCCESS,
  user,
});
export const logOutFail = error => ({
  type: LOG_OUT_FAIL,
  error,
});
