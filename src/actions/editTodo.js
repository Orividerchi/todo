import firebase from 'firebase';

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
export const updateTodo = todo => async (dispatch) => {
  dispatch(updateTodoRequest(todo));
  try {
    const result = await new Promise((resolve, reject) => {
      const ref = firebase.database().ref(`${todo.id}`).child('text');
      const newText = todo.text;
      ref.set(newText)
        .then(() => resolve(newText))
        .catch(e => reject(e));
    });
    if (!result) {
      throw new Error("Can't add todo");
    }
    return dispatch(updateTodoResponse(result));
  } catch (e) {
    return dispatch(updateTodoFailureResponse(e));
  }
};
