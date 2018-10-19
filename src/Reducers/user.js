const initialState = {
  user: false,
};

const PASSWORD_SIGN_IN_REQUEST = 'PASSWORD_SIGN_IN_REQUEST';
const PASSWORD_SIGN_IN_RESPONSE = 'PASSWORD_SIGN_IN_RESPONSE';
const PASSWORD_SIGN_IN_FAILURE_RESPONSE = 'PASSWORD_SIGN_IN_FAILURE_RESPONSE';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';

/**
   * @param {array} state - previous state
   * @param {object} action - action
   * @returns {array} new state
   */
export default function user(state = initialState, action) {
  switch (action.type) {
    case PASSWORD_SIGN_IN_REQUEST:
      return Object.assign({}, state, {
        user: false,
      });
    case PASSWORD_SIGN_IN_RESPONSE:
      return Object.assign({}, state, {
        user: true,
      });
    case PASSWORD_SIGN_IN_FAILURE_RESPONSE:
      return Object.assign({}, state, {
        user: false,
      });
    case LOG_OUT_SUCCESS:
      return Object.assign({}, state, {
        user: false,
      });
    default:
      return state;
  }
}
