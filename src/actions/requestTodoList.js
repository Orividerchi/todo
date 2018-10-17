const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
const GET_TODOS_RESPONSE = 'GET_TODOS_RESPONSE';
const GET_TODOS_FAILURE_RESPONSE = 'GET_TODOS_FAILURE_RESPONSE';

export const getTodosRequest = () => ({
  type: GET_TODOS_REQUEST,
});
export const getTodosResponse = todos => ({
  type: GET_TODOS_RESPONSE,
  todos,
});
export const getTodosFailureResponse = error => ({
  type: GET_TODOS_FAILURE_RESPONSE,
  error,
});
