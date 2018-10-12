const initialState = {
  list: [],
};

/**
 * @param {array} state - previous state
 * @param {object} action - action
 * @returns {array} new state
 */
export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_TODOS':
      return Object.assign({}, state, {
        list: [],
      });
    case 'RESPONSE_TODOS':
      return Object.assign({}, state, {
        list: action.todos,
      });
    case 'FAILURE_RESPONSE_TODOS':
      return Object.assign({}, state, {
        list: [],
      });
    default:
      return state;
  }
}
