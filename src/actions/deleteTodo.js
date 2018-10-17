const DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST';
const DELETE_TODO_RESPONSE = 'DELETE_TODO_RESPONSE';
const DELETE_TODO_FAILURE_RESPONSE = 'DELETE_TODO_FAILURE_RESPONSE';

export const deleteTodoRequest = id => ({
  type: DELETE_TODO_REQUEST,
  id,
});
export const deleteTodoResponse = () => ({
  type: DELETE_TODO_RESPONSE,
});
export const deleteTodoFailureResponse = error => ({
  type: DELETE_TODO_FAILURE_RESPONSE,
  error,
});
