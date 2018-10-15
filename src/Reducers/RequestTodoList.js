const initialState = {
  list: [],
};

const REQUEST_TODOS = 'REQUEST_TODOS';
const RESPONSE_TODOS = 'RESPONSE_TODOS';
const FAILURE_RESPONSE_TODOS = 'FAILURE_RESPONSE_TODOS';

/**
 * @param {array} state - previous state
 * @param {object} action - action
 * @returns {array} new state
 */
export default function todos(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TODOS:
      return Object.assign({}, state, {
        list: [],
      });
    case RESPONSE_TODOS:
      return Object.assign({}, state, {
        list: action.todos,
      });
    case FAILURE_RESPONSE_TODOS:
      return Object.assign({}, state, {
        list: [],
      });
    default:
      return state;
  }
}
