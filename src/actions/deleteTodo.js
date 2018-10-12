import firebase from 'firebase';

export const requestDeleteTodo = id => ({
  type: 'REQUEST_DELETE_TODO',
  id,
});
export const responseDeleteTodo = () => ({
  type: 'RESPONSE_DELETE_TODO',
});
export const failureResponseDeleteTodo = error => ({
  type: 'FAILURE_RESPONSE_DELETE_TODO',
  error,
});
export const requestDelete = id => async (dispatch) => {
  dispatch(requestDeleteTodo(id));
  try {
    const result = await new Promise((resolve) => {
      firebase.database().ref(`/${id}`);
      resolve('deleted');
    });
    if (!result) {
      throw new Error("Can't add todo");
    }
    return dispatch(responseDeleteTodo());
  } catch (e) {
    return dispatch(failureResponseDeleteTodo(e));
  }
};
