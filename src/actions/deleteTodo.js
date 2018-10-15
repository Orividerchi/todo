import firebase from 'firebase';

const REQUEST_DELETE_TODO = 'REQUEST_DELETE_TODO';
const RESPONSE_DELETE_TODO = 'RESPONSE_DELETE_TODO';
const FAILURE_RESPONSE_DELETE_TODO = 'FAILURE_RESPONSE_DELETE_TODO';

export const requestDeleteTodo = id => ({
  type: REQUEST_DELETE_TODO,
  id,
});
export const responseDeleteTodo = () => ({
  type: RESPONSE_DELETE_TODO,
});
export const failureResponseDeleteTodo = error => ({
  type: FAILURE_RESPONSE_DELETE_TODO,
  error,
});
export const deleteTodo = id => async (dispatch) => {
  dispatch(requestDeleteTodo(id));
  try {
    const result = await new Promise((resolve, reject) => {
      firebase.database().ref(`/${id}`).remove()
        .then(() => resolve('deleted'))
        .catch(e => reject(e));
    });
    if (!result) {
      throw new Error("Can't add todo");
    }
    return dispatch(responseDeleteTodo());
  } catch (e) {
    return dispatch(failureResponseDeleteTodo(e));
  }
};
