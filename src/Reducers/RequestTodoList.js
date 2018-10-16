const initialState = {
  list: [],
};

const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
const GET_TODOS_RESPONSE = 'GET_TODOS_RESPONSE';
const GET_TODOS_FAILURE_RESPONSE = 'GET_TODOS_FAILURE_RESPONSE';

/**
 * @param {array} state - previous state
 * @param {object} action - action
 * @returns {array} new state
 */
export default function todos(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return Object.assign({}, state, {
        list: [],
      });
    case GET_TODOS_RESPONSE:
      return Object.assign({}, state, {
        list: action.todos,
      });
    case GET_TODOS_FAILURE_RESPONSE:
      return Object.assign({}, state, {
        list: [],
      });
    default:
      return state;
  }
}
