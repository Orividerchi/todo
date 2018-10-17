const UPDATE_TODO_REQUEST = 'UPDATE_TODO_REQUEST';
const UPDATE_TODO_RESPONSE = 'UPDATE_TODO_RESPONSE';
const UPDATE_TODO_FAILURE_RESPONSE = 'UPDATE_TODO_FAILURE_RESPONSE';

export const updateTodoRequest = todo => ({
  type: UPDATE_TODO_REQUEST,
  todo,
});
export const updateTodoResponse = todo => ({
  type: UPDATE_TODO_RESPONSE,
  todo,
});
export const updateTodoFailureResponse = error => ({
  type: UPDATE_TODO_FAILURE_RESPONSE,
  error,
});
