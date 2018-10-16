import firebase from 'firebase';

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
export const deleteTodo = id => async (dispatch) => {
  dispatch(deleteTodoRequest(id));
  try {
    const result = await new Promise((resolve, reject) => {
      firebase.database().ref(`/${id}`).remove()
        .then(() => resolve('deleted'))
        .catch(e => reject(e));
    });
    if (!result) {
      throw new Error("Can't add todo");
    }
    return dispatch(deleteTodoResponse());
  } catch (e) {
    return dispatch(deleteTodoFailureResponse(e));
  }
};
