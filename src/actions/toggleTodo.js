const TOGGLE_TODO_REQUEST = 'TOGGLE_TODO_REQUEST';
const TOGGLE_TODO_RESPONSE = 'TOGGLE_TODO_RESPONSE';
const TOGGLE_TODO_FAILURE_RESPONSE = 'TOGGLE_TODO_FAILURE_RESPONSE';

export const toggleTodoRequest = todo => ({
  type: TOGGLE_TODO_REQUEST,
  todo,
});
export const toggleTodoResponse = todo => ({
  type: TOGGLE_TODO_RESPONSE,
  todo,
});
export const toggleTodoFailureResponse = error => ({
  type: TOGGLE_TODO_FAILURE_RESPONSE,
  error,
});
