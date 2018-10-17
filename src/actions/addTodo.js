const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';
const ADD_TODO_RESPONSE = 'ADD_TODO_RESPONSE';
const ADD_TODO_FAILURE_RESPONSE = 'ADD_TODO_FAILURE_RESPONSE';

export const addTodoRequest = text => ({
  type: ADD_TODO_REQUEST,
  text,
});
export const addTodoResponse = todo => ({
  type: ADD_TODO_RESPONSE,
  todo,
});
export const addTodoFailureResponse = error => ({
  type: ADD_TODO_FAILURE_RESPONSE,
  error,
});
