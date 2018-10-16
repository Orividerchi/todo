import firebase from 'firebase';

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
export const toggleTodo = todo => async (dispatch) => {
  dispatch(toggleTodoRequest(todo));
  try {
    const result = await new Promise((resolve, reject) => {
      const ref = firebase.database().ref(`/${todo.id}`).child('completed');
      const completed = !todo.completed;
      ref.set(completed).then(() => resolve(completed)).catch(e => reject(new Error(e)));
    });
    return dispatch(toggleTodoResponse(result));
  } catch (e) {
    return dispatch(toggleTodoFailureResponse(e));
  }
};
